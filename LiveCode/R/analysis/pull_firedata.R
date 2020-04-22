# require devtools and fireData packages
if (!require("devtools")) install.packages("devtools")
if (!require("fireData")) devtools::install_github("Kohze/fireData")

library(fireData) # https://github.com/Kohze/fireData


# secret key = AIzaSyCMGKu7LtrTEB9jY17t9cJCJjmfhkYWaYc

# download all files from database
dataBackup(projectURL = "https://livecodeexampleexperiment.firebaseio.com", #databaseURL
           secretKey = "BFMIDmzqAJYyGHxqMq3z8td0l4ZxHs495q4WJNWy", #Secret Key of the database
           "./LiveCode/data/data.json") # file path of where to save the data (out default assumes cloning the GitHub repo)


# install.packages("jsonlite")
library("jsonlite")


#································To check the number of data points in the database ··············································

# open the file that was just downloaded
data<-unlist(jsonlite::fromJSON("./LiveCode/data/data.json"), recursive = FALSE, use.names = TRUE)

# install.packages("plyr")
library("plyr")

# collapse json levels
data<-rbind.fill(data)

#********************************************************************************************************************************
#*******************Data will still have json levels that need to be unpacked if you collected survey responses******************
#*******************One way to do this will be demonstrated in data_analysis.R***************************************************
#********************************************************************************************************************************

# number of subjects
length(unique(data$subject))

# save data to .csv file
write.csv(data, "./LiveCode/data/data.csv", row.names = FALSE)
