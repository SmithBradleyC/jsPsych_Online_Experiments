# Open the jsPysch_Online_Experiments R Project

# read in functions for making stimuli
source("./R/pre_experiment/functions_to_create_stimuli.R")

# set the words, colours, correct responses, and phase that you want
words <- c("MONTH", "UNDER", "PLATE", "CLOCK")
colours <- c("red", "yellow", "green")
cor_responses<-c("j","k","l")
phase<-"Practice"

# create test_stimuli
txt<-"var practice_stimuli = [\n"
for (i in 1:(length(words))){
    for(j in 1:(length(colours))){
        txt<-paste0(txt,json_entry(i,j,words,colours,cor_responses,phase))
    }
}
txt<-paste0(txt,"]")

# write the javascript file for index.html to use
writeLines(txt,"./stimuli/practice_stimuli.js")