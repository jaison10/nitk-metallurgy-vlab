var selectedSample;

function navNext() {
    document.getElementById('canvas' + (simsubscreennum)).style.display = "none";
    for (temp = 0; temp <= 4; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }

    simsubscreennum += 1;
    document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
    document.getElementById('nextButton').style.visibility = "visible";
    magic();
}


// var ca;
// var questions = ["Why is the specimen rubbed in one direction only?",
//     "Why is the specimen turned through 90°?",
//     "What is the etchant used for Solder alloy?",
//     "What is the etchant used for Brass?"
// ];

// var options2 = [
//     ["For ease of scratching",
//         "Make all the scratches in one direction",
//         "To avoid excess pressure",
//         "None of these"
//     ],
//     ["1. To make it even for clean smooth finish", "2. To level all the scratches", "3. Both (1) and (2)", "4. None of the above"],
//     ["Marbles Reagent", "2% Nital Reagent", "Carpenters Reagent", "None of the above"],
//     ["Marbles Reagent", "Acidified Ferric Chloride", "Carpenters Reagent", "None of the above"],

// ];

// function validateAnswer(qn, ans, left, top) {
//     $("#answer").empty();
//     document.getElementById("a").innerHTML = "";
//     document.getElementById("questDiv").style = "z-index:200;position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" + left + ";top:" + top + ";";
//     if (qn == 2) document.getElementById('questDiv').style.width = "210px";
//     document.getElementById("q").innerHTML = questions[qn];
//     el = document.createElement("option");
//     el.textContent = " ";
//     el.value = " ";
//     answer.appendChild(el);

//     for (j = 0; j < options2[qn].length; j++) {
//         opt = options2[qn][j];

//         el = document.createElement("option");
//         el.textContent = opt;
//         el.value = opt;
//         answer.appendChild(el);
//         $("#answer").change(function() {
//             ca = $(this).children("option:selected").val();
//             if (options2[qn][ans] == ca) {
//                 document.getElementById("a").innerHTML = "Correct Answer!";
//             } else {
//                 document.getElementById("a").innerHTML = "Wrong! Answer is " + options2[qn][ans];
//             }
//             setTimeout(function() {
//                 document.getElementById("questDiv").style.visibility = "hidden";
//                 document.getElementById("nextButton").style.visibility = "visible";
//             }, 2500);
//         });
//     }
// }


//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow() {
    if (document.getElementById('arrow1').style.visibility == "hidden")
        document.getElementById('arrow1').style.visibility = "visible";
    else
        document.getElementById('arrow1').style.visibility = "hidden";
}

