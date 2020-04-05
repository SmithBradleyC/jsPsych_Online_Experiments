# Open the OSCWinter2020 R Project

# read in functions for making stimuli
source("./R/pre_experiment/OCSWinter2020_functions.R")

# load in list of files to (possibly) exclude
load("./R/pre_experiment/files_to_exclude.RData")

# install.packages("tidyverse")
# install.packages("here")
# install.packages("plyr")
library(tidyverse)
library(here)
library(plyr)

# Will need the private_metadata.csv file from BabbleCor: https://osf.io/rz4tx/
# by contacting the authours and submitting the data usage agreement
# put the file in your project folder but DO NOT share publicly on github
d <- read.csv("private_metadata.csv")

# remove the - sign. It causes problems later
d$corpus<-revalue(d$corpus, c("Casillas-Yeli"="CasillasYeli"))

#add a column called with a unique id (the original child id pasted together with the corpus)
d <- d %>% mutate(unique_id = paste0(child_ID, corpus))

#get rid of data from the warlaumont corpus
d <- d %>% filter(corpus != c("Warlaumont"))

#make a new column with the language
d <- d %>% mutate(language = ifelse(corpus == "Seedlings",
                                    "English",
                                    "Non-English"))

#make a categorical age variable based on 07, 8-18, and 19-36 groupings
d <- d %>% mutate(age_groups = ifelse(age_mo_round <= 7,
                                      "0-7",
                                      ifelse(age_mo_round <= 18,
                                             "8-18",
                                             "19-36")))

#make grouping variable for age-language question
d <- d %>% mutate(age_language = paste0(age_groups, language))

#keep only canonical and non-canonical
d <- d %>% filter(Answer %in% c("Canonical", "Non-canonical"))




### PREP CLIPS FOR AGE-LANGUAGE RESEARCH QUESTION:

# get list of previously selected files list for age_language trials
list_selected_files<-list.files("./audio/selected_audio_files/selected_audio_files_age_language",
                           pattern = "*.wav")

# get information for all those trials
selected_files<-subset(d,d$clip_ID %in% list_selected_files)
selected_files$file_id <- paste0(selected_files$unique_id, selected_files$clip_ID)


#get rejected files list
rejected_files <- unique(c(
# Not using barbie's exclusions. In hindsight they were too stringent
#    excluded_barbie,
# Michaels exclusions were done on a previous sample but still useful
    excluded_michael,
    excluded_sara
    )
)

# remove flaged files
selected_files <- selected_files[ ! selected_files$clip_ID %in% rejected_files, ]

# look at table to confirm each baby has at least 10 clips
table(selected_files$unique_id)
# our sample shows that 8Seedlings only has 9 clips
# 0531480323.wav was manually added to the selected_audio_files_age_language/manually_added folder

# add files manually
list_manually_added_files <- c("0531480323.wav")
manually_added_files <- subset(d,d$clip_ID %in% list_manually_added_files)
manually_added_files$file_id <- paste0(manually_added_files$unique_id, manually_added_files$clip_ID)
selected_files <- rbind(selected_files,manually_added_files)

# take good audio and filter down to 10 per child
selected_files <- selected_files %>%
    group_by(unique_id) %>%
    sample_n(10)

# confirm 10 clips per child
table(selected_files$unique_id)

# confirm 20 clips (2 children) per age_language condition
table(selected_files$age_language)


# delete folder if it exsists
unlink("./audio/selected_audio_files/clips_to_use", recursive = TRUE)
dir.create("./audio/selected_audio_files/clips_to_use")
file.copy(from = paste0("./audio/clips_corpus/", selected_files$clip_ID),
          to = "./audio/selected_audio_files/clips_to_use",
          overwrite = TRUE)

# create age-language test stimuli
txt<-"var age_language_stim = [\n"
for (i in unique(selected_files$unique_id)){
    txt<-paste0(txt,json_entry(selected_files, i))
}
txt<-paste0(txt,"]")
writeLines(txt,"./stimuli/age_language_test_stimuli.js")


### PREP CLIPS FOR SEX RESEARCH QUESTION:

#sample equal number of babies both male and female only non-English all from the same age group
d <- d %>% filter(language == "Non-English" & age_groups == "8-18")

# get list of previously selected files list for age_language trials
list_selected_files<-list.files("./audio/selected_audio_files/selected_audio_files_sex",
                                pattern = "*.wav")

# get information for all those trials
selected_files<-subset(d,d$clip_ID %in% list_selected_files)
selected_files$file_id <- paste0(selected_files$unique_id, selected_files$clip_ID)


#get rejected files list
rejected_files <- unique(c(
    # Not using barbie's exclusions. In hindsight they were too stringent
    #    excluded_barbie,
    # Michaels exclusions were done on a previous sample but still useful
    excluded_michael,
    excluded_sara
)
)

# remove flaged files
selected_files <- selected_files[ ! selected_files$clip_ID %in% rejected_files, ]

# look at table to confirm each baby has at least 10 clips
table(selected_files$unique_id)
# our sample shows that 7326Tseltal only has 7 clips
# 0979098614.wav, 0792978845.wav, 0350074286.wav were manually added to the selected_audio_files_sex folder

# add files manually
list_manually_added_files <- c("0979098614.wav", "0792978845.wav", "0350074286.wav")
manually_added_files <- subset(d,d$clip_ID %in% list_manually_added_files)
manually_added_files$file_id <- paste0(manually_added_files$unique_id, manually_added_files$clip_ID)
selected_files <- rbind(selected_files,manually_added_files)

# take good audio and filter down to 10 per child
selected_files <- selected_files %>%
    group_by(unique_id) %>%
    sample_n(10)

# check to make sure numbers are good
table(selected_files$unique_id)
table(selected_files$child_gender)

# copy files to correct folder
file.copy(from = paste0("./audio/clips_corpus/", selected_files$clip_ID),
          to = "./audio/selected_audio_files/clips_to_use",
          overwrite = TRUE)


# create sex test stimuli
txt<-"var sex_stim = [\n"
for (i in unique(selected_files$unique_id)){
    txt<-paste0(txt,json_entry(selected_files, i))
}
txt<-paste0(txt,"]")
writeLines(txt,"./stimuli/sex_test_stimuli.js")
