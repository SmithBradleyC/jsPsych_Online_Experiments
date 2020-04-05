# require devtools and fireData packages
# if (!require("devtools")) install.packages("devtools")
# devtools::install_github("Kohze/fireData")

library(fireData) # https://github.com/Kohze/fireData


# secret key = JTRER28zbNsqNrE0vZRoal74D3JujQaQHjrUG5FW

# download all files from database
dataBackup(projectURL = "https://ocswinter2020.firebaseio.com", #proper URL
           secretKey = "JTRER28zbNsqNrE0vZRoal74D3JujQaQHjrUG5FW", #Secret Key of the database
           "./data/data.json") # file path of where to save the data (out default assumes cloning the GitHub repo)


# install.packages("jsonlite")
library("jsonlite")


#································To check the number of data points in the database ··············································

# open the file that was just downloaded
data<-unlist(jsonlite::fromJSON("./data/data.json"), recursive = FALSE, use.names = TRUE)

# install.packages("plyr")
library("plyr")

# collapse json levels
data<-rbind.fill(data)

# number of subjects
length(unique(data$subject))

