# Open Collaborative Science PSYC 4540 T39/7310 T34 Winter 2020

This is the repository for PSYC 4540 T39/7310 T34, a course on Open and Collaborative Science in the Psychology Department at the University of Manitoba, Winter 2020 (Instructor: Dr. Melanie Soderstrom). During the course, there was a class-wide group research project where Open and Collaborative Science tools and principles were applied.The objective was a fully open and pre-registered project that will be submitted for (possible peer review and) publication.

## The Project

### What can we perceive in infant vocalizations?

The purpose of this study is to determine whether or not English-speaking monolingual adults can identify the age, sex, or first language of an infant after listening to recorded snippets of infant vocalizations. The study will also determine if the adults’ gender or caregiving experience affect their abilities to discriminate between the vocalizations.

This research is valuable in that it lends to the study of human language development. There have been mixed results so far on whether humans can identify differences in infant vocalizations based on a infant’s first language and age. Furthermore, there appears to be no literature on adult participants identifying differences in vocalizations based on the sex of the infant, although there is evidence that sex hormones are linked to language development in infants as young as 5-months (Quast et al., 2016). Our research will contribute to these growing bodies of literature.

### Our Procedure

In this experiment, adult participants heard a series of short audio clips of infant vocalizations, in batches of 10. Participants were asked a question about each clip. Their task was to answer the questions based on their best judgement. All answers were be collected by a computer. At the end of the study, some information was asked about the participant and their experience with infants.

### Our Results

We found that participants were able to perform better than chance at judging a infant's age, and language that it was learning. Participants also misjudged a infant's sex more often than they were correct. We did not find that caregiving experience, childcare experience, or gender played a factor in peoples' accuracy when judging either the infant's age or language that it was learning.

# Contributors

Alanna Beyak, Olivia Cadieux, Matthew Cook, Carly Cressman, Barbie Jain, Jarod Joshi, Spenser Martin, Michael Mielniczek, Sara Montazeri, Essence Perera, Jolyn Sawatzky, Bradley Smith, Jackie Spear, Thomas Thompson, Derek Trudel, Jianjie Zeng, Melanie Soderstrom

# Getting Started

