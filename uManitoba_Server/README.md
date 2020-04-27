# Hosting on the uManitoba Server

This will be a shorter and much more technically demanding method than the one presented in the [Parent Directory (jsPsych Online Experiments)](https://github.com/SmithBradleyC/jsPsych_Online_Experiments). I will be referencing and copying text from those instructions liberally so understanding them may make this process easier. Many of the steps will be drastically changed because this method will not require the use of Google's FireBase or GitHub. However, due to the technical complexity of hosting an experiment on "your own server" this explanation will not be as user friendly.

The benefit of doing so is that you can fully control where and how the data is stored. This is required for ethics approval at some universities.

## Broad Overview 

Here's a broad overview of how to run a jsPsych Experiment using the uManitoba servers to host it and save the data (You will need to be a uManitoba Student/Staff to do this but other universities have similar resources). It also explains how to link SONA to get and automatically credit participants:
- Program a jsPsych Experiment (or other software) with code to export the data to a local folder
- Set up/find your account on the uManitoba Servers
- Transfer your files to the uManitoba Servers
- Change the permissions for the files on your uManitoba Server account files
- Point your #SONA participants to the correct URL and set up a redirect to automatically grant them credit

## Overall Summary

The [Step-by-Step Guide](#step-by-step-guide) will walk you through:
- [Downloading important software](#download-important-software):
  - [Download R](#download-r)
  - [Download rStudio](#download-rstudio)
- [Copying this example experiment](#copying-this-example-experiment):
- [Running this example experiment](#running-this-example-experiment):
  - [General editing and testing of the experiment](#editing-and-testing-the-experiment)
  - [Finding your uManitoba Server Account](#finding-your-umanitoba-server-account)
  - [Hosting the experiment](#hosting-the-experiment)
  - [Collecting data remotely](#collecting-the-data-remotely)
  - [Automatically granting SONA credits](#crediting-sona-participants)

## Step-by-Step Guide

### Download Important Software:

#### Download R:

See [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#download-r)

#### Download rStudio:

See [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#download-rstudio)

#### Download FileZilla:

- Go to: https://filezilla-project.org/
- Click on the button to download the [FileZilla Client](https://filezilla-project.org/download.php?type=client) (not the server)
- Download and install the program for your operating system

## Copying This Example Experiment:

The easiest way copy this experiment is to fork the entire repository into your own GitHub account, and then clone it (so that it is saved locally on your machine). Alternatively, you can just clone/download the experiment without forking it. If you understand these instructions then you can skip to the section [Running This Example Experiment](#running-this-example-experiment), otherwise go check out the [instructions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#download-rstudio#copying-this-example-experiment). For running the experiment on the uManitoba Servers you will only need the files in the *uManitoba_Server* folder.

### Running This Example Experiment

Now that you have a local copy of the example experiment on your machine, you can begin to make and save your own edits. When you save the edits they will only be saved on your local machine until you [push them back to GitHub](#saving-edits-to-github). However, for this example, we don't necessarily need to push them back to GitHub because we're not hosting the experiment there.

#### Editing and Testing the Experiment

Because this experiment is the same as the one in the parent directory, you'll find that most of the files in this folder are copies from the parent directory. So for that reason see [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#download-rstudio) for an explanation of the files and how to make edits. Keep in mind that you can ignore/delete all the #FIREBASE code because we will not be using it to store/collect the data. There is no need to edit the experiment if you want to just see how it gets posted on the university server.

#### Finding your uManitoba Server Account

These instructions will be specific to the University of Manitoba. However, many universities have a similar set up so the method should be fairly general. If you want to use the official uManitoba resources to set up/find your personal webpage (assuming you're a uManitoba Student/Staff) then follow the instructions found here: https://home.cc.umanitoba.ca/setup.html. Otherwise follow my instructions below:
- If you haven't already, [Download FileZilla](#download-filezilla)
- Open FileZilla:
  - Connect to the server:
    - Host: sftp://ccl.cc.umanitoba.ca (or your school's server)
    - Username: your uManitoba username (e.g., smithzz)
    - Password: your uManitoba password
    - Port: 22
    -Click on Quickconnect
    - A warning message is ok, it is your computer warning you about connecting to a remote server. As long as you trust the university server (or whatever you connected to) then it is probably save to ignore this message
  - You are now connected to your account on the university server
  - Your server files are on the right hand side of the screen
  - Your local machine files are on the left hand side of the screen
  - FileZilla is a program to help you transfer files between them
  - To set up you public webpage you need to create a *public_html* folder on the server
    - In the server files, confirm you are in your personal files (e.g., top panel will show that I've selected the folder smithzz)
    - In the bottom right panal, scroll down to confirm that the folder public_html doesn't exist (A *Public* folder may exsist already). If it does exist then skip creating the file and go to transfering your file
    - Right click in the bottom right panel and select "Create directory"
    - Change the text "New directory" to "public_html" and click "OK"
    - You now have a public webpage but it will have nothing in it
  - Now you need to transfer the experiment files from your computer to the server
    - In the top left panel, navigate to where you have saved the experiment files
    - Open the uManitoba_Server folder (you should see all the files in the bottom left panel)
    - Open the public_html file so that it is open in the bottom right panel (will probably be empty)
    - (Optional) You can add another folder on the server to organize several experiments at once. For example, I have added a jsPsych_example_experiment folder. The only thing to remember is that you will need include that in the experiment URL
    - Select all the local experimental folders (except the ".." folder) and files (in the bottom left) and drag them to the server folder that you have open (in the bottom right)
    - Wait for the files to finish copying and transfering to the server
  - Now you need to set permissions to allow users to run the experimental code and save data
    - The easiest way to do this is:
      - Right click on the public_html folder and select "File Attributes..."
      - Confirm that the Owner has Read, Write, and Execute permissions
      - Also confirm that the Public has Read, Write, and Execute permissions
      - This will make the Numeric value 7x7 (the x corresponds to Group permissions and don't matter right now) so you could just type in 707 and the check marks will be set correctly
      - Check the box "Recurse into subdirectories"
      - Confirm that "Apply to all files and directories" is selected
      - This will set the permissions for all files and folder in the public_html folder
      - These permissions are not secure against a tech savy individual looking to overwrite your programs/data
    - A harder way to set the permissions is:
      - Go into the the folder and set File permissions for each folder and file individually (not selecting) to "Recurse into subdirectories"
      - This way you can secure your data so others can't read it or change files/folder
      - However, the experiment (or any program) is a chain of interconnected files. Some will need just read permission, some will need, execute, some write, others a combination. If one of them doesn't have the correct permissions then the experiment will fail to do what you're expecting but it won't raise an obvious error (e.g., without the correct write permissions your data won't save, but you won't know that until you check the data folder)
      
#### Hosting the Experiment

Simply by transferring the contents of the *uManitoba_Server* to your Unix account's *public_html* file, this experiment will be hosted on the server. It can be found at a URL that looks something like this: http:<i></i>//home.cc.umanitoba.ca/~USER_ID (as long as you don't put the index.html file inside of a folder, then you'll need to add that folder into the URL, e.g., http:<i></i>//home.cc.umanitoba.ca/~USER_ID/my_experiment/index.html)

#### Collecting the Data Remotely

Fortunately, jsPsych has functions in order to save data onto a web server that has PHP installed (see their instructions [here](https://www.jspsych.org/overview/data/#storing-data-permanently-as-a-file)). Essentially it boils down to this:
- Include the write_data.php file in the directory/folder that you are hosting this experiment (index.html file) on (see line 4 to select the folder you want data to be saved to)
- Include the functions tagged with #UMANITOBA_SERVER in the index.html file of this folder (uManitoba_Server)
- Set the permissions for the directory appropriately

Reading the data at this point is a bit trickier than a locally run experiment:
- By default, this example experiment saves .csv data to the data folder, and in the individual_data folder
- By default, FileZilla will filter the .csv files so they will not appear in the program unless you change the filters (I'll leave it to you to Google it)
- If you do change the FileZilla filters then you should be able to transfer the data files to your local computer. Alternatively:
  - Open the R folder, the analysis folder, and the pull_serverdata.R file
  - Change the folderURL to the correct URL (where you're hosting it)
  - Run the code
  - It will save a local copy of the .csv files and a data.csv file that contains all of the other .csv files combined into a single file
  - Of course, if you haven't run through the experiment then there won't be any data to pull from the server

#### Crediting SONA Participants

See [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#collecting-the-data-remotely) except you'll need to point to a URL that looks something like this: http:<i></i>//home.cc.umanitoba.ca/~USER_ID/?id=%SURVEY_CODE%

## General Concerns

- These instructions will be difficult for those not familiar with programming or hosting their own website
- Dealing with file/folder permissions and server access can be a bit of a pain unless you are willing to allow to give read, write, and execute permissions to all files
- Although this method is firmly an open science method, it's not as accessible as posting to a GitHub repository
