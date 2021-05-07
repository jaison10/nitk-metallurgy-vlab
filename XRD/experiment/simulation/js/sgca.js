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
    if (sample) {
        document.getElementById("canvas0.5").style.visibility = "visible";

        // document.getElementById('nextButton').style.visibility = "hidden";
        // if (document.getElementById('solder_alloy1').checked) {
        // document.getElementById('nextButton').style.visibility = "visible";

        // }

        sample = 0;
    } else {

        if (simsubscreennum == 0) {


            // if (document.getElementById('solder_alloy').checked) {
            //     selectedSample = "solder_alloy";



            // } else
            if (document.getElementById('brass').checked) {
                selectedSample = "brass";

                document.getElementById('nextButton').style.visibility = "visible";


            } else if (document.getElementById('solder_alloy1').checked) {
                selectedSample = "solder_alloy1";

                document.getElementById('nextButton').style.visibility = "visible";

            } else if (document.getElementById('solder_alloy2').checked) {
                selectedSample = "solder_alloy2";

                document.getElementById('nextButton').style.visibility = "visible";

            } else {
                selectedSample = "null";
                alert('Select a sample to proceed!');
                simsubscreennum--;
                sample = 0;

            }







        }
        simsubscreennum += 1;
        if (simsubscreennum == 1) {
            //var p3radio = document.getElementById('selectp3');
            //var p12radio = document.getElementById('selectp12');
            //if (p3radio.checked) sampletype = 1;
            //else if (p12radio.checked) sampletype = 2;


            document.getElementById("canvas0.5").style.display = "none";
            document.getElementById('nextButton').style.visibility = "hidden";

        }
        document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
        // document.getElementById('nextButton').style.visibility = "visible";
        magic();
    }
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
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 360px; top: 250px; height: 40px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('samplebelt').onclick = function() {
            this.onclick = null;
            step1();
        };
    }
    if (simsubscreennum == 2) {
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById('nextButton').style.visibility = "hidden";

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
        document.getElementById('nextButton').style.visibility = "hidden";

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

        if (selectedSample == "brass") {


            document.getElementById("reagent").src = "images/afc_bottle.png";

            document.getElementById('pumptext2').innerText = "Etch the specimen with Acidified Ferric Chloride by swabbing for a few seconds. Wash and dry.";
            document.getElementById('10_1').innerText = "Ferric chloride is mixed with water in an one to one ratio to form hydrochloric acid in solution thus enabling acid etching of a given sample. Acidic Ferric Chloride solution is a common etchant for etching stainless steel, Damascus steel, copper alloys, Cu-Al bronze, Cu-Ni.";

        }
        if (selectedSample == "solder_alloy" || selectedSample == "solder_alloy1" || selectedSample == "solder_alloy2") {


            document.getElementById('pumptext2').innerText = "Etch the specimen with Nital 2% reagent by swabbing for a few seconds. Wash and dry.";
            document.getElementById('10_1').innerText = "Nital reagent : Nital is the name given to an oxidizing etchant solution composed of aqueous nitric acid and ethanol. ";

        }


        document.getElementById("note2").style.visibility = "visible";
        document.getElementById("ok2").onclick = function() {
            this.onclick = null;
            document.getElementById("note2").style.display = "none";
            myInt = setInterval(function() {
                animatearrow();
            }, 500);
            if (selectedSample == 'solder_alloy1' || selectedSample == 'solder_alloy2') {
                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 60px; top: 290px; height: 40px; z-index: 10;";

            } else {
                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 60px; top: 310px; height: 40px; z-index: 10;";

            }

            document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(180deg)";
            document.getElementById('reagent').onclick = function() {
                this.onclick = null;
                step6();
            };

        }
    }
    if (simsubscreennum == 6) {
        var level = 1;
        var type = sampletype;
        var deg = 0;
        // if (type != 1) document.getElementById('preview').src = 'images/microscope/p12_sq50x.jpg';
        document.getElementById('nextButton').style.visibility = "hidden";

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

            document.getElementById('n1').style.opacity = '1';
        }, 4500)
        setTimeout(function() {
            myInt = setInterval(function() {
                animatearrow();
            }, 500);
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 30px; top: 105px; height: 40px; z-index: 10;";
            document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(180deg)";
        }, 5500)
        if (selectedSample == "brass") {

            document.getElementById("lsw").src = "images/brass_micro_reading.png";
            document.getElementById("lsw").style.left = "55px";
            document.getElementById("lsw").style.top = "76px";
            document.getElementById('n1').innerText = "Brass";

            document.getElementById('n1').style.top = "259px";
            document.getElementById('n1').style.left = "235px";
            document.getElementById("preview").src = "images/Brass_500x.png";
            document.getElementById("vsc").style.left = "110px";
            document.getElementById('lup').onclick = function() {
                myStopFunction();
                deg -= 120;

                document.getElementById("lsw").style.WebkitTransform = "rotate(" + deg + "deg)";
                document.getElementById("lsw").style.msTransform = "rotate(" + deg + "deg)";
                document.getElementById("lsw").style.transform = "rotate(" + deg + "deg)";
                document.getElementById('preview').style.WebkitFilter = "blur(10px)";
                // document.getElementById('preview2').style.WebkitFilter = "blur(0px)";
                //if (type == 1) {
                if (level == 1)
                    setTimeout(function() {
                        if (selectedSample == "brass") {
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";

                            document.getElementById('preview').src = 'images/Brass_500x.png';
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        }


                        level++;
                    }, 500);
                else if (level == 2)
                    setTimeout(function() {


                        if (selectedSample == "brass") {
                            document.getElementById('preview').src = 'images/Brass_1000x.png';
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        }

                        level++;
                    }, 500);
                else
                    setTimeout(function() {


                        if (selectedSample == "brass") {
                            document.getElementById('preview').src = 'images/Brass_50x.png';
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        }

                        level = 1;
                    }, 500);

            }
            document.getElementById('ldn').onclick = function() {
                myStopFunction();
                deg += 120;
                document.getElementById("lsw").style.WebkitTransform = "rotate(" + deg + "deg)";
                document.getElementById("lsw").style.msTransform = "rotate(" + deg + "deg)";
                document.getElementById("lsw").style.transform = "rotate(" + deg + "deg)";
                document.getElementById('preview').style.WebkitFilter = "blur(10px)";
                //if (type == 1) {
                if (level == 1)
                    setTimeout(function() {
                        if (selectedSample == "brass") {
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";

                            document.getElementById('preview').src = 'images/Brass_1000x.png';
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        }



                        level = 3;
                    }, 500);
                else if (level == 2)
                    setTimeout(function() {
                        if (selectedSample == "brass") {
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";

                            document.getElementById('preview').src = 'images/Brass_50x.png';
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        }

                        level--;
                    }, 500);
                else
                    setTimeout(function() {
                        if (selectedSample == "brass") {
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";

                            document.getElementById('preview').src = 'images/Brass_500x.png';
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        }

                        level--;
                    }, 500);

            }

        }
        if (selectedSample == "solder_alloy1" || selectedSample == "solder_alloy2") {

            if (selectedSample == "solder_alloy1") {
                document.getElementById("preview").src = "./images/PbSnX2_100x.png";
                document.getElementById('n1').innerText = "X2 : Bearing metal";


            } else {
                document.getElementById("preview").src = "./images/PbSnX3_100x.png";
                document.getElementById('n1').innerText = "X3 : Lead Base Bearing metal";
                document.getElementById('n1').style.left = "212px";
                document.getElementById('n1').style.fontSize = "10px";


            }
            document.getElementById("lsw").src = "./images/pbsn_reading.png";
            document.getElementById("vsc").style = "transition: all 0.5s ease 0s; position: absolute; left: 104px; top: 81px; height: 75px; width: 75px; border-radius: 50%; background-color: teal; opacity: 0;";

            document.getElementById('lup').onclick = function() {
                myStopFunction();
                deg -= 180;

                document.getElementById("lsw").style.WebkitTransform = "rotate(" + deg + "deg)";
                document.getElementById("lsw").style.msTransform = "rotate(" + deg + "deg)";
                document.getElementById("lsw").style.transform = "rotate(" + deg + "deg)";
                document.getElementById('preview').style.WebkitFilter = "blur(10px)";
                // document.getElementById('preview2').style.WebkitFilter = "blur(0px)";
                //if (type == 1) {
                if (level == 1)
                    setTimeout(function() {

                        if (selectedSample == 'solder_alloy1') {
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                            document.getElementById('preview').src = './images/PbSnX2_500x.png';
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        }
                        if (selectedSample == 'solder_alloy2') {
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                            document.getElementById('preview').src = './images/PbSnX3_500x.png';
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";

                        }


                        level++;
                    }, 500);
                if (level == 2)
                    setTimeout(function() {
                        if (selectedSample == 'solder_alloy1') {
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                            document.getElementById('preview').src = './images/PbSnX2_100x.png';
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        }
                        if (selectedSample == 'solder_alloy2') {
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                            document.getElementById('preview').src = './images/PbSnX3_100x.png';
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        }


                        level = 1;

                    }, 500);



            }
            document.getElementById('ldn').onclick = function() {
                myStopFunction();
                deg += 180;
                document.getElementById("lsw").style.WebkitTransform = "rotate(" + deg + "deg)";
                document.getElementById("lsw").style.msTransform = "rotate(" + deg + "deg)";
                document.getElementById("lsw").style.transform = "rotate(" + deg + "deg)";
                document.getElementById('preview').style.WebkitFilter = "blur(10px)";

                if (level == 1)
                    setTimeout(function() {

                        if (selectedSample == 'solder_alloy1') {
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                            document.getElementById('preview').src = './images/PbSnX2_500x.png';
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        }
                        if (selectedSample == 'solder_alloy2') {
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                            document.getElementById('preview').src = './images/PbSnX3_500x.png';
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";

                        }

                        level = 2;
                    }, 500);
                if (level == 2)
                    setTimeout(function() {

                        if (selectedSample == 'solder_alloy1') {
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                            document.getElementById('preview').src = './images/PbSnX2_100x.png';
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                        }
                        if (selectedSample == 'solder_alloy2') {
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                            document.getElementById('preview').src = './images/PbSnX3_100x.png';
                            document.getElementById('preview').style.WebkitFilter = "blur(0px)";

                        }

                        level--;
                    }, 500);


            }

        }


        setTimeout(function() {
            myStopFunction();
            if (selectedSample == "solder_alloy1" || selectedSample == "solder_alloy2") {
                validateAnswer(2, 1, "300px", "420px");
            }
            if (selectedSample == "brass") {
                validateAnswer(3, 1, "300px", "420px");

            }

        }, 8000);
    }
    if (simsubscreennum == 7) {
        //var type = sampletype;
        document.getElementById('nextButton').style.visibility = "hidden";

        var slider = document.getElementById("mag");
        var output = document.getElementById("final");
        var output1 = document.getElementById("final1");
        var output2 = document.getElementById("final2");
        var contain = document.getElementById("magcon");
        var x = document.getElementById("magx");
        if (selectedSample == 'solder_alloy1') {
            document.getElementById('gcitext').style.visibility = "visible";
            document.getElementById('gcitext1').style.visibility = "hidden";
            document.getElementById('mstext').style.visibility = "hidden";
            document.getElementById('final').style.visibility = "visible";
            output.src = "./images/PbSnX2_100x.png";


        }


        if (selectedSample == 'solder_alloy2') {

            document.getElementById('mstext').style.visibility = "hidden";
            document.getElementById('gcitext').style.visibility = "hidden";
            document.getElementById('gcitext1').style.visibility = "visible";
            document.getElementById('final1').style.visibility = "visible";
            output1.src = "./images/PbSnX3_100x.png";
        }
        if (selectedSample == 'brass') {
            document.getElementById('mstext').style.visibility = "visible";
            document.getElementById('gcitext').style.visibility = "hidden";
            document.getElementById('gcitext1').style.visibility = "hidden";
            document.getElementById('final2').style.visibility = "visible";
            output2.src = "./images/Brass_50x.png";



        }
        //document.getElementById('p3').onclick=function() {
        //if (type == 1)
        /*return;
			else*/
        //{
        //document.getElementById('p3text').style.visibility = "visible";
        //document.getElementById('p12text').style.visibility="hidden";
        /*if(slider.value==1)*/


        //else if(slider.value==2) output.src="images/microscope/p3_100x.jpg";
        //else output.src="images/microscope/p3_500x.jpg";
        //type=1;
        //}
        //};
        //document.getElementById('p12').onclick=function() { 
        //if (type == 2)
        /*return;
			else*/
        //{
        //document.getElementById('p12text').style.visibility = "visible";
        //document.getElementById('p3text').style.visibility="hidden";
        /*if(slider.value==1)*/
        //output.src = "images/microscope/p12_50x.jpg";
        //else if(slider.value==2) output.src="images/microscope/p12_100x.jpg";
        //else output.src="images/microscope/p12_500x.jpg";
        //type=2;
        //}
        //};
        if (selectedSample == 'solder_alloy1' || selectedSample == 'solder_alloy2') {
            document.getElementById('mag').max = "2";
            contain.title = "100x";
            x.innerHTML = "100x";
            slider.oninput = function() {

                //if (type == 1) {
                if (this.value == 1) {
                    output.src = "images/PbSnX2_100x.png";
                    output1.src = "images/PbSnX3_100x.png";
                    // output2.src = "images/Brass_50x.png";
                    contain.title = "100x";
                    x.innerHTML = "100x";
                } else {
                    output.src = "images/PbSnX2_500x.png";
                    output1.src = "images/PbSnX3_500x.png";
                    // output2.src = "images/Brass_500x.png";

                    contain.title = "500x";
                    x.innerHTML = "500x";
                }

                // } else {
                //     output.src = "images/PbSnX2_500x.png";
                //     output1.src = "images/PbSnX3_500x.png";
                //     output2.src = "images/Brass_1000x.png";

                //     contain.title = "1000x";
                //     x.innerHTML = "1000x";
                // }
            };
        }
        if (selectedSample == 'brass') {
            contain.title = "50x";
            x.innerHTML = "50x";
            slider.oninput = function() {
                //if (type == 1) {

                if (this.value == 1) {
                    // output.src = "images/PbSnX2_100x.png";
                    // output1.src = "images/PbSnX3_100x.png";
                    output2.src = "images/Brass_50x.png";
                    contain.title = "50x";
                    x.innerHTML = "50x";
                } else if (this.value == 2) {
                    // output.src = "images/PbSnX2_100x.png";
                    // output1.src = "images/PbSnX3_100x.png";
                    output2.src = "images/Brass_500x.png";

                    contain.title = "500x";
                    x.innerHTML = "500x";
                } else {
                    // output.src = "images/PbSnX2_500x.png";
                    // output1.src = "images/PbSnX3_500x.png";
                    output2.src = "images/Brass_1000x.png";

                    contain.title = "1000x";
                    x.innerHTML = "1000x";
                }
            };
        }
        /*}
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
        }*/

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
        validateAnswer(0, 1, "50px", "130px");
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
    }
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