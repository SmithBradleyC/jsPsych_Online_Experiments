# require XML
if (!require("XML")) install.packages("XML")

# set the URL for the folder we're looking at
folderURL<-"http://home.cc.umanitoba.ca/~smithb21/jsPsych_example_experiment/data/individual_data/"

# get all the .csv files in the folder
file_list<-getHTMLLinks(folderURL, xpQuery = "//a/@href['.csv'=substring(., string-length(.) - 3)]")


##############################################################################
############ Save local copy of individual data ##############################
##############################################################################

# read in each .csv file in file_list and create a data frame with the same name as the .csv file
for (i in 1:length(file_list)){
  assign(file_list[i], 
         read.csv(paste(folderURL, file_list[i], sep=''))
  )
  # set location to save data. Assumes a cloned copy of the repository and open in the jsPsych_Online_Experiments R project
  write.csv(file_list[i],file = paste0("uManitoba_Server/data/individual_data/",file_list[i]))
  } 


##############################################################################
############ Save local copy of combined data ################################
##############################################################################


# read in each .csv file in file_list and rbind them into a data frame called data 
data <- 
  do.call("rbind", 
          lapply(file_list, 
                 function(x) 
                   read.csv(paste(folderURL, x, sep=''), 
                            stringsAsFactors = FALSE)))  

# save combined data to .csv file
write.csv(data, "./uManitoba_Server/data/data.csv", row.names = FALSE)