//stop blinking arrow
function myStopFunction() {
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility = "hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------
function magic() {


    if (simsubscreennum == 1) {
        document.getElementById("sampleDesc").style.visibility = "visible";
        document.getElementById("sampleDescText").style.visibility = "visible";
    }
    if (simsubscreennum == 2) {
        document.getElementById("initialEmitter").style.visibility = "visible";
        document.getElementById("initialRec").style.visibility = "visible";
        document.getElementById("stageWithoutSample").style.visibility = "visible";

        document.getElementById('nextButton').style.visibility = "hidden";
        document.getElementById("sampleDesc").style.visibility = "hidden";
        document.getElementById("sampleDescText").style.visibility = "hidden";
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 320px; top: 150px; height: 30px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById("handSample").style.cursor = "pointer";
        document.getElementById('handSample').style.visibility = 'visible';
        document.getElementById('handSample').onclick = function() {
            placeSampleFunction();
        };
    }
    if (simsubscreennum == 3) {
        document.getElementById('nextButton').style.visibility = "hidden";
        document.getElementById('handSample').style.visibility = 'hidden';
        document.getElementById("initialEmitter").style.visibility = "hidden";
        document.getElementById("initialRec").style.visibility = "hidden";
        document.getElementById("stageWithoutSample").style.visibility = "hidden";
        document.getElementById("samplePlaced").style.visibility = "hidden";

        document.getElementById('gotoPCsetup').style.visibility = 'visible';
        document.getElementById('pc').style.visibility = 'visible';
        document.getElementById("gotoPCsetup").style.cursor = "pointer";
        document.getElementById('gotoPCsetup').onclick = function() {
            showPCOptions();
        }
    }
    if (simsubscreennum == 4) {
        document.getElementById("pumptext3").innerText = "";
        document.getElementById("pumptext4").innerText = "Observation 1";
        document.getElementById("nextButton").style.visibility = "hidden";
        document.getElementById("XRDgraph").style.visibility = "hidden";
        document.getElementById("pcLittle").style.visibility = "hidden";
        document.getElementById("XRDgraphStep4").style.visibility = "visible";
        document.getElementById("slide1_content").style.visibility = "visible";
        document.getElementById("gotoobserve2").style.visibility = "visible";
        document.getElementById("gotoobserve2").style.cursor = "pointer";
        document.getElementById("gotoobserve2").onclick = function(){
            displaySlide2Content();
        }
    }

    if (simsubscreennum == 5) {
        document.getElementById('nextButton').style.visibility = "hidden";

    }
}

function placeSampleFunction() {
    myStopFunction();
    document.getElementById("handSample").classList.add("placeSample");
    setTimeout(function() {
        document.getElementById("handSample").style.visibility = "hidden";
        // document.getElementById("stageWithoutSample").style.visibility = "hidden";
        document.getElementById("samplePlaced").style.visibility = "visible";
        document.getElementById('nextButton').style.visibility = "visible";

    }, 2000);
}

function showPCOptions() {
    document.getElementById("gotoPCsetup").style.visibility = "hidden";
    document.getElementById("pc").style.visibility = "visible";
    document.getElementById("window").style.visibility = "visible";
    document.getElementById("windowBarText").style.visibility = "visible";
    document.getElementById("contentInsideBox").style.visibility = "visible";
    document.getElementById("startButtonOfSetup").style.visibility = "visible";
    document.getElementById("startButtonOfSetup").style.cursor = "pointer";
    document.getElementById("startButtonOfSetup").onclick = function() {
        xrdBegin();
    }
}

function xrdBegin() {
    document.getElementById("pumptext3").innerText = "Switch on the apparatus after ensuring all safety procedures are in place and wait for the program to deliver the XRD output.";

    // Hiding
    document.getElementById("pc").style.visibility = "hidden";
    document.getElementById("window").style.visibility = "hidden";
    document.getElementById("windowBarText").style.visibility = "hidden";
    document.getElementById("contentInsideBox").style.visibility = "hidden";
    document.getElementById("startButtonOfSetup").style.visibility = "hidden";
    // Hiding done.

    // Automated animation of bringing the equipment to the initial position.
    document.getElementById("initialRecStep3").style.visibility = "visible";
    document.getElementById("samplePlacedStep3").style.visibility = "visible";
    document.getElementById("initialEmitterStep3").style.visibility = "visible";
    document.getElementById("stageWithoutSampleStep3").style.visibility = "visible";

    document.getElementById("initialEmitterStep3").classList.add("restoreEmitter");
    document.getElementById("initialRecStep3").classList.add("restoreRec");
    setTimeout(() => {
        document.getElementById("initialEmitterStep3").style.visibility = "hidden";
        document.getElementById("initialRecStep3").style.visibility = "hidden";
        document.getElementById("newEmitter").style.visibility = "visible";
        document.getElementById("newRec").style.visibility = "visible";
        // Showing start button and arrow
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 340px; top: 150px; height: 30px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById("startButton").style.visibility = "visible";
        document.getElementById("startButton").style.cursor = "pointer";
        document.getElementById('startButton').onclick = function() {
            moveXRDEquip();
        };
    }, 2000);
}



function moveXRDEquip() {
    myStopFunction();
    document.getElementById("startButton").style.visibility = "hidden";
    document.getElementById("newEmitter").classList.add("moveEmitter");
    document.getElementById("newRec").classList.add("moveRec");
    setTimeout(() => {
        document.getElementById("newEmitter").style.visibility = "hidden";
        document.getElementById("newRec").style.visibility = "hidden";
        document.getElementById("finalEmitter").style.visibility = "visible";
        document.getElementById("finalRec").style.visibility = "visible";
    }, 3000);
    setTimeout(() => {

        document.getElementById("pcLittle").style.visibility = "visible";
        document.getElementById("outputButton").style.visibility = "visible";
        document.getElementById("outputButton").style.cursor = "pointer";
        document.getElementById("outputButton").onclick = function() {
            displayOutput();
        }
    }, 4000);
}

function displayOutput() {
    document.getElementById("outputButton").style.visibility = "hidden";
    document.getElementById("pumptext3").innerText = "Interpret the output data by comparing it to respective JCPDS Files to identify the crystal structure of the sample under consideration.";
    document.getElementById("finalEmitter").style.visibility = "hidden";
    document.getElementById("finalRec").style.visibility = "hidden";
    document.getElementById("stageWithoutSampleStep3").style.visibility = "hidden";
    document.getElementById("samplePlacedStep3").style.visibility = "hidden";

    document.getElementById("pcLittle").classList.add("moveOutputPC");
    setTimeout(() => {
        document.getElementById("pcLittle").style.visibility = "hidden";
        document.getElementById("pc").style.visibility = "visible";
        document.getElementById("XRDgraph").style.visibility = "visible";
        // document.getElementById("gotoobserve2").style.visibility = "visible";
        // document.getElementById("gotoobserve2").style.cursor = "pointer";
        document.getElementById("nextButton").style.visibility = "visible";
        document.getElementById("nextButton").style.cursor = "pointer";
        document.getElementById("nextButton").style.zIndex = 5;
    }, 3000);
}

function displaySlide2Content(){
    document.getElementById("XRDgraphStep4").style.visibility = "hidden";
    document.getElementById("slide1_content").style.visibility = "hidden";
    document.getElementById("pumptext4").innerText = "Observation 2";
    document.getElementById("gotoobserve2").style.visibility = "hidden";
    document.getElementById("gotoobserve1").style.visibility = "visible";
    document.getElementById("gotoobserve1").style.cursor = "pointer";
    document.getElementById("slide2_1").style.visibility = "visible";
    document.getElementById("slide2_content").style.visibility = "visible";
    document.getElementById("nextArrow").style.visibility = 'visible';
    document.getElementById("nextArrow").style.cursor = "pointer";

    document.getElementById("nextArrow").onclick = function(){
        displaySlide2Next();
    }
    document.getElementById("gotoobserve1").onclick = function(){
        displaySlide1();
    }
}
function displaySlide2Next(){
    document.getElementById("slide2_1").style.visibility = "hidden";
    document.getElementById("slide2_content").style.visibility = "hidden";
    document.getElementById("nextArrow").style.visibility = 'hidden';
    document.getElementById("prevArrow").style.visibility = 'visible';
    document.getElementById("prevArrow").style.cursor = "pointer";
    document.getElementById("slide2NextTable").style.visibility = "visible";
    document.getElementById("slide2Next_content").style.visibility = "visible";
    document.getElementById("finalResult").style.visibility = "visible";
    document.getElementById("prevArrow").onclick = function(){
        displaySlide2Prev();
    }
}
function displaySlide1(){
    document.getElementById("slide2_1").style.visibility = "hidden";
    document.getElementById("slide2_content").style.visibility = "hidden";
    document.getElementById("gotoobserve2").style.visibility = "visible";
    document.getElementById("gotoobserve1").style.visibility = "hidden";
    document.getElementById("nextArrow").style.visibility = 'hidden';
    document.getElementById("prevArrow").style.visibility = 'hidden';
    document.getElementById("slide2Next_content").style.visibility = "hidden";
    document.getElementById("slide2NextTable").style.visibility = "hidden";
    document.getElementById("XRDgraphStep4").style.visibility = "visible";
    document.getElementById("slide1_content").style.visibility = "visible";
    document.getElementById("gotoobserve2").style.visibility = "visible";
    document.getElementById("finalResult").style.visibility = "hidden";
    document.getElementById("pumptext4").innerText = "Observation 1"
}
function displaySlide2Prev(){
    document.getElementById("slide2NextTable").style.visibility = "hidden";
    document.getElementById("slide2_1").style.visibility = "visible";
    document.getElementById("slide2_content").style.visibility = "visible";
    document.getElementById("nextArrow").style.visibility = 'visible';
    document.getElementById("prevArrow").style.visibility = 'hidden';
    document.getElementById("slide2Next_content").style.visibility = "hidden";
    document.getElementById("finalResult").style.visibility = "hidden";
}