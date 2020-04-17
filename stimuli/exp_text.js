var welcome_text = "<p>Welcome to the experiment. This experiment should take no longer than 5 minutes.</p> <p>Press any key to begin.</p>";

var instruction_text = "<p>Please read these instructions carefully.</p>"+"<p>In this 'experiment' you will be presented with words in coloured text. You will be identifying the colour of that text by pressing keys on the keyboard. J = Red, K = Yellow, L = Green. Please use just your dominant hand to make responses. Also, when prompted to provide a word, respond by typing in the word 'clean'. You will have 2 seconds to respond to each stimuli.</p>"+"<p>Press any key to begin.</p>";

var attention_check_text = "Provide a word:";

var blue_audio_check_prompt = "<p><b>Audio Check</b></p> <p>Using the keyboard, press the <b>FIRST</b> letter of the word you just heard:<p>";

var green_audio_check_prompt = "<p><b>Audio Check</b></p> <p>Using the keyboard, press the <b>LAST</b> letter of the word you just heard:</p>";

var fullscreen_prompt = "<p><b>Please turn off all background audio</b> (or not, I don't actually care for this experiment)."+"<p><b>Remain in fullscreen mode for the entire experiment</b> (again, or not, I'm not actually analyzing this data). The experiment will switch to full screen mode when you press the button below. It will also record if you exit fullscreen mode at any point during the experiment.</p> <p> You will be able to push the button below in 5 seconds </p>";

var fixation_stim = "<p id = 'fixation_stim', style = 'color: black; font-size: 60pt;'>+</p>";

var feedback_stim_wrong = "<p id = 'fixation_stim', style = 'color: black; font-size: 60pt;'>XXX</p>";

var feedback_stim_correct = "<p id = 'fixation_stim', style = 'color: white; font-size: 60pt;'>BLANK</p>"; // white text to blend into background. Essentially I don't want feedback if they were correct

var keypress_choices = ["j","k","l"];

var keypress_prompt = "Press J(Red), K(Yellow), or L(Green)";

var debrief_text = "<p>The purpose of this study was to provide an example of a simple experiment that is run with jsPsych.</p> <p>Thank you for participating. If you want a more thorough explanation of the experiment then visit our GitHub repository <b>https://github.com/SmithBradleyC/jsPsych_Online_Experiments</b> </p> <p>Press any key to finish the experiment (this is where SONA subjects will be redirected to the SONA website and automatically granted their credit).</p>";

var age_text = "What is your age in years?";

var gender_prompt = "What is your gender?";

var country_prompt = "What is your country of residence?";

var provide_number_txt = "You must provide a whole number";

var ID_text = "Provide an ID (your name or some combination of letters and numbers) so that you can identify your own data. Not required";