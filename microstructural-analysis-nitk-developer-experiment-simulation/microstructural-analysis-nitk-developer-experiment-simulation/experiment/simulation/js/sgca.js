function navNext() {
    document.getElementById('canvas' + (simsubscreennum)).style.display = "none";
    for (temp = 0; temp <= 7; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }
    if (simsubscreennum == 7) {
        document.getElementById("man").style.display = "none";
        document.getElementById("microscope").style.display = "none";
    }
    if (sample) {
        document.getElementById("canvas0.5").style.visibility = "visible";
        sample = 0;
    }
    else {
        simsubscreennum += 1;
        if (simsubscreennum == 1) {
            var p3radio = document.getElementById('selectp3');
            var p12radio = document.getElementById('selectp12');
            if (p3radio.checked) sampletype = 1;
            else if (p12radio.checked) sampletype = 2;
            //console.log(sampletype);
            document.getElementById("canvas0.5").style.display = "none";
        }
        document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
        document.getElementById('nextButton').style.visibility = "hidden";
        magic();
    }
}


var ca;
var questions = ["What is the glass plate used for?",
    "What is poured on the disc polisher in the previous step?",
    "What is the etchant used for austenitic stainless steel?"
];

var options2 = [
    ["1. It is easier to apply pressure.",
        "2. To obtain a flat surface.",
        "3. To avoid uneven surface.",
        "4. Both (2) and (3)."
    ],
    ["Alumina solution", "Silica solution", "Calcium Carbonate solution", "None of the above"],
    ["Marbles Reagent", "2% Nital Reagent", "Carpenters Reagent", "None of the above"]
];

