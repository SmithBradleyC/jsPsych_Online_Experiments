#······································································································
#································Get Trial-by-Trial Data ··············································
#······································································································
###### Unless you want to recompute the dataframe skip to Eliminate excluded participants section



#install.packages("jsonlite")
library("jsonlite")

flag<-FALSE
# *************************************************************************************************************
# ********** Users unfamiliar with Git LFS may have difficulty getting/using the final_data.json file *********
# ********** So the code that relies on this file is skipped by default, change the flag paramter to  *********
# ********** TRUE if you have the final_data.json file and want to recompute the dataframe. The       *********
# ********** tidied dataframe should be saved as trial_data.csv in the dataframe already so           *********
# ********** recomputing the data should be unnecessary (leave flag as false)                         *********
# *************************************************************************************************************

# SKIP THE FOLLOWING CODE BY DEFAULT
if(flag==TRUE){

# pull in data (should work assuming you have cloned the GitHub Repo)
data <- unlist(jsonlite::fromJSON("./data/final_data.json"), recursive = FALSE, use.names = TRUE)

# install.packages("plyr")
library("plyr")

# collapse a JSON level
data <- rbind.fill(data)

# funciton to pull JSON data
extract_json <- function(key, survey_data){
  return(survey_data[[max(grep(key, survey_data))]])
}

# create empty dataframe
tidy_data <- data.frame(matrix(0, length(unique(data$subject))*34, 15))

# set count
count<-1

# for each subject in the data
for(i in 1:length(unique(data$subject))){
  # get the data for just 1 participant
  sub_data <- data[data$subject == unique(data$subject)[i],]
  # get that participants survey data
  survey_data <- sub_data$responses[sub_data$phase == "Survey"]
  survey_data <- survey_data[! is.na(survey_data)]
  # extract JSON data
  survey_data <- sapply(survey_data, fromJSON)
  # get subject ID code
  subject<-sub_data$subject[1]
  # get childcare experience in months
  childcare<-as.numeric(extract_json("Childcare", survey_data))
  
  # program required a numerical response but allowed responses like "12 months" (as long as it started with a number)
  # this section extracts the data if that happened
  
  # if trying to make childcare numeric forced an NA then
  if(is.na(childcare)==TRUE){
    # get the string value and split it on spaces
    childcare_txt<-strsplit(extract_json("Childcare", survey_data)[[1]],split = " ")
    
    # if there is only 1 value after the split (meaning no spaces)
    if(length(childcare_txt[[1]])==1){
      # then split on "-" (they probably wrote "4-6")
      childcare_txt<-strsplit(extract_json("Childcare", survey_data)[[1]],split = "-")
      # then take the mean of the first and last number as our estimate
      childcare<-mean(c(as.numeric(childcare_txt[[1]][1]),as.numeric(childcare_txt[[1]][-1])))
    
    # or else
    }else{
      
      # if the first letter of the second "word" is y then we'll assume they wrote something like "2 years"
      if(tolower(substring(text = childcare_txt[[1]][2],first = 1,last = 1))=="y"){
        # then multiply the numerical value by 12 and use that value
        childcare<-(12)*as.numeric(childcare_txt[[1]][1])
      
      # or else
      }else{
        # assume they wrote something like "12 months" and just use the numerical value
        childcare<-as.numeric(childcare_txt[[1]][1])
      }
    }
  }
  # end section accounting for bad data entry for childcare
  
  # Do the same steps as above (for Childcare) for the variable Caregiving
  caregiver<-as.numeric(extract_json("Caregiver", survey_data)[[1]])
  if(is.na(caregiver)==TRUE){
    caregiver_txt<-strsplit(extract_json("Caregiver", survey_data)[[1]],split = " ")
    if(length(caregiver_txt[[1]])==1){
      caregiver_txt<-strsplit(extract_json("Caregiver", survey_data)[[1]],split = "-")
      caregiver<-mean(c(caregiver_txt[[1]][1],caregiver_txt[[1]][-1]))
    }else{
      if(tolower(substring(text = caregiver_txt[[1]][2],first = 1,last = 1))=="y"){
        caregiver<-(12)*as.numeric(caregiver_txt[[1]][1])
      }else{
        caregiver<-as.numeric(caregiver_txt[[1]][1])
      }
    }
  }
  # end section accoutn for bad data entry for caregiving
  
  # get participants age
  par_age<-as.numeric(extract_json("Par_Age", survey_data))
  # get participant's gender
  par_gen<-as.character(extract_json("Gender_Q", survey_data)[[1]])
  # get the text the participant chose to write in the "Other gender" box
  par_gen_other<-as.character(extract_json("Gender_Q", survey_data)[[2]])
  # get the participant's country of residence
  par_country<-as.character(extract_json("Country_Q", survey_data)[[1]])
  # get the text that the aprticipant chose to write int he "Other Country" box
  par_country_other<-as.character(extract_json("Country_Q", survey_data)[[2]])
  # get whether the participant has normal hearing
  hearing<-as.character(extract_json("Normal_hearing", survey_data))
  # get whether the participant has normal hearing
  engl_first<-as.character(extract_json("Engl_first_lang", survey_data))
  # get whether the participant knows any of the corpus languages
  know_corp<-as.character(paste0(extract_json("Know_corp_lang", survey_data)))
  # get whether the participant is monolingual
  monolingual<-as.character(extract_json("monolingual", survey_data))
  
  # for each data point (for the one participant we have singled out)
  for(j in 1:nrow(sub_data)){
    # if this is an experimental trial
    if(sub_data$correct[j] %in% c(0,1)){
      # then update the dataset we are creating with all the data (otherwise do nothing)
      tidy_data[count,] <- data.frame(subject,
                                      sub_data$correct[j],
                                      sub_data$phase[j],
                                      sub_data$time_elapsed[j]/60000,
                                      childcare,
                                      caregiver,
                                      par_age,
                                      par_gen,
                                      par_gen_other,
                                      par_country,
                                      par_country_other,
                                      hearing,
                                      engl_first,
                                      know_corp,
                                      monolingual,
                                      stringsAsFactors = FALSE)
      # updat the count
      count<-count+1
    }
  }
}

# set the variable names
colnames(tidy_data) <- c("subject_ID", "correct", "phase", "time_ellapsed_mins", "childcare", "caregiver", 
                         "age", "gender", "gender_text", "country", "country_text", "hearing", 
                         "eng_first", "know_corp_lang", "monolingual")
}
# END DEFAULT SKIPPING CODE

