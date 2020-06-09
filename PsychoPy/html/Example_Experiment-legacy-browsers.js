/*************************** 
 * Example_Experiment Test *
 ***************************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Example_Experiment';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'Press OK to begin': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeScreenRoutineBegin());
flowScheduler.add(WelcomeScreenRoutineEachFrame());
flowScheduler.add(WelcomeScreenRoutineEnd());
flowScheduler.add(Blank500RoutineBegin());
flowScheduler.add(Blank500RoutineEachFrame());
flowScheduler.add(Blank500RoutineEnd());
const trialsStudy1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsStudy1LoopBegin, trialsStudy1LoopScheduler);
flowScheduler.add(trialsStudy1LoopScheduler);
flowScheduler.add(trialsStudy1LoopEnd);
flowScheduler.add(Blank500RoutineBegin());
flowScheduler.add(Blank500RoutineEachFrame());
flowScheduler.add(Blank500RoutineEnd());
flowScheduler.add(WaitScreenRoutineBegin());
flowScheduler.add(WaitScreenRoutineEachFrame());
flowScheduler.add(WaitScreenRoutineEnd());
flowScheduler.add(Blank500RoutineBegin());
flowScheduler.add(Blank500RoutineEachFrame());
flowScheduler.add(Blank500RoutineEnd());
const trialsTestLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsTestLoopBegin, trialsTestLoopScheduler);
flowScheduler.add(trialsTestLoopScheduler);
flowScheduler.add(trialsTestLoopEnd);
flowScheduler.add(EndScreenRoutineBegin());
flowScheduler.add(EndScreenRoutineEachFrame());
flowScheduler.add(EndScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://umanitobapsych.sona-systems.com/webstudy_credit.aspx?experiment_id=XXXX&credit_token=11X11X111X1X1X1XX1X11111111XX11X&survey_code="+expInfo[\'participant\']', '');

  return Scheduler.Event.NEXT;
}


var WelcomeScreenClock;
var textWelcome;
var keyWelcome;
var Blank500Clock;
var textBlank500;
var StudyTrialClock;
var textStudyWord;
var WaitScreenClock;
var textWaitScreen;
var keyWaitScreen;
var TestTrialClock;
var textTestWord;
var keyTest_yes_no;
var EndScreenClock;
var textEnd;
var key_resp;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "WelcomeScreen"
  WelcomeScreenClock = new util.Clock();
  textWelcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'textWelcome',
    text: 'You will be presented with several words. Try to remember them.\n\nPress "e" to begin',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  keyWelcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blank500"
  Blank500Clock = new util.Clock();
  textBlank500 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlank500',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "StudyTrial"
  StudyTrialClock = new util.Clock();
  textStudyWord = new visual.TextStim({
    win: psychoJS.window,
    name: 'textStudyWord',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Blank500"
  Blank500Clock = new util.Clock();
  textBlank500 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlank500',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Blank500"
  Blank500Clock = new util.Clock();
  textBlank500 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlank500',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "WaitScreen"
  WaitScreenClock = new util.Clock();
  textWaitScreen = new visual.TextStim({
    win: psychoJS.window,
    name: 'textWaitScreen',
    text: "Take a rest if you need. \n\nNext, your job will be to indicate whether you previously studied a word by pressing 'y', otherwise press 'n'. Keep your index fingers on these keys. It is important that you respond accurately but also quickly.\n\nWhen you are ready press 'i' to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  keyWaitScreen = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blank500"
  Blank500Clock = new util.Clock();
  textBlank500 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlank500',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "TestTrial"
  TestTrialClock = new util.Clock();
  textTestWord = new visual.TextStim({
    win: psychoJS.window,
    name: 'textTestWord',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  keyTest_yes_no = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blank500"
  Blank500Clock = new util.Clock();
  textBlank500 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlank500',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "EndScreen"
  EndScreenClock = new util.Clock();
  textEnd = new visual.TextStim({
    win: psychoJS.window,
    name: 'textEnd',
    text: 'Press Space to end the experiment.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _keyWelcome_allKeys;
var WelcomeScreenComponents;
function WelcomeScreenRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'WelcomeScreen'-------
    t = 0;
    WelcomeScreenClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    keyWelcome.keys = undefined;
    keyWelcome.rt = undefined;
    _keyWelcome_allKeys = [];
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(textWelcome);
    WelcomeScreenComponents.push(keyWelcome);
    
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function WelcomeScreenRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'WelcomeScreen'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = WelcomeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textWelcome* updates
    if (t >= 0.0 && textWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textWelcome.tStart = t;  // (not accounting for frame time here)
      textWelcome.frameNStart = frameN;  // exact frame index
      
      textWelcome.setAutoDraw(true);
    }

    
    // *keyWelcome* updates
    if (t >= 0.0 && keyWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyWelcome.tStart = t;  // (not accounting for frame time here)
      keyWelcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyWelcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyWelcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyWelcome.clearEvents(); });
    }

    if (keyWelcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyWelcome.getKeys({keyList: ['e'], waitRelease: false});
      _keyWelcome_allKeys = _keyWelcome_allKeys.concat(theseKeys);
      if (_keyWelcome_allKeys.length > 0) {
        keyWelcome.keys = _keyWelcome_allKeys[_keyWelcome_allKeys.length - 1].name;  // just the last key pressed
        keyWelcome.rt = _keyWelcome_allKeys[_keyWelcome_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeScreenRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'WelcomeScreen'-------
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('keyWelcome.keys', keyWelcome.keys);
    if (typeof keyWelcome.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyWelcome.rt', keyWelcome.rt);
        routineTimer.reset();
        }
    
    keyWelcome.stop();
    // the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Blank500Components;
function Blank500RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Blank500'-------
    t = 0;
    Blank500Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    Blank500Components = [];
    Blank500Components.push(textBlank500);
    
    Blank500Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function Blank500RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Blank500'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Blank500Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textBlank500* updates
    if (t >= 0.0 && textBlank500.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textBlank500.tStart = t;  // (not accounting for frame time here)
      textBlank500.frameNStart = frameN;  // exact frame index
      
      textBlank500.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textBlank500.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textBlank500.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Blank500Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Blank500RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Blank500'-------
    Blank500Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var trialsStudy1;
var currentLoop;
function trialsStudy1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trialsStudy1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Example_Experiment_words.csv', '0:12'),
    seed: undefined, name: 'trialsStudy1'
  });
  psychoJS.experiment.addLoop(trialsStudy1); // add the loop to the experiment
  currentLoop = trialsStudy1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialsStudy1.forEach(function() {
    const snapshot = trialsStudy1.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(StudyTrialRoutineBegin(snapshot));
    thisScheduler.add(StudyTrialRoutineEachFrame(snapshot));
    thisScheduler.add(StudyTrialRoutineEnd(snapshot));
    thisScheduler.add(Blank500RoutineBegin(snapshot));
    thisScheduler.add(Blank500RoutineEachFrame(snapshot));
    thisScheduler.add(Blank500RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsStudy1LoopEnd() {
  psychoJS.experiment.removeLoop(trialsStudy1);

  return Scheduler.Event.NEXT;
}


var trialsTest;
function trialsTestLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trialsTest = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Example_Experiment_words.csv',
    seed: undefined, name: 'trialsTest'
  });
  psychoJS.experiment.addLoop(trialsTest); // add the loop to the experiment
  currentLoop = trialsTest;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialsTest.forEach(function() {
    const snapshot = trialsTest.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TestTrialRoutineBegin(snapshot));
    thisScheduler.add(TestTrialRoutineEachFrame(snapshot));
    thisScheduler.add(TestTrialRoutineEnd(snapshot));
    thisScheduler.add(Blank500RoutineBegin(snapshot));
    thisScheduler.add(Blank500RoutineEachFrame(snapshot));
    thisScheduler.add(Blank500RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsTestLoopEnd() {
  psychoJS.experiment.removeLoop(trialsTest);

  return Scheduler.Event.NEXT;
}


var StudyTrialComponents;
function StudyTrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'StudyTrial'-------
    t = 0;
    StudyTrialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    textStudyWord.setText(WordItem);
    // keep track of which components have finished
    StudyTrialComponents = [];
    StudyTrialComponents.push(textStudyWord);
    
    StudyTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function StudyTrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'StudyTrial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = StudyTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textStudyWord* updates
    if (t >= 0.0 && textStudyWord.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textStudyWord.tStart = t;  // (not accounting for frame time here)
      textStudyWord.frameNStart = frameN;  // exact frame index
      
      textStudyWord.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textStudyWord.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textStudyWord.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    StudyTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StudyTrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'StudyTrial'-------
    StudyTrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _keyWaitScreen_allKeys;
var WaitScreenComponents;
function WaitScreenRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'WaitScreen'-------
    t = 0;
    WaitScreenClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    keyWaitScreen.keys = undefined;
    keyWaitScreen.rt = undefined;
    _keyWaitScreen_allKeys = [];
    // keep track of which components have finished
    WaitScreenComponents = [];
    WaitScreenComponents.push(textWaitScreen);
    WaitScreenComponents.push(keyWaitScreen);
    
    WaitScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function WaitScreenRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'WaitScreen'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = WaitScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textWaitScreen* updates
    if (t >= 0.0 && textWaitScreen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textWaitScreen.tStart = t;  // (not accounting for frame time here)
      textWaitScreen.frameNStart = frameN;  // exact frame index
      
      textWaitScreen.setAutoDraw(true);
    }

    
    // *keyWaitScreen* updates
    if (t >= 0.0 && keyWaitScreen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyWaitScreen.tStart = t;  // (not accounting for frame time here)
      keyWaitScreen.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyWaitScreen.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyWaitScreen.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyWaitScreen.clearEvents(); });
    }

    if (keyWaitScreen.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyWaitScreen.getKeys({keyList: ['i'], waitRelease: false});
      _keyWaitScreen_allKeys = _keyWaitScreen_allKeys.concat(theseKeys);
      if (_keyWaitScreen_allKeys.length > 0) {
        keyWaitScreen.keys = _keyWaitScreen_allKeys[_keyWaitScreen_allKeys.length - 1].name;  // just the last key pressed
        keyWaitScreen.rt = _keyWaitScreen_allKeys[_keyWaitScreen_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WaitScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WaitScreenRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'WaitScreen'-------
    WaitScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('keyWaitScreen.keys', keyWaitScreen.keys);
    if (typeof keyWaitScreen.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyWaitScreen.rt', keyWaitScreen.rt);
        routineTimer.reset();
        }
    
    keyWaitScreen.stop();
    // the Routine "WaitScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _keyTest_yes_no_allKeys;
var TestTrialComponents;
function TestTrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TestTrial'-------
    t = 0;
    TestTrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    textTestWord.setText(WordItem);
    keyTest_yes_no.keys = undefined;
    keyTest_yes_no.rt = undefined;
    _keyTest_yes_no_allKeys = [];
    // keep track of which components have finished
    TestTrialComponents = [];
    TestTrialComponents.push(textTestWord);
    TestTrialComponents.push(keyTest_yes_no);
    
    TestTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function TestTrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TestTrial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TestTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textTestWord* updates
    if (t >= 0.0 && textTestWord.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textTestWord.tStart = t;  // (not accounting for frame time here)
      textTestWord.frameNStart = frameN;  // exact frame index
      
      textTestWord.setAutoDraw(true);
    }

    
    // *keyTest_yes_no* updates
    if (t >= 0.0 && keyTest_yes_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyTest_yes_no.tStart = t;  // (not accounting for frame time here)
      keyTest_yes_no.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyTest_yes_no.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyTest_yes_no.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyTest_yes_no.clearEvents(); });
    }

    if (keyTest_yes_no.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyTest_yes_no.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _keyTest_yes_no_allKeys = _keyTest_yes_no_allKeys.concat(theseKeys);
      if (_keyTest_yes_no_allKeys.length > 0) {
        keyTest_yes_no.keys = _keyTest_yes_no_allKeys[_keyTest_yes_no_allKeys.length - 1].name;  // just the last key pressed
        keyTest_yes_no.rt = _keyTest_yes_no_allKeys[_keyTest_yes_no_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    TestTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TestTrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TestTrial'-------
    TestTrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('keyTest_yes_no.keys', keyTest_yes_no.keys);
    if (typeof keyTest_yes_no.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyTest_yes_no.rt', keyTest_yes_no.rt);
        routineTimer.reset();
        }
    
    keyTest_yes_no.stop();
    // the Routine "TestTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var EndScreenComponents;
function EndScreenRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'EndScreen'-------
    t = 0;
    EndScreenClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    EndScreenComponents = [];
    EndScreenComponents.push(textEnd);
    EndScreenComponents.push(key_resp);
    
    EndScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function EndScreenRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'EndScreen'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = EndScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textEnd* updates
    if (t >= 0.0 && textEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textEnd.tStart = t;  // (not accounting for frame time here)
      textEnd.frameNStart = frameN;  // exact frame index
      
      textEnd.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndScreenRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'EndScreen'-------
    EndScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "EndScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