function validateAnswer(qn, ans, left, top) {
    $("#answer").empty();
    document.getElementById("a").innerHTML = "";
    document.getElementById("questDiv").style = "z-index:200;position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" + left + ";top:" + top + ";";
    if (qn == 2) document.getElementById('questDiv').style.width = "250px";
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
            }
            else {
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
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 360px; top: 250px; height: 40px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('beltSample').onclick = function() {
            this.onclick = null;
            step1();
        };
    }
    if (simsubscreennum == 2) {
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 340px; top: 220px; height: 40px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('beltSample2').onclick = function() {
            this.onclick = null;
            step2();
        };
    }
    if (simsubscreennum == 3) {
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 320px; top: 300px; height: 40px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('glassPaper2').style.visibility = "visible";
        document.getElementById('beltSample3').onclick = function() {
            this.onclick = null;
            step3();
        };
    }
    if (simsubscreennum == 4) {
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
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
        document.getElementById("note2").style.visibility = "visible";
        document.getElementById("ok2").onclick = function() {
            this.onclick = null;
            document.getElementById("note2").style.display = "none";
            myInt = setInterval(function() {
                animatearrow();
            }, 500);
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 60px; top: 310px; height: 40px; z-index: 10;";
            document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(180deg)";
            document.getElementById('reagent').onclick = function() {
                this.onclick = null;
                step6();
            }
        };
    }
    if (simsubscreennum == 6) {
        var level = 1;
        var type = sampletype;
        var deg = 0;
        if (type != 1) document.getElementById('preview').src = 'images/microscope/p12_sq50x.jpg';
        document.getElementById("man").style.visibility = "visible";
        document.getElementById("microscope").style.visibility = "visible";
        document.getElementById("man").style.marginLeft = "-216px";
        setTimeout(function() {
            document.getElementById("man").style.opacity = "0";
        }, 1500);
        setTimeout(function() {
            document.getElementById("microscope").style.marginTop = "-45px";
            document.getElementById('microscope').style.marginLeft = "-153px";
        }, 2500);
        setTimeout(function() {
            document.getElementById('vsc').style.opacity = '0.4';
            document.getElementById('lsw').style.opacity = '1';
            document.getElementById('zl').style.opacity = '1';
            document.getElementById('lup').style.visibility = 'visible';
            document.getElementById('ldn').style.visibility = 'visible';
            document.getElementById('lup').style.opacity = '0.6';
            document.getElementById('ldn').style.opacity = '0.6';
        }, 3500)
        setTimeout(function() {
            document.getElementById('scz').style.opacity = '1';
            document.getElementById('preview').style.opacity = '1';
        }, 4500)
        setTimeout(function() {
            myInt = setInterval(function() {
                animatearrow();
            }, 500);
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 550px; top: 460px; height: 40px; z-index: 10;";
        }, 5500)
        document.getElementById('lup').onclick = function() {
            myStopFunction();
            deg -= 120;
            document.getElementById("lsw").style.WebkitTransform = "rotate(" + deg + "deg)";
            document.getElementById("lsw").style.msTransform = "rotate(" + deg + "deg)";
            document.getElementById("lsw").style.transform = "rotate(" + deg + "deg)";
            document.getElementById('preview').style.WebkitFilter = "blur(10px)";
            if (type == 1) {
                if (level == 1)
                    setTimeout(function() {
                        document.getElementById('preview').src = 'images/microscope/p3_sq100x.jpg';
                        document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        level++;
                    }, 500);
                else if (level == 2)
                    setTimeout(function() {
                        document.getElementById('preview').src = 'images/microscope/p3_sq500x.jpg';
                        document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        level++;
                    }, 500);
                else
                    setTimeout(function() {
                        document.getElementById('preview').src = 'images/microscope/p3_sq50x.jpg';
                        document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        level = 1;
                    }, 500);
            }
            else {
                if (level == 1)
                    setTimeout(function() {
                        document.getElementById('preview').src = 'images/microscope/p12_sq100x.jpg';
                        document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        level++;
                    }, 500);
                else if (level == 2)
                    setTimeout(function() {
                        document.getElementById('preview').src = 'images/microscope/p12_sq500x.jpg';
                        document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        level++;
                    }, 500);
                else
                    setTimeout(function() {
                        document.getElementById('preview').src = 'images/microscope/p12_sq50x.jpg';
                        document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        level = 1;
                    }, 500);
            }
        }
        document.getElementById('ldn').onclick = function() {
            myStopFunction();
            deg += 120;
            document.getElementById("lsw").style.WebkitTransform = "rotate(" + deg + "deg)";
            document.getElementById("lsw").style.msTransform = "rotate(" + deg + "deg)";
            document.getElementById("lsw").style.transform = "rotate(" + deg + "deg)";
            document.getElementById('preview').style.WebkitFilter = "blur(10px)";
            if (type == 1) {
                if (level == 1)
                    setTimeout(function() {
                        document.getElementById('preview').src = 'images/microscope/p3_sq500x.jpg';
                        document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        level = 3;
                    }, 500);
                else if (level == 2)
                    setTimeout(function() {
                        document.getElementById('preview').src = 'images/microscope/p3_sq50x.jpg';
                        document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        level--;
                    }, 500);
                else
                    setTimeout(function() {
                        document.getElementById('preview').src = 'images/microscope/p3_sq100x.jpg';
                        document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        level--;
                    }, 500);
            }
            else {
                if (level == 1)
                    setTimeout(function() {
                        document.getElementById('preview').src = 'images/microscope/p12_sq500x.jpg';
                        document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        level = 3;
                    }, 500);
                else if (level == 2)
                    setTimeout(function() {
                        document.getElementById('preview').src = 'images/microscope/p12_sq50x.jpg';
                        document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        level--;
                    }, 500);
                else
                    setTimeout(function() {
                        document.getElementById('preview').src = 'images/microscope/p12_sq100x.jpg';
                        document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        level--;
                    }, 500);
            }
        }
        setTimeout(function() {
            validateAnswer(2, 0, "530px", "400px");
        }, 15000)
    }
    if (simsubscreennum == 7) {
        var type = sampletype;
        var slider = document.getElementById("mag");
        var output = document.getElementById("final");
        var contain = document.getElementById("magcon");
        var x = document.getElementById("magx");
        //document.getElementById('p3').onclick=function() {
        if (type == 1)
        /*return;
			else*/
        {
            document.getElementById('p3text').style.visibility = "visible";
            //document.getElementById('p12text').style.visibility="hidden";
            /*if(slider.value==1)*/
            output.src = "images/microscope/p3_50x.jpg";
            //else if(slider.value==2) output.src="images/microscope/p3_100x.jpg";
            //else output.src="images/microscope/p3_500x.jpg";
            //type=1;
        }
        //};
        //document.getElementById('p12').onclick=function() { 
        if (type == 2)
        /*return;
			else*/
        {
            document.getElementById('p12text').style.visibility = "visible";
            //document.getElementById('p3text').style.visibility="hidden";
            /*if(slider.value==1)*/
            output.src = "images/microscope/p12_50x.jpg";
            //else if(slider.value==2) output.src="images/microscope/p12_100x.jpg";
            //else output.src="images/microscope/p12_500x.jpg";
            //type=2;
        }
        //};
        slider.oninput = function() {
            if (type == 1) {
                if (this.value == 1) {
                    output.src = "images/microscope/p3_50x.jpg";
                    contain.title = "50x";
                    x.innerHTML = "50x";
                }
                else if (this.value == 2) {
                    output.src = "images/microscope/p3_100x.jpg";
                    contain.title = "100x";
                    x.innerHTML = "100x";
                }
                else {
                    output.src = "images/microscope/p3_500x.jpg";
                    contain.title = "500x";
                    x.innerHTML = "500x";
                }
            }
            else {
                if (this.value == 1) {
                    output.src = "images/microscope/p12_50x.jpg";
                    contain.title = "50x";
                    x.innerHTML = "50x";
                }
                else if (this.value == 2) {
                    output.src = "images/microscope/p12_100x.jpg";
                    contain.title = "100x";
                    x.innerHTML = "100x";
                }
                else {
                    output.src = "images/microscope/p12_500x.jpg";
                    contain.title = "500x";
                    x.innerHTML = "500x";
                }
            }
        };
    }
}