#··············································································································
#································Save trial by trail data as csv ··············································
#··············································································································



# *************************************************************************************************************
#************** If you have successfully run the above code then you can save the dataframe for later *********
#write.csv(tidy_data, "./data/trial_data.csv", row.names = FALSE) ####### uncomment this line to run it
# *************************************************************************************************************



#··············································································································
#································Eliminate excluded participants ··············································
#··············································································································
###### REQUIRES w_exclusions_summarized_data.csv file. If not found then run data_cleaning.R to create the file



#install.packages("readr")
library(readr)

# *************************************************************************************************************
#************** If you have a previously saved trial_data.csv then this is quicker**************
tidy_data <- read_csv("data/trial_data.csv") 
#**************************************************************************************************************


# get summarized datafile that includes participant exclusions (created by data_cleaning.R)
w_exclusions_data <- read_csv("data/w_exclusions_summarized_data.csv")
# only include the data from participants who pass exclusion criteria
tidy_data<-subset(tidy_data,tidy_data$subject_ID %in% w_exclusions_data$subject_ID)



#··············································································································
#································Save trial by trail data as csv w exclusions ·································
#··············································································································



# uncomment if you want to resave the trial-by-trial data with the appropriate participants excluded
# it should be already be found in the data folder of the repository
#write.csv(tidy_data, "./data/w_exclusions_trial_data.csv", row.names = FALSE)



#··············································································································
#································Follow Up Analysis ···························································
#··············································································································



# identify infant age

# Random intercept Model: Baseline
library(lme4)
model1<- glmer(correct~1+(1|subject_ID),
               data = subset(tidy_data,
                             tidy_data$gender%in%c("Male","Female") & tidy_data$phase=="Age"),
               family = binomial(link=logit))
summary(model1)



# Adding level 1 predictors: childcare & caredgiver
model2<- glmer(correct~1+childcare+caregiver+(1|subject_ID),
               data = subset(tidy_data,
                             tidy_data$gender%in%c("Male","Female") & tidy_data$phase=="Age"),
               family = binomial(link=logit))
summary(model2)

# Compare two models
anova(model1,model2)


#additional model with only childcare

model4<- glmer(correct~1+childcare+(1|subject_ID),
               data = subset(tidy_data,
                             tidy_data$gender%in%c("Male","Female") & tidy_data$phase=="Age"),
               family = binomial(link=logit))
summary(model4)

#compare to baseline model
anova(model1,model4)



# Adding level 2 predictor: Participant's gender
model3<- glmer(correct~1+childcare+caregiver+gender+(1|subject_ID),
               data = subset(tidy_data,
                             tidy_data$gender%in%c("Male","Female") & tidy_data$phase=="Age"),
               family = binomial(link=logit))
summary(model3)


# Compare two models
anova(model2,model3)

#`````````````````````````````````````````````````````````````````````````````````````````````````````````````
# identify infant language

# Random intercept Model: Baseline
library(lme4)
model1<- glmer(correct~1+(1|subject_ID),
               data = subset(tidy_data,
                             tidy_data$gender%in%c("Male","Female") & tidy_data$phase=="Language"),
               family = binomial(link=logit))
summary(model1)


# Adding level 1 predictors: childcare & caredgiver
model2<- glmer(correct~1+childcare+caregiver+(1|subject_ID),
               data = subset(tidy_data,
                             tidy_data$gender%in%c("Male","Female") & tidy_data$phase=="Language"),
               family = binomial(link=logit))
summary(model2)


# Compare two models
anova(model1,model2)

# Adding level 2 predictor: Participant's gender
model3<- glmer(correct~1+childcare+caregiver+gender+(1|subject_ID),
               data = subset(tidy_data,
                             tidy_data$gender%in%c("Male","Female") & tidy_data$phase=="Language"),
               family = binomial(link=logit))
summary(model3)


# Compare two models
anova(model2,model3)
