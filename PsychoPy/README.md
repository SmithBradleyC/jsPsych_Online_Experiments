# PsychoPy Online Experiments

This will be a shorter and much less thourough explanation of one method of conducting online experiments than the one presented in the [Parent Directory (jsPsych Online Experiments)](https://github.com/SmithBradleyC/jsPsych_Online_Experiments). I will be referencing and copying text from those instructions liberally so understanding them may make this process easier.

## Broad Overview 

At this point, it may be advantageous to skip down to [General Concerns](#general-concerns) to check if any of them are concerning enough to stop you from continuing on in this process.

Here's a broad overview of how to run a PsychoPy Experiment using the uManitoba Server to host it and save the data. I'll also cover using SONA to recruit participants:
- Program a PsychoPy Experiment with the builder program
- Export the HTML code and get the local library that I provide in this repository
- Host this experiment on GitHub Pages
- Point your #SONA participants to the correct URL

## Overall Summary

The [Step-by-Step Guide](#step-by-step-guide) will walk you through:
- [Downloading important software](#download-important-software):
  - [Download R](#download-r)
  - [Download rStudio](#download-rstudio)
  - [Download PsychoPy](#download-psychopy)
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

- Go to https://downloads.livecode.com/livecode/
- Choose the version that you want to download (e.g., LiveCode 9.5.1)
- I reccomend the most recent but version that is labelled as STABLE
- Under the "Community Edition" Column, select the download link appropriate for your operating system
- Wait for the download and proceed with installation
- Going through the tutorial offered when you first open the program is very helpful for understanding how to make programs/experiments with this software

## Copying This Example Experiment:

The easiest way copy this experiment is to fork the entire repository into your own GitHub account, and then clone it (so that it is saved locally on your machine). If you understand these instructions then you can skip to the section [Running This Example Experiment](#running-this-example-experiment), otherwise go check out the [instructions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#download-rstudio#copying-this-example-experiment). For running the LiveCode experiment you will only need the files in the *LiveCode* folder but it may help to organize the project if you keep all the files.

### Running This Example Experiment

Now that you have a local copy of the example experiment on your machine, you can begin to make and save your own edits. When you save the edits they will only be saved on your local machine until you [push them back to GitHub](#saving-edits-to-github).

#### Editing and Testing the Experiment

Before I get into how to make edits to the example experiment, I'll start by describing the files contained in this folder:
>  - *data*: This is the folder where data is saved by default when you pull it from FireBase
>    - *data.csv*: This is the .csv version the the datafile pulled from FireBase. It is created by LiveCode/R/analysis/pull_firedata.R
>    - *data.json*: This is the raw data file for 3 'participants' in the experiment. It is the file pulled straight from FireBase. Unless you rename this file it will be overwritten when you pull data from FireBase (LiveCode/R/analysis/pull_firedata.R)
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
 
So, to make changes to the experiment:
- Open ExampleExperiment.livecode with LiveCode
- Adapt whatever you want in the program
- I'm leaving it to you to learn to program with LiveCode and not break the experiment, but I want to point out a few things:
  - Navigate to the Stack Script:
    - Notice the function to make the data into a JSON format, this is because my method of uploading to #FIREBASE doesn't accept just any method of formatting data and it seems that JSON is the most readily accepted
    - Notice the function to make a participant ID, this function has been slightly problematic because non-normal characters are being seleted somehow. I'm not going to solve this problem for this Example Experiment so I reccomend you find a solution for your own experiments
  - Navigate to the final Card's Script:
    - Notice the line: `do "firebase.database().ref('"&ParID&"').set({"&makeJSON(par_data, ParID)&"});" as "JavaScript"`
    - the `do` function takes a string arguement and then trys to run it as code
    - the `as "JavaScript"` arguement means that it will try to run the code in JavaScript
    - This function will not throw errors within LiveCode so you may not realize there is a problem until you have exported to HTML and are hosting it on a server
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

## General Concerns

- Official [Caveats and Cautions](https://www.psychopy.org/online/cautions.html)
- Not all PsychoPy functions translate to HTML yet (see [here](https://www.psychopy.org/online/status.html#onlinestatus) for a list of current functions that translate from the builder to HTML code)
- Most of the HTML code is difficult to read after being created. However, PsycoPy is trusted and the builder works well.
- PsychoPy builder directly connects to Pavlovia. This is a relatively low cost method of hosting an experiment and storing data. It is a great service that will cost ~\$50 CAD / 100 n experiment (or an institution license of ~\$2500 CAD). That service is open source and well implemented. However, the experiment and data is not stored on a local server that you control which is sometimes a concern for university ethics boards. It is also not "no cost". That being said, when hosting an experiment yourself (as opposed to using Pavlovia) you loose thier automated security and ease of use. (See [here](https://discourse.psychopy.org/t/running-psychopy-3-0-0-html-on-your-own-server/5082) and keep in mind that "jon" is the creator of PsychoPy)
- See [here](https://www.psychopy.org/online/tech.html) for how the PsychoPy creators feel about the comparison with jsPsych. They have much more experience with a variety of experimental procedures than me (so probably take their word over mine) but personally I haven't found these problems in my own work. Whenever I've needed more flexibility in my jsPsych trials I've been able to add some HTML/Javascript code to fix it without needing to define a new trial "type". In fact I have felt that the PsychoPy builder has forced more decisions on my experiments that jsPsych. That being said, I have found PsychoPy very useful and the builder is incredibly helpful for those who don't want to program.