function step1() {
    myStopFunction();
    setTimeout(function() {
        document.getElementById('rr').style.visibility = "visible";
        document.getElementById('rr').style.marginLeft = "230px";
        document.getElementById('rrc').style.visibility = "visible";
        document.getElementById('rrc').style.transform = "rotate(1080deg)";
        document.getElementById("rrc").style.WebkitTransform = "rotate(1080deg)";
        document.getElementById("rrc").style.msTransform = "rotate(1080deg)";
        document.getElementById('rrc1').style.visibility = "visible";
        document.getElementById('rrc1').style.transform = "rotate(1080deg)";
        document.getElementById("rrc1").style.WebkitTransform = "rotate(1080deg)";
        document.getElementById("rrc1").style.msTransform = "rotate(1080deg)";
    }, 1100);
    setTimeout(function() {
        document.getElementById('beltSample').style.top = "-50px";
        document.getElementById('beltSample').style.left = "100px";
        document.getElementById('beltSample').style.marginLeft = "-14px";
        document.getElementById('beltSample').style.marginTop = "63px";
    }, 100);
    setTimeout(function() {
        document.getElementById('rr').style.display = "none";
        document.getElementById('rr1').style.visibility = "visible";
        document.getElementById('rr1').style.marginLeft = "230px";
    }, 1400);
    setTimeout(function() {
        document.getElementById('rr1').style.display = "none";
        document.getElementById('rr2').style.visibility = "visible";
        document.getElementById('rr2').style.marginLeft = "230px";
    }, 1800);
    setTimeout(function() {
        document.getElementById('rr2').style.display = "none";
        document.getElementById('rr3').style.visibility = "visible";
        document.getElementById('rr3').style.marginLeft = "230px";
    }, 2200);
    setTimeout(function() {
        document.getElementById('rr3').style.display = "none";
        document.getElementById('rr4').style.visibility = "visible";
        document.getElementById('rr4').style.marginLeft = "230px";
    }, 2600);
    setTimeout(function() {
        document.getElementById('beltSample').style.marginLeft = "0px";
        document.getElementById('beltSample').style.marginTop = "0px";
        document.getElementById('rrc').style.display = "none";
        document.getElementById('rrc1').style.display = "none";
        document.getElementById('rr4').style.display = "none";
    }, 3000);
    setTimeout(function() {
        document.getElementById('nextButton').style.visibility = "visible";
    }, 5500)
}

function step2() {
    myStopFunction();
    setTimeout(function() {
        document.getElementById('beltSample2').style.marginLeft = "-14px";
        document.getElementById('beltSample2').style.marginTop = "50px";
    }, 300);

    setTimeout(function() {
        document.getElementById('beltSample2').style.marginLeft = "-100px";
    }, 1300);
    setTimeout(function() {
        document.getElementById('beltSample2').style.marginLeft = "-14px";
        document.getElementById('beltSample2').style.marginTop = "0px";
    }, 1700);
    setTimeout(function() {
        document.getElementById('beltSample2').style.marginTop = "50px";
    }, 2100);
    setTimeout(function() {
        document.getElementById('beltSample2').style.marginLeft = "-100px";
    }, 2500);
    setTimeout(function() {
        document.getElementById('beltSample2').style.marginLeft = "-14px";
        document.getElementById('beltSample2').style.marginTop = "0px";
    }, 2900);
    setTimeout(function() {
        document.getElementById('beltSample2').style.marginTop = "50px";
    }, 3300);
    setTimeout(function() {
        document.getElementById('beltSample2').style.marginLeft = "-100px";
    }, 3700);

    setTimeout(function() {
        document.getElementById('beltSample2').style.marginLeft = "-14px";
        document.getElementById('beltSample2').style.marginTop = "0px";
        document.getElementById("note1").style.visibility = "visible";
        document.getElementById("ok").onclick = function() {
            setTimeout(function() {
                document.getElementById('nextButton').style.visibility = "visible";
            }, 1000);
            document.getElementById("note1").style.display = "none";
        }
    }, 4500);
}

