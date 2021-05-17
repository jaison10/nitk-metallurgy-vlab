var selectedSample;

function navNext() {
    document.getElementById('canvas' + (simsubscreennum)).style.display = "none";
    for (temp = 0; temp <= 7; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }
    if (simsubscreennum == 7) {
        document.getElementById("man").style.display = "none";
        document.getElementById("microscope").style.display = "none";
    }

        simsubscreennum += 1;
        document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
        document.getElementById('nextButton').style.visibility = "visible"; 
        magic();
}

function solder_select() {
    document.getElementById('solder_alloy1').style.visibility = "visible";
    document.getElementById('solder_alloy2').style.visibility = "visible";
    document.getElementById('solder_alloy').style.visibility = "hidden";
    // document.getElementsByClassName('s1').style.left = "20px";
    document.getElementById('sa1').style.left = "20px";
    document.getElementById('sa2').style.left = "20px";



}

var ca;
var questions = ["Why is the specimen rubbed in one direction only?",
    "Why is the specimen turned through 90°?",
    "What is the etchant used for Solder alloy?",
    "What is the etchant used for Brass?"
];

var options2 = [
    ["For ease of scratching",
        "Make all the scratches in one direction",
        "To avoid excess pressure",
        "None of these"
    ],
    ["1. To make it even for clean smooth finish", "2. To level all the scratches", "3. Both (1) and (2)", "4. None of the above"],
    ["Marbles Reagent", "2% Nital Reagent", "Carpenters Reagent", "None of the above"],
    ["Marbles Reagent", "Acidified Ferric Chloride", "Carpenters Reagent", "None of the above"],

];

function validateAnswer(qn, ans, left, top) {
    $("#answer").empty();
    document.getElementById("a").innerHTML = "";
    document.getElementById("questDiv").style = "z-index:200;position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" + left + ";top:" + top + ";";
    if (qn == 2) document.getElementById('questDiv').style.width = "210px";
    document.getElementById("q").innerHTML = questions[qn];
    el = document.createElement("option");
    el.textContent = " ";
    el.value = " ";
    answer.appendChild(el);

    for (j = 0; j < options2[qn].length; j++) {
        opt = options2[qn][j];

        el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        answer.appendChild(el);
        $("#answer").change(function() {
            ca = $(this).children("option:selected").val();
            if (options2[qn][ans] == ca) {
                document.getElementById("a").innerHTML = "Correct Answer!";
            } else {
                document.getElementById("a").innerHTML = "Wrong! Answer is " + options2[qn][ans];
            }
            setTimeout(function() {
                document.getElementById("questDiv").style.visibility = "hidden";
                document.getElementById("nextButton").style.visibility = "visible";
            }, 2500);
        });
    }
}


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
        document.getElementById('gotoPCsetup').onclick = function(){
            showPCOptions();
        }
    }
    if (simsubscreennum == 4) {
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById('nextButton').style.visibility = "hidden";

        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 75px; top: 270px; height: 40px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(90deg)";
        document.getElementById('handBottle').onclick = function() {
            this.onclick = null;
            step4();
        };
    }

    if (simsubscreennum == 5) {
        document.getElementById('nextButton').style.visibility = "hidden";

    }
}

function placeSampleFunction() {
    myStopFunction();
    document.getElementById("handSample").classList.add("placeSample");
    setTimeout(function(){
        document.getElementById("handSample").style.visibility = "hidden";
        // document.getElementById("stageWithoutSample").style.visibility = "hidden";
        document.getElementById("samplePlaced").style.visibility = "visible";
        document.getElementById('nextButton').style.visibility = "visible";
        
    },2000);
}

function showPCOptions(){
    document.getElementById("gotoPCsetup").style.visibility = "hidden";
    document.getElementById("pc").style.visibility = "visible";
    document.getElementById("window").style.visibility = "visible";
    document.getElementById("windowBarText").style.visibility = "visible";
    document.getElementById("contentInsideBox").style.visibility = "visible";
    document.getElementById("startButtonOfSetup").style.visibility = "visible";
    document.getElementById("startButtonOfSetup").style.cursor = "pointer";
    document.getElementById("startButtonOfSetup").onclick = function(){
        xrdBegin();
    }
}

function xrdBegin(){
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
    setTimeout(()=>{
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
    },2000);
}



function moveXRDEquip() {
    myStopFunction();
    document.getElementById("startButton").style.visibility = "hidden";
    document.getElementById("newEmitter").classList.add("moveEmitter");
    document.getElementById("newRec").classList.add("moveRec");
    setTimeout(()=>{
        document.getElementById("newEmitter").style.visibility = "hidden";
        document.getElementById("newRec").style.visibility = "hidden";
        document.getElementById("finalEmitter").style.visibility = "visible";
        document.getElementById("finalRec").style.visibility = "visible";
    },3000);
    setTimeout(() => {
        document.getElementById("pcLittle").style.visibility = "visible";
        document.getElementById("outputButton").style.visibility = "visible";
        document.getElementById("outputButton").style.cursor = "pointer";
        document.getElementById("outputButton").onclick = function(){
            displayOutput();
        }
    }, 5000);
}