A step by step guide in reproducing the experiment, and the results (based on our sample) can be found in the section [Step-by-Step Guide](#step-by-step-guide).

## Overall Summary

This repository will be used to store all of the code and data for this project. Other material regarding the project can be found at our open science page: https://osf.io/2a6b4/

The actual experiment can be viewed/tested at https://melsod.github.io/OCSWinter2020/

The experiment is run using [jsPsych](https://www.jspsych.org/) (a JavaScript library for running behavioural experiments in a web browser) and is hosted on GitHub Pages. Data was collected by Google Firebase before being consolidated and saved into our [data folder](data). Our data analysis can be reproduced using the code found in our [analysis folder](R/analysis) (detailed steps [below](#reproduce-the-results)).

Our selection of Babble Clips used in the experiment is found in the [Selected Audio Files Folder](audio/selected_audio_files). The clips found in the two folders were selected by an [R Script](R/pre_experiment/sample_clips.R). Three of the contributors then manually screened the clips for usability (e.g., non-infant noises). A copy of the excluded files are found [here](audio/Exclusion_files). Following the screening process, another [R Script](R/pre_experiment/narrow_sample.R) generated the list of files that were presented in the experiment (a copy of these files are found [here](audio/selected_audio_files/clips_to_use)).


## Step-by-Step Guide

### First Steps

Although this experiment greatly deviates from the this source, we are indebted to [Matt Crump](https://github.com/CrumpLab) and particularly his example experiments found [here](https://github.com/CrumpLab/jspsychrexamples) for getting our experiment running.

The easiest way to reproduce these results is to fork this repository into your own account and then clone it (so that it is saved locally on your machine). If you understand these instructions then you can skip to the section [Reproducibility](#reproducibility), otherwise we'll explain how to do that:

#### Sign-Up For a GitHub Account

If you already have a GitHub Account then skip to [Fork the Repository](#fork-the-repository), otherwise:

- Go to www.github.com
- Click the "Sign Up" button in the top right hand side of the site (or click [here](https://github.com/join?source=header-home))
- Create a Username and provide the requested information
- Click "Select a Plan"
- Click "Choose Free" unless you have a reason to get the paid service
- Provide whatever level of information you want to GitHub and then scroll down and click "Complete setup"
- Verify your email address
- There is no need to "Create a new repository" if you do not want to

#### Fork the Repository

- Go to https://github.com/melsod/OCSWinter2020 (but you're already here)
- Click on the "Fork" button near the top, right hand side of the page
- Wait for the repository to complete it's fork
- You now own your very own copy of this repository!

#### Download GitHub Desktop

If you already have the GitHub Desktop Client then skip to [Clone the Repository](clone-the-repository)

- Go to https://desktop.github.com/ and download the application
- Install the application
- Sign in with your GitHub account
- (Optional) you can learn about Git and GitHub with [this tutorial](https://help.github.com/en/desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop)

- You can also avoid using the GitHub Desktop client by using the Git command line functions by downloading the program here https://git-scm.com/downloads, we will leave it up to you and Google to work through how to do it that way

#### Clone the Repository

- Make a folder on your computer where you would like to save the repository
- In the GitHub Desktop program, click on the File menu (in the top, left hand corner)
- Click on Clone Repository
- Select the "GitHub.com" tab if it is not already selected
- Your repositories should be visible assuming that you successfully signed into GitHub on the Desktop Client
- Select the YourGitHubUsername/OCSWinter2020 option
- Choose the local path where you want to save the repository (just below the repository options)
- Click the "Clone" button
- This saves a local copy of the repository on your device

### Reproducibility

Now that you have a local copy of the experiment on your machine you can begin to make and save your own edits. When you save the edits they will only be saved on your local machine. To save them to GitHub you will first need to commit the changes to your local git repository (automatically created when you cloned the repository). You can do this through the GitHub Desktop Client. When you commit to your local git repository it is a form of version control (essentially it keeps a record of all the changes you make and allows you to revert to a previous iteration of the experiment if you want). Once you have committed changes to your local repository you can then push those changes to your GitHub repository (think of "pushing" as saving your edits to the "cloud"). Once changes are on your GitHub repository, others can see your work and contribute to it. You can also host the experiment there (using GitHub Pages, this will be explained  in [Hosting the Experiment](#hosting-the-experiment)).

We'll leave it to you to learn how to push changes to your GitHub repository and work collaboratively with others from there (it's much the same way you are "working" on our experiment) but we will show you how to host the experiment in the section [Running the Experiment](#running-the-experiment).

#### Download R and rStudio

If you already have R and rStudio then skip to [Reproduce the Experiment](#reproduce-the-experiment)

- Download and install the latest stable version of R (https://www.r-project.org/)
- Download and install the latest stable version of rStudio (https://rstudio.com/products/rstudio/download/)

#### Reproduce the Experiment

- In your local repository (the folder that you downloaded/cloned the repo to), open OCSWinter2020.Rproj with rStudio. This will open rStudio project for the experiment. What that means is that it sets a working directory so that any file calls will be in reference to this file. If you work on a different task (other than related to this experiment) then you should create a new R project by using the drop down menu in the top right hand of the rStudio window.
- Then in the bottom right panel of the rStudio screen select the files tab
- Select the [index.html](index.html) file, and "Open in Editor"
- This is the experiment file. It is written in JavaScript and HTML using the jsPsych library (found in the jspsych-6-2 folder in the repository). Hopefully it is documented well enough for you to follow. We'll leave it to you to learn jsPsych if you want to adapt the experiment for your own purposes.
- If you open the [index.html](index.html) file in your web browser or with the rStudio Preview button it should open. Unfortunately, due to permissions settings you will probably be unable to run through the experiment on your web browser, and some features of the experiment may not work in the rStudio preview. There are ways around these problems to test the experiment (commenting out lines of code tagged with "#TESTING" in the [index.html](index.html) file) but it will all work when hosted online
- Audio for the experiment is found in the [audio folder](audio) of the repository
- Consent and Debriefing forms, written in HTML code, is found in the [forms folder](forms)
- Images for the experiment are found in the [img folder](img)
- Almost all of the text that appears in the experiment is found in the [stimuli folder](stimuli) in the [exp_text.js file](stimuli/exp_text.js)
- The original sample of audio clips were selected using the [R/pre_experiment/sample_clips_2.r](R/pre_experiment/sample_clips_2.r) file but we suggest using [R/pre_experiment/sample_clips.r](R/pre_experiment/sample_clips.r) because it has been adapted to work better with the repositories organizational structure (this may mean a different original sample but have not tested it)
- After being manually screened by 3 of the contributors (the files they decided to exclude can be found at [audio/Exclusion_files](audio/Exclusion_files) and [R/pre_experiment/files_to_exclude.RData](R/pre_experiment/files_to_exclude.RData)) the final selection of clips was done using the [R/pre_experiment/narrow_sample.R](R/pre_experiment/narrow_sample.R) file
- The stimuli that are presented to the participants were also created with the [R/pre_experiment/narrow_sample.R](R/pre_experiment/narrow_sample.R) file and are found in [stimuli/age_language_test_stimuli.js](stimuli/age_language_test_stimuli.js) and [stimuli/sex_test_stimuli.js](stimuli/sex_test_stimuli.js)

#### Reproduce the Results

Our results should be reproduced by compiling/knitting the [data_analysis](R/analysis/data_analysis.Rmd) file and then by running the analyses found in the [followup_analysis](R/analysis/followup_analysis.R) file. For completeness, here is a description of the files relevant to our results:

- All data collected were temporarily stored on a Google Firebase server
- They were then downloaded using the [R/analysis/pull_firedata.R](R/analysis/pull_firedata.R) file
- The downloaded data is stored in the [data](data) folder
- Files in the [data](data) folder:
  - [short_exp_test_data](data/short_exp_test_data.json): Data from contributors while proofing the experimental procedure. Only includes 1 trial in each block. Used to quickly test the experiment for obvious errors and remote database collection.
  - [private_pilot_test_data](data/private_pilot_test_data.json): Data from contributors for testing a more finalized version of the task. Used to test whether we were collecting all the relevant data for our analysis
  - [3_participant_pilot_data](data/3_participant_pilot_data.json) and [2_additional_part_pilot_data](data/2_additional_part_pilot_data.json): Data from a pilot test of 6 "real" participants (3 at a time). Data was used to confirm that automatic crediting for the online system worked. Only includes 5 data points because 1 participants declined to participate at the consent phase. Data is not included in the final sample.
  - [final_data](data/final_data.json): The final data collected from 626 participants. File size is 105.5 MB so it uses [Git LFS](https://git-lfs.github.com/) in order to be uploaded to GitHub. It should work with the process described but may cause problems (we have very little experience with Git LFS). In any case, [final_data](data/final_data.json) has already been processed into the following files:
    - [summarized_data](data/summarized_data.csv): A .csv file containing a single line for all 626 participants summarizing their performance and survey responses.
    - [w_exclusions](data/w_exclusions.csv): A .csv file containing a single line for all 460 participants who were not excluded, summarizing their performance and survey responses.
    - [trial_data](data/trial_data.csv): A .csv file containing a single line per trial for all 626 participants. Each line contains the participant's survey responses
    - [w_exclusions_trial_data](data/w_exclusions_trial_data.csv): A .csv file containing a single line per trial for all 460 participants who were not excluded. Each line contains the participant's survey responses
- Files in the [R/analysis](R/analysis) folder:
  - [pull_firedata](R/analysis/pull_firedata.R): An .R file that pulls all data saved in the Firedata database and saves it in the [data](data) folder in a file called "data.json"
  - [data_cleaning](R/analysis/data_cleaning.R): An .R file that reads in the final_data.json file, tidies the data, and summarizes individual participant's results. Saves csv files of the summarized data with and without exclusion criteria
  - [data_analysis](R/analysis/data_analysis.Rmd): An .Rmd file (markdown) that reads in the csv produced by [data_cleaning](R/analysis/data_cleaning.R). When compiled/knitted, the resulting html document provides an informal explanation of the data, exclusions, and main analysis
  - [followup_analysis](R/analysis/followup_analysis.R): An .R file that reads in the trial data and computes the results of our follow-up analyses

### Running the Experiment

Simply by forking the original repository of this experiment you should be set up to run the experiment with minimal changes. We have broken this process into three steps:

#### Hosting the Experiment

With your forked copy of the repository it should be a simple matter of turning on GitHub pages in order to host our version of the experiment. To do so do the following:
- Navigate to your repository (github.com/YourYourGitHubUsername/OCSWinter2020)
- Click on the "Settings" tab near the top of the screen (github.com/YourGitHubUsername/OCSWinter2020/settings)
- Ensure your repository is public (select the "Manage access" tab on the left)
- Return to the "Settings" page
- Scroll down to the GitHub Pages section of the page
- Enable GitHub Pages by changing the source to the master branch
- You do not need to select a theme
- In a few minutes the pages site should be published. The URL will appear at the top of the GitHub Pages section (https://<i></i>YourGitHubUsername.github.io/OCSWinter2020)
- Going to this URL will begin the experiment as it is hosted on your GitHub repository
- Any changes to files in your GitHub repository will affect the experiment, but it may take a few minutes for those changes to be reflected on the Pages URL (it is not instantaneous)

#### Collecting the Data

Unfortunately GitHub pages is only for static websites so we can't directly save the data on your repository. Instead we will save the data to Google's Firebase servers. We will explain how to do this with this particular experiment but we learned this process from the instructions found on [Matt Crump's FirebaseDemo](https://crumplab.github.io/jspsychrexamples/FirebaseDemo/Instructions_FirebaseDemo.html) repository.
- Create an account with firebase https://firebase.google.com/ (free unless you need lots of data or other options). You may not want this associated with your "personal" google account.
- Create a new project:
  - Go to Console (top, right hand side of the screen)
  - "Create a project"
  - Give the project a name (probably the same as your GitHub Repo)
  - I disabled Google Analytics but I suspect it doesn't make a difference
  - Wait for your project to be ready
- Click on the Develop tab on the left hand side of the screen, then select "Database"
- Scroll down to find the Realtime Database and create that type of database
- Choose "Start in test mode" and "Enable". This will enable you to read and write to the database. It will also allow anyone else with credentials to read and write to the database. These credentials will be publicly posted on your GitHub repo so there is a security concern if you are saving any private data. These security settings can be changed later (under the "Rules" tab).
- Now you have a live database. You just need the configuration codes to interact with the database.
- Click on the gear symbol next to "Project Overview"
- Select "Project settings"
- In the first tab, "General", you will need to register an app. Add a web app (symbol looks like this </>).
- You do not need to turn on hosting unless you decide to host your experiment here instead of GitHub Pages.
- Give the app a nickname and click "Register app"
- Firebase will give you some html code that will look something like this:
<pre class="js"><code>var firebaseConfig = {
    apiKey: &quot; stuff here&quot;,
    authDomain: &quot;stuff here &quot;,
    databaseURL: &quot;stuff here &quot;,
    projectId: &quot;stuff here &quot;,
    storageBucket: &quot;&quot;,
    messagingSenderId: &quot;stuff here &quot;,
    appId: &quot;stuff here &quot;
</code></pre>
- Copy this portion of the code, go to the [index.html](index.html) file in your local repository, scroll down until you find similar code (about line 70), and replace our Firebase configuration with yours.
- You may notice that we have included three lines of source code (e.g., <script src="https://<i></i>www<i></i>.gstatic.com/firebasejs/6.3.4/firebase-app.js"></script>) rather than Firebase's one in the code that they provide you. All three of these are needed for our procedure. Do not delete or overwrite them. You may update the version number (e.g., from 6.3.4 to 7.13.2) but this is probably not needed.
- Now go back to your Browser and "Continue to console" (Go back to "Project settings")
- In the left hand menu, under Develop, select "Authentication"
- Select "Sign-in method" or "Set up sign-in method"
- Select "Anonymous" and change the settings so that it is enabled and save

- Your database is now fully set up and ready to accept anonymous data. However, to remotely pull off the data we will need to find your "secret key"
  - Go back to your "Project settings"
  - Go to the "Service accounts" tabs
  - Click on "Database secrets"
  - Under your projects database, click to show the secret key. Copy and paste this somewhere you can use it later. The only place you'll probably use it is in the [R/analysis/pull_firedata.R](R/analysis/pull_firedata.R) file to pull off the data. You will also need your projectURL (found in the code provided by firebase).

The rest of the references to firebase should be explained well enough in the comments of the [index.html](index.html) file. To more easily find this code I have tagged those lines with "#FIREBASE". Now when someone finishes the experiment their data should be saved to your Firebase realtime database.

#### Crediting SONA Participants

Our university uses the SONA system to credit participants with course credit. SONA allows online experiments and automatic crediting for those experiments. To do this:
- Set up a SONA online experiment
- Go to your SONA experiment's "Change Study Information" page
- Set the SONA Study URL to your experiments URL with "?id=%SURVEY_CODE%" added onto the end of the URL (without the quotation marks). For example, you might set the Study URL to: https://<i></i>YourGitHubUsername.github.io/OCSWinter2020/?id=%SURVEY_CODE%
- Then go back to the Study Information page and find the "Completion URLs:"
- Copy the client-side Completion URL, this will be important to include as a redirect at the end of your study
- There is then some important code to include in the [index.html](index.html) file (including the client-side URL) in order to automatically grant the participants credit. These will be tagged with "#SONA" so that they are easier to find. The most vital one will look something like this:
  - window.location.href = "https://<i></i>umanitobapsych.sona-systems.com/webstudy_credit.aspx?experiment_id=XXXX&credit_token=11X11X111X1X1X1XX1X11111111XX11X&survey_code="+SONA_ID;
  - This code uses the client-side_URL that you have copied from your SONA experiment page, except that you need to replace the end of the client-side_URL (the end looks like this: survey_code=XXXX) with this code: survey_code="+SONA_ID
  - You are replacing the default XXXX at the end of the code with +SONA_ID because SONA_ID is a variable that contains the correct information so that participants can be granted their credit
- So long as you include the code in the [index.html](index.html) tagged with "#SONA", and change the client-side URL to the one provided by your study, then it should automatically grant credit at the completion of the experiment
- You will also need to put the client-side_URL into the debriefing form for those participants who decline to participate during the consent phase of the experiment

# Acknowledgements 

Thank you to Cychosz et al. for providing the BabbleCor dataset (BabbleCor: https://osf.io/rz4tx/). 