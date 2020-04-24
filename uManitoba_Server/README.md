# Hosting on the uManitoba Server

This will be a shorter and much more technically demanding method than the one presented in the [Parent Directory (jsPsych Online Experiments)](https://github.com/SmithBradleyC/jsPsych_Online_Experiments). I will be referencing and copying text from those instructions liberally so understanding them may make this process easier. Many of the steps will be drastically changed because this method will not require the use of Google's FireBase or GitHub. However, due to the technical complexity of hosting an experiment on "your own server" this explanation will not be as user friendly.

The benefit of doing so is that you can fully control where and how the data is stored. This is required for ethics approval at some universities.

## Broad Overview 

Here's a broad overview of how to run a jsPsych Experiment using the uManitoba servers to host it and save the data. It also explains how to link SONA to get and automatically credit participants:
- Program a jsPsych Experiment with code to export the data to a local folder
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

## Copying This Example Experiment:

The easiest way copy this experiment is to fork the entire repository into your own GitHub account, and then clone it (so that it is saved locally on your machine). If you understand these instructions then you can skip to the section [Running This Example Experiment](#running-this-example-experiment), otherwise go check out the [instructions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#download-rstudio#copying-this-example-experiment). For running the experiment on the uManitoba Servers you will only need the files in the *uManitoba_Server* folder.

### Running This Example Experiment

Now that you have a local copy of the example experiment on your machine, you can begin to make and save your own edits. When you save the edits they will only be saved on your local machine until you [push them back to GitHub](#saving-edits-to-github). However, for this example, we don't necessarily need to push them back to GitHub because we're not hosting the experiment there.

#### Editing and Testing the Experiment

Because this experiment is the same as the one in the parent directory, you'll find that most of the files in this folder are copies from the parent directory. So for that reason see [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#download-rstudio) for an explanation of the files and how to make edits. Keep in mind that you can ignore/delete all the #FIREBASE code because we will not be using it to store/collect the data.

#### Finding your uManitoba Server Account

Follow the instructions found here: https://home.cc.umanitoba.ca/setup.html

**I'm going to make these instructions more granular in the future but this will have to work for now**

#### Hosting the Experiment

Simply by transfering the contents of the *uManitoba_Server* to your Unix account's *public_html* file, this experiment will be hosted on the server. It can be found at a URL that looks something like this: http:<i></i>//home.cc.umanitoba.ca/~USER_ID (as long as you don't hide the index.html file inside of a folder)

**I'm going to make these instructions more granular in the future but this will have to work for now**

#### Collecting the Data Remotely

Fortunately, jsPsych has functions in order to save data onto a web server that has PHP installed (see their instructions [here](https://www.jspsych.org/overview/data/#storing-data-permanently-as-a-file)). Essentially it boils down to this:
- Include the write_data.php file in the directory that you are hosting this experiment (index.html file) on
- Include the functions tagged with #UMANITOBA_SERVER in the index.html file of this folder (uManitoba_Server)
- Set the permissions for the directory you are hosting the experiment on so that users can read and execute all the code, and write to the appropraiate data folders. You can do this with Filezilla

**I'm going to make these instructions more granular in the future but this will have to work for now**

#### Crediting SONA Participants

See [instuctions in the parent directory](https://github.com/SmithBradleyC/jsPsych_Online_Experiments#collecting-the-data-remotely) except you'll need to point to a URL that looks something like this: http:<i></i>//home.cc.umanitoba.ca/~USER_ID/?id=%SURVEY_CODE%

## General Concerns

- These instructions will be difficult for those not familiar with programming or hosting their own website
- Dealing with file/folder permissions and server access can be a bit of a pain unless you are willing to allow to give read, write, and execute permissions to all files
- Although this method is firmly an open science method, it's not as common as posting to a GitHub repository
