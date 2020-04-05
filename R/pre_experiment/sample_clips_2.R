# sampled with Rstudio 1.2.5019
#              R 3.6.1 (2019-07-05)

# Will need the private_metadata.csv file from BabbleCor: https://osf.io/rz4tx/
# by contacting the authours and submitting the data usage agreement
# put the file in your project folder but DO NOT share publicly on github

# install.packages("tidyverse")
library(tidyverse)

#set working directory to where private metadata and unzipped clips direcotry live
setwd("C:/Users/Matt/Downloads/")
d <- read.csv("private_metadata.csv")

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




###SAMPLE FOR AGE-LANGUAGE RESEARCH QUESTION:

#split into six groups (age*language)
s <- split(d, d$age_language)

#sample n unique ids
min_n <- min(sapply(s, function(x){length(unique(x$unique_id))}))
ids <- sapply(s, function(x){sample(unique(x$unique_id), min_n, FALSE)})
ids <- c(ids)

#sample n clips from each of those unique ids
n_clips <- 20
set.seed(1234)
inds <- sapply(ids, function(x){
            sample(which(d$unique_id %in% x), n_clips, FALSE)
        })
inds <- c(inds)

selected_clips <- as.character(d$clip_ID[inds])

dir.create("./selected_audio_files_age-language")
file.copy(from = paste0("./clips/clips_corpus/", selected_clips),
          to = "./selected_audio_files_age-language",
          overwrite = TRUE)




###SAMPLE FOR SEX RESEARCH QUESTION:

#sample equal number of babies both male and female only non-English all from the same age group
d <- d %>% filter(language == "Non-English" & age_groups == "8-18")
s <- split(d, d$child_gender)

#sample n unique ids
min_n <- min(sapply(s, function(x){length(unique(x$unique_id))}))
ids <- sapply(s, function(x){sample(unique(x$unique_id), min_n, FALSE)})
ids <- c(ids)

#sample n clips from each of those unique ids
n_clips <- 20
set.seed(1234)
inds <- sapply(ids, function(x){
    sample(which(d$unique_id %in% x), n_clips, FALSE)
})
inds <- c(inds)

selected_clips <- as.character(d$clip_ID[inds])

dir.create("./selected_audio_files_sex")
file.copy(from = paste0("./clips/clips_corpus/", selected_clips),
          to = "./selected_audio_files_sex",
          overwrite = TRUE)