function displayOutput(){
    document.getElementById("outputButton").style.visibility = "hidden";

    document.getElementById("finalEmitter").style.visibility = "hidden";
    document.getElementById("finalRec").style.visibility = "hidden";
    document.getElementById("stageWithoutSampleStep3").style.visibility = "hidden";
    document.getElementById("samplePlacedStep3").style.visibility = "hidden";

    document.getElementById("pcLittle").classList.add("moveOutputPC");
    setTimeout(() => {
        document.getElementById("pcLittle").style.visibility = "hidden";
        document.getElementById("pc").style.visibility = "visible";
        document.getElementById("XRDgraph").style.visibility = "visible";

    }, 3000);
    
}











function blink(eid, rt) {
    setTimeout(function() {
        document.getElementById(eid).style.opacity = "1";
    }, rt);
    rt += 100;
    setTimeout(function() {
        document.getElementById(eid).style.opacity = "0";
    }, rt);
}

function step6() {
    myStopFunction();
    document.getElementById('handCotton').style.marginTop = "60px";
    document.getElementById('handCotton').style.opacity = "0";
    setTimeout(function() {
        if (selectedSample == 'solder_alloy1' || selectedSample == 'solder_alloy2') {
            document.getElementById('cap').style.marginTop = "75px";

        } else {
            document.getElementById('cap').style.marginTop = "60px";

        }

        document.getElementById('handCotton').style.display = "block";
        document.getElementById('handCotton').style.transitionDuration = "1.2s";
        document.getElementById('handCotton').style.visibility = "visible";
        document.getElementById('handCotton').style.opacity = "1";
    }, 500);
    setTimeout(function() {
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 300px; top: 420px; height: 40px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
    }, 2000);
    document.getElementById('handCotton').onclick = function() {
        myStopFunction();
        this.onclick = null;
        if (selectedSample == 'solder_alloy1' || selectedSample == 'solder_alloy2') {
            document.getElementById('handCotton').style.top = "-150px";
            document.getElementById('handCotton').style.left = "-45px";

        } else {
            document.getElementById('handCotton').style.top = "-135px";
            document.getElementById('handCotton').style.left = "-45px";

        }
        document.getElementById('reagent').style.transform = "rotate(30deg)";
        document.getElementById('reagent').style.WebkitTransform = "rotate(30deg)";
        document.getElementById('reagent').style.msTransform = "rotate(30deg)";


        setTimeout(function() {
            //document.getElementById('etchSample').style.visibility="visible";
            //document.getElementById('handCotton').style.top="-100px";
            document.getElementById('handCotton').style.marginTop = "40px";
            document.getElementById('handCotton').style.left = "250px";
            //document.getElementById('handCotton').style.transitionDuration="0.3s";
            document.getElementById('reagent').style.transform = "rotate(0deg)";
            document.getElementById('reagent').style.WebkitTransform = "rotate(0deg)";
            document.getElementById('reagent').style.msTransform = "rotate(0deg)";


            myInt = setInterval(function() {
                animatearrow();
            }, 500);
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 80px; top: 180px; height: 40px; z-index: 10;";
            document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(180deg)";
            document.getElementById('cap').style.zIndex = "100";
            document.getElementById('etchSample').style.opacity = "0";
        }, 1500);
        document.getElementById('cap').onclick = function() {
            myStopFunction();
            this.onclick = null;
            document.getElementById('cap').style.zIndex = "-1";
            document.getElementById('cap').style.marginTop = "189px";
            setTimeout(function() {
                document.getElementById('etchSample').style.visibility = "visible";
                document.getElementById('etchSample').style.opacity = "1";
                document.getElementById('etchSample').style.zIndex = "100";
                document.getElementById('handCotton').style.zIndex = "-10";
                document.getElementById('handCotton').style.transitionDuration = "0.3s";
                myInt = setInterval(function() {
                    animatearrow();
                }, 500);
                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 310px; top: 330px; height: 40px; z-index: 10;";
                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                // Code for IE9
                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                // Standard syntax
                document.getElementById("arrow1").style.transform = "rotate(180deg)";
            }, 2000);
            document.getElementById('etchSample').onclick = function() {
                this.onclick = null;
                myStopFunction();
                document.getElementById('etchSample').style.zIndex = "0";
                document.getElementById('handCotton').style.zIndex = "10";
                if (selectedSample == 'solder_alloy1' || selectedSample == 'solder_alloy2') {
                    document.getElementById('handCotton').style.top = "-93px";
                } else {
                    document.getElementById('handCotton').style.top = "-80px";

                }

                document.getElementById('handCotton').style.marginTop = "0px";
                document.getElementById('handCotton').style.left = "115px";
                setTimeout(function() {
                    document.getElementById('handCotton').style.marginLeft = "20px";
                }, 400);
                setTimeout(function() {
                    document.getElementById('handCotton').style.marginLeft = "-20px";
                }, 800);
                setTimeout(function() {
                    document.getElementById('handCotton').style.marginLeft = "20px";
                }, 1200);
                setTimeout(function() {
                    document.getElementById('handCotton').style.marginLeft = "-20px";
                }, 1600);
                setTimeout(function() {
                    document.getElementById('handCotton').style.marginLeft = "0px";
                }, 2000);
                setTimeout(function() {
                    document.getElementById('handCotton').style.marginTop = "-15px";
                    document.getElementById('handCotton').style.marginLeft = "100px";
                    document.getElementById('reagent').style.opacity = "0";

                    document.getElementById('cap').style.opacity = "0";
                    validateAnswer(1, 2, "50px", "110px");
                }, 2500);
            }
        }
    }
}