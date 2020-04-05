# install.packages("jsonlite")
library("jsonlite")

# install.packages("plyr")
library("plyr")

# open final_data and collapse a JSON level (final_data may cause problems for those unfamliar with Git LFS files)
data <- unlist(jsonlite::fromJSON("data/final_data.json"), recursive = FALSE, use.names = TRUE)
data <- rbind.fill(data)

# create a function to extract json data
extract_json <- function(key, survey_data){
    return(survey_data[[max(grep(key, survey_data))]])
}

# create a function to extract data for each subject
extract_subject_data <- function(d){
    # subset to survey data
    survey_data <- d$responses[d$phase == "Survey"]
    survey_data <- survey_data[! is.na(survey_data)]
    # extract survey values
    survey_data <- sapply(survey_data, fromJSON)
    # create a dataframe for this participant that includes all of the relevant data
    data.frame(d$subject, # subject ID
               mean(d$correct[d$phase == "Sex"], na.rm=TRUE), # % correct on Sex questions
               mean(d$correct[d$phase == "Language"], na.rm=TRUE),# % correct on Language questions
               mean(d$correct[d$phase == "Age"], na.rm=TRUE),# % correct on Age questions
               max(d$time_elapsed) / 60000, # time taken for whole experiment in minutes
               min(d$time_elapsed) / 60000, # time taken on consent form in minutes # BCS added
               (max(d$time_elapsed)-min(d$time_elapsed)) / 60000, # time taken between consent and end in minutes # BCS added
               max(as.numeric(d$rt[d$phase == "Sex" | d$phase == "Language" | d$phase == "Age"]),na.rm = T), # max response time during main experimental trials #BCS added
               as.numeric(extract_json("Childcare", survey_data)), # months of childcare experience
               as.numeric(extract_json("Caregiver", survey_data)), # months of caregiving experience
               as.numeric(extract_json("Par_Age", survey_data)), # participant's age
               as.character(extract_json("Gender_Q", survey_data)[[1]]), # participant's gender
               as.character(extract_json("Gender_Q", survey_data)[[2]]), # participant's text in "other gender" box
               as.character(extract_json("Country_Q", survey_data)[[1]]), # participant's country of residence
               as.character(extract_json("Country_Q", survey_data)[[2]]), # participant's text in "other country" box
               as.character(extract_json("Normal_hearing", survey_data)), # do they have normal hearing
               as.character(extract_json("Engl_first_lang", survey_data)), # is english thier first language
               as.character(paste0(extract_json("Know_corp_lang", survey_data))), # what langauges do they know from the corpus
               as.character(extract_json("monolingual", survey_data)), # do they consider themselves monolingual
               as.numeric(sum(d$phase == "Attention_Check", na.rm=TRUE)), # how many times did they attempt the attention check
               as.numeric(sum(d$phase == "audio_check", na.rm=TRUE))/2, # how many times did they attempt the audio check (/2 because 2 trials per attempt)
               as.numeric(var(d$button_pressed[d$phase == "Sex"] , na.rm=TRUE)), # variability in button presses for sex questions
               as.numeric(var(d$button_pressed[d$phase == "Language"] , na.rm=TRUE)), # variability in button presses for Language questions
               as.numeric(var(d$button_pressed[d$phase == "Age"] , na.rm=TRUE)), # variability in button presses for age questions
               stringsAsFactors = FALSE)
}

# create empty dataframe of the correct size
tidy_data <- data.frame(matrix(0, length(unique(data$subject)), 24))

# for each participant, extract their data
for(i in 1:length(unique(data$subject))){
    tidy_data[i, ] <- extract_subject_data(data[data$subject == unique(data$subject)[i], ])
}

# name the variables
colnames(tidy_data) <- c("subject_ID", "p_cor_sex", "p_cor_lang", "p_cor_age", "time_mins","fin_consent_mins",
                         "consent_to_fin_mins", "max_RT_exp_trials", "childcare", "caregiver", 
                         "age", "gender", "gender_text", "country", "country_text", "hearing", 
                         "eng_first", "know_corp_lang", "monolingual", "n_attention_checks", "n_audio_checks",
                         "var_sex", "var_lang", "var_age")

# if the participants didn't know any of the corpus languages then label it as "None"
tidy_data$know_corp_lang[tidy_data$know_corp_lang == "list()"] <- "None"

# write a csv file for the summarized data

# *************************************************************************************************************
# file should already be saved. Only uncomment if you want to overwite that save
#write.csv(tidy_data, "./data/summarized_data.csv", row.names = FALSE) 
# *************************************************************************************************************

###################################################################
##############  Incoperating Data Exclusions ################## BCS
###################################################################

w_exclusions_data <- tidy_data[tidy_data$n_attention_checks <=5,] #only those who took 5 or less tries on attention check
w_exclusions_data <- w_exclusions_data[w_exclusions_data$n_audio_checks <= 5, ] # only those who took 5 or less tries on audio check
w_exclusions_data <- w_exclusions_data[w_exclusions_data$gender %in% c("Female", "Male"), ] # only those who idetify as Male or Female
w_exclusions_data <- w_exclusions_data[w_exclusions_data$country %in% c("Canada", "USA"), ] # only those who reside in Canada/USA
w_exclusions_data <- w_exclusions_data[w_exclusions_data$eng_first == "Yes", ] # only those who first language is english
w_exclusions_data <- w_exclusions_data[w_exclusions_data$know_corp_lang == "None", ] # do not know any of the corpus langauges
w_exclusions_data <- w_exclusions_data[w_exclusions_data$var_sex > 0 & w_exclusions_data$var_lang > 0 & w_exclusions_data$var_age > 0, ] # remove those who only chose 1 response for a full block of trials

# write csv file for the summarized data including exclusions
# *************************************************************************************************************
# file should already be saved. Only uncomment if you want to overwite that save
#write.csv(w_exclusions_data, "./data/w_exclusions_summarized_data.csv", row.names = FALSE)
# *************************************************************************************************************