function step3() {
    myStopFunction();
    setTimeout(function() {
        document.getElementById('beltSample3').style.visibility = "visible";
        document.getElementById('beltSample3').style.marginLeft = "-14px";
        document.getElementById('beltSample3').style.marginTop = "50px";
    }, 300);

    setTimeout(function() {
        document.getElementById('beltSample3').style.marginLeft = "-100px";
    }, 1300);
    setTimeout(function() {
        document.getElementById('beltSample3').style.marginLeft = "-14px";
        document.getElementById('beltSample3').style.marginTop = "0px";
    }, 1700);
    setTimeout(function() {
        document.getElementById('beltSample3').style.marginTop = "50px";
    }, 2100);
    setTimeout(function() {
        document.getElementById('beltSample3').style.marginLeft = "-100px";
    }, 2500);
    setTimeout(function() {
        document.getElementById('beltSample3').style.marginLeft = "-14px";
        document.getElementById('beltSample3').style.marginTop = "0px";
    }, 2900);
    setTimeout(function() {
        document.getElementById('beltSample3').style.marginTop = "50px";
    }, 3300);
    setTimeout(function() {
        document.getElementById('beltSample3').style.marginLeft = "-100px";
    }, 3700);

    setTimeout(function() {
        document.getElementById('beltSample3').style.marginLeft = "-14px";
        document.getElementById('beltSample3').style.marginTop = "0px";
        validateAnswer(0, 3, "50px", "130px");
    }, 4500);
}

function step4() {
    myStopFunction();
    var rt = 200;
    setTimeout(function() {
        document.getElementById('handBottle').style.left = "-40px";
        document.getElementById('handBottle').style.top = "70px";
    }, 300);
    setTimeout(function() {
        document.getElementById('drop').style.visibility = "visible";
        document.getElementById('drop').style.marginTop = "60px";
        document.getElementById('drop').style.opacity = "0.4";
        document.getElementById('velvetSample').style.opacity = '0';
    }, 1000);
    setTimeout(function() {
        document.getElementById('drop').style.display = "none";
    }, 1400);
    setTimeout(function() {
        document.getElementById('handBottle').style.marginLeft = "-50px";
        document.getElementById('handBottle').style.marginTop = "50px";
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 100px; top: 250px; height: 40px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('handBottle').style.opacity = "0";
        document.getElementById('velvetSample').style.visibility = "visible";
        document.getElementById('velvetSample').style.opacity = "1";
    }, 2300);
    document.getElementById('velvetSample').onclick = function() {
        this.onclick = null;
        myStopFunction();
        setTimeout(function() {
            document.getElementById('velvetSample').style.left = "-65px";
            document.getElementById('velvetSample').style.top = "40px";
        }, 700);
        setTimeout(function() {
            myInt = setInterval(function() {
                animatearrow();
            }, 500);
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 360px; top: 250px; height: 40px; z-index: 105;";
            document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(270deg)";
        }, 1500)
        document.getElementById('velveton').onclick = function() {
            myStopFunction();
            document.getElementById('onoff').innerHTML = "ON";
            this.onclick = null;
            var vs = 1;
            while (vs == 1)
                for (let rn = 0; rn < 8; rn++) {
                    var eid = 'r' + rn;
                    blink(eid, rt);
                    rt += 150;
                    if (rt > 25000) vs = 0;
                }
            setTimeout(function() {
                myInt = setInterval(function() {
                    animatearrow();
                }, 500);
                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 390px; top: 250px; height: 40px; z-index: 105;";
                document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
                // Code for IE9
                document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
                // Standard syntax
                document.getElementById("arrow1").style.transform = "rotate(270deg)";
            }, 3000)
            document.getElementById('velvetoff').onclick = function() {
                myStopFunction();
                this.onclick = null;
                setTimeout(function() {
                    document.getElementById('arrows').style.display = 'none';
                    document.getElementById('onoff').innerHTML = "OFF";
                    document.getElementById('velvetSample').style.marginLeft = "-175px";
                    document.getElementById('velvetSample').style.marginTop = "-80px";
                }, 500);
                setTimeout(function() {
                    document.getElementById('note3').style.visibility = "visible";
                    document.getElementById('ok3').onclick = function() {
                        document.getElementById('note3').style.display = 'none';
                        setTimeout(function() {
                            document.getElementById('nextButton').style.visibility = "visible";
                        }, 1000);
                    }
                }, 1000);
            }
        }
    };
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
        document.getElementById('cap').style.marginTop = "75px";
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
        document.getElementById('handCotton').style.top = "-135px";
        document.getElementById('handCotton').style.left = "-50px";
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
            document.getElementById('cap').style.marginTop = "205px";
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
                document.getElementById('handCotton').style.top = "-100px";
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
                    validateAnswer(1, 0, "50px", "110px");
                }, 2500);
            }
        }
    }
}