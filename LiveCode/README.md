# LiveCode Online Experiments

This will be a shorter and much less thourough explanation of one method of conducting online experiments than the one presented in the [Parent Directory (jsPsych Online Experiments)](https://github.com/SmithBradleyC/jsPsych_Online_Experiments). I will be referencing and copying text from those instructions liberally so understanding them may make this process easier.

In addition, an official LiveCode tutorial on how to get your "App" online is found here: http://lessons.livecode.com/m/4071/l/800867-how-do-i-put-my-first-app-on-the-web and it is very useful for understanding how the LiveCode to HTML5 port works. However, it will not cover how to save data to #FIREBASE or how to host it on a free server like GitHub Pages

## General Concerns

- Testing your HTML5 development locally is difficult if not impossible with how they program is exported (~5 minute wait everytime you upload to GitHub to host it)
- Not exactly a smooth transition from programming to running
- Most of the HTML code is hidden away/difficult to read so you are trusting the LiveCode port
- Saving data to #FIREBASE from LiveCode can be a bit fiddly
- Automatic scaling/adapting to screen size isn't intuitive with LiveCode to HTML port

## Broad Overview 

Here's a broad overview of how to run a LiveCode Experiment using GitHub Pages to host it, FireBase to save the data, and SONA to get participants:
- Program a LiveCode Experiment with code to export the data to #FIREBASE and a redirect to credit your #SONA participants
- Export the program as a standalone HTML5 program
- Add a new "index style" file like my SimpleExampleExperiment.html file that includes the necessary code for #FIREBASE and #SONA
- Host this experiment on GitHub Pages
- Point your #SONA participants to the correct URL

## Overall Summary

The [Step-by-Step Guide](#step-by-step-guide) will walk you through:
- [Downloading important software](#download-important-software):
  - [Download R](#download-r)
  - [Download rStudio](#download-rstudio)
  - [Download LiveCode](#download-livecode)
- [Copying this example experiment](#copying-this-example-experiment):
- [Running this example experiment](#running-this-example-experiment):
  - [General editing and testing of the experiment](#editing-and-testing-the-experiment)
  - [Saving your edits to GitHub](#saving-edits-to-github)
  - [Hosting the experiment](#hosting-the-experiment)
  - [Collecting data remotely](#collecting-the-data-remotely)
  - [Automatically granting SONA credits](#crediting-sona-participants)
  - [Saving and unpacking FireBase data](#saving-and-unpacking-firebase-data)
  
## Step-by-Step Guide

### Download Important Software:

#### Download R:

See [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#download-r)

#### Download rStudio:

See [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#download-rstudio)

#### Download Livecode:

- go to https://downloads.livecode.com/livecode/
- Choose the version that you want to download (e.g., LiveCode 9.5.1)
- I reccomend the most recent but version that is labelled as STABLE
- Under the "Community Edition" Column, select the download link appropriate for your operating system
- Wait for the download and proceed with installation
- Going through the tutorial offered when you first open the program is very helpful for understanding how to make programs/experiments with this software

## Copying This Example Experiment:

The easiest way copy this experiment is to fork the entire repository into your own GitHub account, and then clone it (so that it is saved locally on your machine). If you understand these instructions then you can skip to the section [Running This Example Experiment](#running-this-example-experiment), otherwise go check out the [instructions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#download-rstudio#copying-this-example-experiment)

### Running This Example Experiment

Now that you have a local copy of the example experiment on your machine you can begin to make and save your own edits. When you save the edits they will only be saved on your local machine until you [push them back to GitHub](#saving-edits-to-github).

#### Editing and Testing the Experiment

Before I get into how to make edits to the example experiment I'll start by describing the files contained in this folder:
>  - *data*: this is the folder where data is saved by default when you pull it from FireBase
>    - *data.csv*: this is the .csv version the the datafile pulled from FireBase. It is created by LiveCode/R/analysis/pull_firedata.R
>    - *data.json*: this is the raw data file for 3 'participants' in the experiment. It is the file pulled straight from FireBase. Unless you rename this file it will be overwritten when you pull data from FireBase (LiveCode/R/analysis/pull_firedata.R)
>  - *Example Experiment*: This is the folder created by LiveCode when you save it as a standalone program in HTML5 format
>    - *Example Experiment.html*: This file is created by LiveCode and is meant to be used to test your program locally (or online). However, it includes a lot of features you probably don't want like a LiveCode banner at the top. Also, in my experience, it never works if you try to run it locally becauase of browser security issues (CORS policy)
>    - *SimpleExampleExperiment.html*: This is the file that I created to actually run the experiment. See my comments in the file to see how it works
>    - *standalone-community-0.0.0.html.mem*: This file is created by LiveCode. It contains code important to running the standalone program
>    - *standalone-community-0.0.0.js*: This file is created by LiveCode. It is the actual "engine" for the program. This file is called in the .html files to actually run the experiment
>    - *standalone.zip*: This file is created by LiveCode. It is the actual contents of our program. The .js file internally unpacks and uses the files contained in here to run the experiment
>  - *ExampleExperiment.livecode*: This is the actual LiveCode file that creates the experiment. Open it in LiveCode to see how I programmed the Example Experiment
>  - *R*: the folder containing all of my R code
>    - *analysis*: the folder containing all of the code used in analyzing the data
>      - *figures*: the folder where I save my figures (empty in this repository)
>      - *pull_firedata.R*: the file used to download the data from FireBase and save a .csv version of the data
>    - *pre_experiment*: the folder containing all the R code used in setting up the experiment (none here)
>  - *README.md*: the file that GitHub uses to create the ReadMe (the document you are currently reading)
 
So to make changes to the experiment:
- Open ExampleExperiment.livecode with LiveCode
- Adapt whatever you want in the program
- I'm leaving it to you to learn to program with LiveCode and not break the experiment but I want to point out a few things:
  - Navigate to the Stack Script:
    - Notice the function to make the data into a JSON format, this is because my method of uploading to #FIREBASE doesn't accept just any method of formatting data and it seems that JSON is the most readily accepted
    - Notice the function to make a participant ID, this function has been slightly problematic because non-normal characters are being seleted somehow. I'm not going to solve this problem for this Example Experiment so I reccomend you find a solution for your own experiments
  - Navigate to the final Card's Script:
    - Notice the line: `do "firebase.database().ref('"&ParID&"').set({"&makeJSON(par_data, ParID)&"});" as "JavaScript"`
    - the `do` function takes a string arguement and then trys to run it as code
    - the `as "JavaScript"` arguement means that it will try to run the code in JavaScript
    - This function will not through errors within LiveCode so you may not realize there is a problem until you have exported to HTML and are hosting it on a server
    - This function saves the data to the FireBase realtime database specified in the SimpleExampleExperiment.html file
  - Navigate to the button "SONA_btn" script (button is on the last card):
    - Notice the line: `do "window.location.href = 'https://umanitobapsych.sona-systems.com/webstudy_credit.aspx?experiment_id=XXXX&credit_token=11x11x111x1x1x1xx1x11111111xx11x&survey_code='+SONA_ID;" as "JavaScript"`
    - Similar to above, this uses the `do` function `as "JavaScript"` and calls information declared in the SimpleExampleExperiemnt.html file
    - You will need to edit the URL reference to the one provided by your SONA experiment as described in [Automatically granting SONA credits](#crediting-sona-participants)

#### Saving Edits to GitHub

See [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#saving-edits-to-github)

#### Hosting the Experiment

See [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#hosting-the-experiment)

#### Collecting the Data Remotely

See [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#collecting-the-data-remotely) except change the information in the SimpleExampleExperiment.html files instead of the index.html file

#### Crediting SONA Participants

See [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#collecting-the-data-remotely) except you'll need to point to a URL that looks something like this: https://<i></i>YourGitHubUsername.github.io/jsPsych_Online_Experiments/LiveCode/Example%20Experiment/SimpleExampleExperiment.html/?id=%SURVEY_CODE%

Also notice that the tagged SONA code is found in the SimpleExampleExperiment.html file but you won't need to change any of it. What you will need to change is the code within the LiveCode Program (as described in [Editing and Testing the Experiment](#editing-and-testing-the-experiment))

#### Saving and unpacking FireBase data

See [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#saving-and-unpacking-firebase-data) except open the LiveCode/R/analysis/pull_firedata.R file instead of just the R/analysis/pull_firedata.R file