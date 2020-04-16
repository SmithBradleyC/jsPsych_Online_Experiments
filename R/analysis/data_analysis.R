# here you can unpack the data and do your analysis

# get the jsonlite package and load it
if(!require("jsonlite")){install.packages("jsonlite");library(jsonlite)}
#library("jsonlite")

# read in the csv file
library(readr)
data <- read_csv("data/data.csv")

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
             mean(d$correct[d$phase == "Practice"], na.rm=TRUE), # % correct on Practice Stimuli
             max(d$time_elapsed) / 60000, # time taken for whole experiment in minutes
             min(d$time_elapsed) / 60000, # time taken on consent form in minutes 
             as.numeric(extract_json("Par_Age", survey_data)), # participant's age
             as.character(extract_json("Gender_Q", survey_data)[[1]]), # participant's gender
             as.character(extract_json("Gender_Q", survey_data)[[2]]), # participant's text in "other gender" box
             as.character(extract_json("Country_Q", survey_data)[[1]]), # participant's country of residence
             as.character(extract_json("Country_Q", survey_data)[[2]]), # participant's text in "other country" box
             as.character(extract_json("Par_ID", survey_data)), # extract ID given by people to see their own data
             as.numeric(sum(d$phase == "Attention_Check", na.rm=TRUE)), # how many times did they attempt the attention check
             stringsAsFactors = FALSE)
}


# create empty dataframe of the correct size
summarized_data <- data.frame(matrix(0, nrow = length(unique(data$subject)), ncol = 11))

# for each participant, extract their data
for(i in 1:length(unique(data$subject))){
  summarized_data[i, ] <- extract_subject_data(data[data$subject == unique(data$subject)[i], ])
}

# name the variables
colnames(summarized_data) <- c("subject_ID", "percent_correct", "time_mins","fin_consent_mins",
                         "age", "gender", "gender_text", "country", "country_text", "Par_ID", 
                         "n_attention_checks")

# save summarized data to .csv file
write.csv(summarized_data, "./data/summarized_data.csv", row.names = FALSE)