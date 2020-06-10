# PsychoPy Online Experiments

This document will walk you through hosting a PsychoPy Experiment on the uManitoba Server (or your own server). It has not been rigorously tested and there may be problems still but hopefully it gets your going. PsychoPy offers their own paid service for hosting that will be less prone to error but the data will be saved on their servers and there is an associated cost to running the experiment. Using this method allows you to choose the server and is free.

This will be a shorter and much less thorough explanation of one method of conducting online experiments than the one presented in the [Parent Directory (jsPsych Online Experiments)](https://github.com/SmithBradleyC/jsPsych_Online_Experiments). I will be referencing and copying text from those instructions liberally so understanding them may make this process easier. This will be a bit more technical for the time being as I'll assume understanding of hosting files on the uManitoba Server as described [here](https://github.com/SmithBradleyC/jsPsych_Online_Experiments/tree/master/uManitoba_Server). In fact that should be your first reference.

The example experiment can be tested [here](http://home.cc.umanitoba.ca/~smithb21/PsychoPy_ExampleExperiment/?participant=12345).

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
  
## Step-by-Step Guide

### Download Important Software:

#### Download R:

See [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#download-r)

#### Download rStudio:

See [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#download-rstudio)

#### Download PsychoPy:

- Go to https://www.psychopy.org/download.html
- Click on the download button for the standalone program (unless you want to do the more difficult "Manual installation")
- Wait for the download and proceed with installation

## Copying This Example Experiment:

The easiest way copy this experiment is to fork the entire repository into your own GitHub account, and then clone it (so that it is saved locally on your machine). If you understand these instructions then you can skip to the section [Running This Example Experiment](#running-this-example-experiment), otherwise go check out the [instructions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#download-rstudio#copying-this-example-experiment). For running the PsychoPy experiment you will only need the files in the *PsychoPy* folder but it may help to organize the project if you keep all the files.

### Running This Example Experiment

Now that you have a local copy of the example experiment on your machine, you can begin to make and save your own edits. When you save the edits they will only be saved on your local machine until you [push them back to GitHub](#saving-edits-to-github).

#### Editing and Testing the Experiment

Before I get into how to make edits to the example experiment, I'll start by describing the files contained in this folder:
>  - *data*: This is the folder where data is saved by default when you run the Example_Experiment file with PsychoPy builder.
>    - All files in here are data files created by each participant. There are three for each participant in this particular experiment. They are named with the participant number/ID, the name of the experiment, the date created, and the time created. The spreadsheet is the most useful. The text document is a log of what happened in the experiment (useful for advanced participant screening and/or identifying computer problems). The PSYDAT file was used by the program to save data.
>  - *Example_Experiment.psyexp*: This is the PsychoPy builder file. It is opened in PsychoPy and used to export the HTML file
>  - *Example_Experiment_words.xlsx*: This is the file containing the stimuli used in the experiment
>  - *html*: This is the folder containing the html code exported by the PsychoPy builder and my adapted PsychoPy HTML library
>     - *data*: a data folder that hold all the data collected from the html experiment (while hosted on a server)
>     - *Example_Experiment-legacy-browsers.js*: This is JavaScript code that runs the experiment if the participant is using an old internet browser. Created when exporting the HTML code from the builder.
>     - *Example_Experiment.js*: This is JavaScript code that runs the experiment if the participant is using a current internet browser. Created when exporting the HTML code from the builder and then one line of code added to load in file correctly.
>     - *index.html*: this is the file that actually runs the experiment. It calls the appropriate files (like Example_Experiment.js). Created when exporting the HTML code from the builder.
>     - *lib*: this folder contains the JavaScript library used to run experiments created by PsychoPy "locally". A few files have been adapted. I both point out changes and provide a "clean" copy
>       - *bcs*: This folder contains a completely new JavaScript file. It contains a function that saves the data onto a server as described below
>       - *clean_lib*: This folder contains the unchanged JavaScript library as provided by PsychoPy. It assumes implementation with Pavlovia or being locally run.
>       - *core-2020.1.js*: This file is the core engine of the JavaScript library. It is unchanged.
>       - *data-2020.1.js*: This file contains functions important to saving experimental data. There are 2 lines of changes that are documented in the file
>       - *sound-2020.1.js*: This file controls the audio for the experiments. It is unchanged.
>       - *util-2020.1.js*: This file provides additional tools for experiments. It is unchanged.
>       - *visual-2020.1.js*: This file controls the visual presentation of stimuli. It is unchanged.
>     - *resources*: this folder is created when exporting the HTML code from the builder. It contains the stimuli used in the experiment (Example_Experiment_words.xlsx).
>     - *write_data.php*: this file is a rudimentary php file. I have very little php experience but this seems to work as intended for now.
>  - *README.md*: the file that GitHub uses to create the ReadMe (the document you are currently reading)
 
So, to make changes to the HTML experiment:
- Open Example_Experiment.psyexp with PsychoPy
- Adapt whatever you want in the program (within reason, see [General Concerns](#general-concerns))
- Click the file tab, and "Export HTML...". This will replace the Example_Experiment.js, Example_Experiment_-legacy-browsers.js, and index.html files with new ones.

Some specific edits you can make to your experiments:
- At the beginning of your experiment, by default it will ask for the participant and session numbers To change this:
  - Click on the experiment settings button (image with a gear in the buttons menu)
  - Add or subtract from the "Experiment info" fields (WARNING: DO NOT delete all experiment info fields. It will make it more difficult to pass info into the experiment and will make it impossible to open the experiment settings again)
  - I suggest keeping a "participant" field with a default because the rest of these instructions use that to credit sona participants and create data files. If you change it then you will need to change the label elsewhere too
  - If a "participant" (or other included value) is included in the URL redirect then this option will not appear for the participant
  - However, even if all options have values included in the redirect, the experiment will still need the participant to press OK to continue
  - I suggest including a field "Press OK to begin" with no default so that participants know to press OK and don't get stuck
  - In the experiment settings you can also disable using the Escape key, this makes it so that participants can't end the experiment by pressing the escape key (will not stop them from going out of full screen mode)
  - In the Data tab (of the experiment settings) you can change how the data files are labeled. You can use some code to create random strings or use the "Participant" values (this is default). In these instructions participant values will be random strings that grant SONA credit to participants
  - You can also change the data files that are saved in the data tab
  

#### Saving Edits to GitHub

This may not be necessary because these instructions assume you're putting it on a school or other server that you "control". However, open science is good practice and putting the code on GitHub is a good step.

See [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#saving-edits-to-github)

#### Hosting the Experiment

PsychoPy experiments are designed to be hosted on Pavlovia. This is an excellent service. However, it is hosted on a server outside of the university (some ethics boards don't like that) and there is a fee (a relatively small one) per participant. Because it was designed to be hosted on Pavlovia, there are some problems when hosting it on your own server. The code just wasn't written to be used on another server. However, as of June 2020 there is a way to host it off of Pavlovia:

- "Resources" (spreadsheets containing stimuli to be presented usually) won't load properly outside of Pavlovia. You can fix this by:
  - adding a line into the experiment JavaScript file (Example_Experiment.js is my repository)
    - In the psychoJS.start() "function" you will need to add in a line specifying the resources. It will look something like this:
      - resources:[{name: "Example_Experiment_words.csv", path: "./resources/Example_Experiment_words.csv"}, {name: "other_needed_file.csv", path: "./resources/other_needed_file.csv"}, ...]
      - See line 77 of the Example_Experiment.js file for a concrete example
      - YOU WILL NEED TO DO THIS EVERYTIME YOU EXPORT THE HTML EXPERIMENT!
- Data won't save properly unless you do the following:
  - Include the write_data.php file in the same directory as the index.html file and a data folder (or change the php file to point to the folder you want it to)
  - Include the bcs folder (and the file inside that folder) found in the lib folder in this repository
  - Either use the data-2020.1.js file provided or make similar changes to your own copy of the file to load in the saveData function and use it at the appropriate spot
- Then you'll need to host the experiment on the server you want to use:
  - See [instructions in server directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments/tree/master/uManitoba_Server#running-this-example-experiment) to do that. (Essentially you need to copy the files to the server folder, set the permissions, and go the appropriate URL)

#### Collecting the Data Remotely

The adaptations I've made to the JavaScript library are to allow the code to save the data through the php code provided. You'll need to include the write_data.php file in the directory/folder that you are hosting this experiment (the index.html file) on (see line 4 to select the folder you want data to be saved to). You'll also need to set all permissions for the directories appropriately on the server you're using. See [here](https://github.com/SmithBradleyC/jsPsych_Online_Experiments/tree/master/uManitoba_Server#finding=your-umanitoba-server-account).

#### Crediting SONA Participants

The University of Manitoba uses the SONA system to credit participants with course credit. SONA allows online experiments and automatic crediting for those experiments. To do this:
- Set up a SONA online experiment
- Go to your SONA experiment's "Change Study Information" page
- Set the SONA Study URL to your experiments URL with "?participant=%SURVEY_CODE%" added onto the end of the URL (without the quotation marks). For example, you might set the Study URL to: http:<i></i>//home.cc.umanitoba.ca/~USER_ID/experimentX/?participant=%SURVEY_CODE%
- (If you have changed the label of "participant" in PsychoPy then your will need to change it in the URL)
- Then go back to the Study Information page on SONA and find the "Completion URLs:"
- Copy the client-side Completion URL, this will be important to include as a redirect at the end of your study
- In PsychoPy builder, open the "Experiment settings" (image with the gear symbol in the buttons menu)
- Go to the Online tab
- Paste the client-side Completion URL into the "Completed URL" area
- Replace the "XXXX" from the end of the URL with "+expInfo['participant']" (not including the quotation marks)
- It will looks something like this: "https://<i></i>umanitobapsych.sona-systems.com/webstudy_credit.aspx?experiment_id=XXXX&credit_token=11X11X111X1X1X1XX1X11111111XX11X&survey_code=+expInfo['participant']"
- You can also include an Incomplete URL if you'd like to 

## General Concerns

- This method has not been rigorously tested with different experimental designs in PsychoPy. It could be that adding audio, or video, or more complicated methodology will need further editing of the JavaScript library. I don't expect that to be the case but it's possible.
- As implemented it will only save data on fully completing the experiment
- Official [Caveats and Cautions](https://www.psychopy.org/online/cautions.html)
- Not all PsychoPy functions translate to HTML yet (see [here](https://www.psychopy.org/online/status.html#onlinestatus) for a list of current functions that translate from the builder to HTML code)
- Most of the HTML code is difficult to read after being created. However, PsychoPy is trusted and the builder works well.
- PsychoPy builder directly connects to Pavlovia. This is a relatively low cost method of hosting an experiment and storing data. It is a great service that will cost ~\$50 CAD / 100 n experiment (or an institution license of ~\$2500 CAD). That service is open source and well implemented. However, the experiment and data is not stored on a local server that you control which is sometimes a concern for university ethics boards. It is also not "no cost". That being said, when hosting an experiment yourself (as opposed to using Pavlovia) you loose their automated security and ease of use. (See [here](https://discourse.psychopy.org/t/running-psychopy-3-0-0-html-on-your-own-server/5082) and keep in mind that "jon" is the creator of PsychoPy)
- See [here](https://www.psychopy.org/online/tech.html) for how the PsychoPy creators feel about the comparison with jsPsych. They have much more experience with a variety of experimental procedures than me (so probably take their word over mine) but personally I haven't found these problems in my own work. Whenever I've needed more flexibility in my jsPsych trials I've been able to add some HTML/JavaScript code to fix it without needing to define a new trial "type". In fact I have felt that the PsychoPy builder has forced more decisions on my experiments that jsPsych. That being said, I have found PsychoPy very useful and the builder is incredibly helpful for those who don't want to program.

