function navNext() {
    if(simsubscreennum<11||simsubscreennum==13)document.getElementById('canvas' + (simsubscreennum)).style.display = "none";
    for (temp = 0; temp <= 13; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }
    simsubscreennum += 1;
    document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
    document.getElementById('nextButton').style.visibility = "hidden";
    magic();    
}

var flag = 0;
var repeat = 0;
var a;
var firsttime = true;
var i = 0;
var lever = 0;
var lever2 = 0;
var fv1, fv2, fv3;

var ca;
var questions = ["Why is the sample austenitized for 30 minutes?",
    "Which medium gives the most severe quench?"
];

var options2 = [
    ["Uniform austenitization",
        "It is the time taken for austenitizing",
        "To heat at high temperature",
        "All of the above"
    ],
    ["Oil", "Ice Brine", "Water", "Air"]
];

function validateAnswer(qn, ans, left, top) {
    $("#answer").empty();
    document.getElementById("a").innerHTML = "";
    document.getElementById("questDiv").style = "z-index:200;position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" + left + ";top:" + top + ";";
    if (qn == 1) document.getElementById('questDiv').style.width = "250px";
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

function fdopen(ol) {
    var door=ol?document.getElementById('fdr2'):document.getElementById('fdr');
    setTimeout(function(){
        door.style.WebkitTransform='perspective(700px) rotate3d(0,1,0,-125deg)';
        door.style.msTransform='perspective(700px) rotate3d(0,1,0,-125deg)';
        door.style.transform='perspective(700px) rotate3d(0,1,0,-125deg)';
    },400);
}

function fdclose(ol) {
    var door=ol?document.getElementById('fdr2'):document.getElementById('fdr');
    setTimeout(function(){
        door.style.WebkitTransform='perspective(700px) rotate3d(0,1,0,0deg)';
        door.style.msTransform='perspective(700px) rotate3d(0,1,0,0deg)';
        door.style.transform='perspective(700px) rotate3d(0,1,0,0deg)';
    },400);
}

function showArrow(top,left,deg){
    myInt = setInterval(function(){animatearrow();},500);
    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left:"+left+"px; top:"+top+"px; height: 40px; z-index: 10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate("+deg+"deg)";
    document.getElementById("arrow1").style.msTransform = "rotate("+deg+"deg)";
    document.getElementById("arrow1").style.transform = "rotate("+deg+"deg)";
}

function loadSamples(){
    showArrow(195,340,90);
    document.getElementById('fs5').onclick=function(){
        var tong=document.getElementById('tong');
        this.onclick=null;
        myStopFunction();
        tong.style.opacity='1';
        loadIn(5);
        setTimeout(function(){
            showArrow(195,290,90);
            document.getElementById('fs4').onclick=function(){
                this.onclick=null;
                myStopFunction();
                loadIn(4);
                setTimeout(function(){
                    showArrow(195,240,90);
                    document.getElementById('fs3').onclick=function(){
                        this.onclick=null;
                        myStopFunction();
                        loadIn(3);
                        setTimeout(function(){
                            showArrow(195,190,90);
                            document.getElementById('fs2').onclick=function(){
                                this.onclick=null;
                                myStopFunction();
                                loadIn(2);
                                setTimeout(function(){
                                    showArrow(195,140,90);
                                    document.getElementById('fs1').onclick=function(){
                                        this.onclick=null;
                                        myStopFunction();
                                        loadIn(1);
                                        setTimeout(function(){
                                            tong.style.opacity='0';
                                            showArrow(350,20,180);
                                            document.getElementById('fdr').onclick=function(){
                                                this.onclick=null;
                                                var fclock=document.getElementById('fclock');
                                                var fneedle=document.getElementById('fneedle');
                                                myStopFunction();
                                                fdclose(0);
                                                fclock.style.visibility='visible';
                                                fneedle.style.visibility='visible';
                                                setTimeout(function(){
                                                    fneedle.style.transform="rotate(180deg)";
                                                    fneedle.style.msTransform="rotate(180deg";
                                                    fneedle.style.MozTransform='rotate(180deg)';
                                                    fneedle.style.WebkitTransform="rotate(180deg)";
                                                },2000);
                                                setTimeout(function(){
                                                    showArrow(225,80,-90);
                                                    document.getElementById('fsw').onclick=function(){
                                                        myStopFunction();
                                                        document.getElementById('fon').style.left='37px';
                                                        document.getElementById('ftmp').style.opacity='0';
                                                        setTimeout(function(){document.getElementById('nextButton').style.visibility='visible';},2000);
                                                    }
                                                },8000);
                                            }
                                        },3500);
                                    }
                                },3500);
                            }
                        },3500);
                    }
                },3500);
            }
        },3500);
    }
}

function loadIn(fs){
    var tong=document.getElementById('tong');
    var s=document.getElementById('fs'+fs);
    var il, fl, ft;
    var it=85;
    if(fs==5){il=312; fl=123; ft=280;}
    else if(fs==4){il=262; fl=143; ft=280;}
    else if(fs==3){il=212; fl=163; ft=280;}
    else if(fs==2){il=162; fl=133; ft=300;}
    else {il=112; fl=153; ft=300;}
    setTimeout(function(){
        tong.style.left=il+'px';
        tong.style.top=it+'px';
    },500);
    setTimeout(function(){
        tong.style.left=fl+'px';
        tong.style.top=ft+'px';
        s.style.left=(fl-12)+'px';
        s.style.top=(ft+15)+'px';
    },1600);
    setTimeout(function(){
        tong.style.left='330px';
        s.height=20;
        s.style.top=(ft+20)+'px';
    },2700);
}

function cooldown(){
    document.getElementById('ctmp').style.opacity='1';
    var fhs=document.getElementById('fhs2');
    fhs.style.transition='all 6s linear';
    fhs.style.WebkitFilter='grayscale(90%)';
    fhs.style.filter='grayscale(90%)';
    fhs=document.getElementById('fhs1');
    fhs.style.WebkitFilter='grayscale(50%)';
    fhs.style.filter='grayscale(50%)';
    var tong2=document.getElementById('tong2');
    var temp=730;
    var t=300;
    while(temp>390){cool(t,temp);temp-=10;t+=250;}
    setTimeout(function(){
        showArrow(350,260,0);
        document.getElementById('fdr2').onclick=function(){
            document.getElementById('3_2').style.opacity='0';
            myStopFunction();
            this.onclick=null;
            fdopen(1);
            setTimeout(function(){
                fhs.height=26; fhs.style.top='295px';
                showArrow(380,155,90);
                fhs.onclick=function(){
                    myStopFunction();
                    this.onclick=null;
                    tong2.style.top='278px'; tong2.style.left='122px'; 
                    setTimeout(function(){tong2.style.top='108px'; tong2.style.left='187px'; fhs.style.left='176px'; fhs.style.top='125px';},1200);
                    setTimeout(function(){tong2.style.top='200px'; tong2.style.left='345px';},2400);
                    setTimeout(function(){
                        tong2.style.opacity='0'; fhs.style.transition='all 3s linear'; 
                        fhs.style.filter='grayscale(90%)'; fhs.style.WebkitFilter='grayscale(90%)';
                    },3400);
                    setTimeout(function(){
                        document.getElementById("note0").style.visibility = "visible";
                        document.getElementById("ok0").onclick = function() {
                            document.getElementById("note0").style.visibility = "hidden";
                            this.onclick = null;
                            validateAnswer(0, 0, "400px", "300px");
                        }
                    },5000);
                }
            },2000)
        };
    },t+200)
}

function cool(t,temp){
    setTimeout(function(){document.getElementById('ct').innerHTML=temp+'⁰C';},t);
}

//-------------------------------------function magic starts here----------------------------------------------------
function magic() {
    if (simsubscreennum == 1) {
        setTimeout(function(){
            document.getElementById('s1').style='position:absolute; top:180px; left:-15px; transition-duration:0.7s';
            document.getElementById('s2').style='position:absolute; top:15px; left:350px; transition-duration:0.7s';
            document.getElementById('s3').style='position:absolute; top:105px; left:350px; transition-duration:0.7s';
            document.getElementById('s4').style='position:absolute; top:195px; left:350px; transition-duration:0.7s';
            document.getElementById('s5').style='position:absolute; top:285px; left:350px; transition-duration:0.7s';
            document.getElementById('s6').style='position:absolute; top:375px; left:350px; transition-duration:0.7s';
        },500);
        setTimeout(function(){document.getElementById('slabel').style.opacity='1';},1400);
        setTimeout(function(){document.getElementById('nextButton').style.visibility='visible';},4400);
    }

    if (simsubscreennum == 2) {
        showArrow(225,80,-90);
        document.getElementById('fsw').onclick=function(){
            this.onclick=null;
            myStopFunction();
            document.getElementById('fon').style.left='51px';
            document.getElementById('ftmp').style.opacity='1';
            setTimeout(function(){
                showArrow(225,210,-90);
                document.getElementById('2_1').style.opacity='1';
                document.getElementById('fdn').onclick=function(){
                    ftemp-=10;
                    document.getElementById('ftmp').innerHTML=ftemp+'⁰C';
                }
                document.getElementById('fup').onclick=function(){
                    myStopFunction();
                    if(ftemp!=910){
                        ftemp+=10;
                        document.getElementById('ftmp').innerHTML=ftemp+'⁰C';
                    }
                    if(ftemp==910){
                        this.onclick=null;
                        document.getElementById('fdn').onclick=null;
                        document.getElementById('2_1').style.opacity='0';
                        setTimeout(function(){
                            showArrow(350,260,0);
                            document.getElementById('fdr').onclick=function(){
                                myStopFunction();
                                fdopen(0);
                                setTimeout(function(){loadSamples();} ,1200);
                            }
                        },500);
                    } 
                }
            },1200);            
        }
    }

    if (simsubscreennum == 3) {
        showArrow(350,260,0);
        var tong2=document.getElementById('tong2');
        document.getElementById('fdr2').onclick=function(){
            this.onclick=null;
            myStopFunction();
            fdopen(1);
            var fhs=document.getElementById('fhs5');
            setTimeout(function(){tong2.style.opacity='1';},2000);
            setTimeout(function(){ 
                document.getElementById('ob').style.opacity=1;
                document.getElementById('obl').style.opacity=1;
            },3000);
            setTimeout(function(){
                fhs.height=26; fhs.style.top='320px';
                showArrow(410,180,90);
                fhs.onclick=function(){         this.onclick=null;
                    myStopFunction();
                    tong2.style.top='303px'; tong2.style.left='152px';  
                    setTimeout(function(){tong2.style.top='203px'; tong2.style.left='342px'; fhs.style.left='331px'; fhs.style.top='220px';},1200);
                    setTimeout(function(){fhs.style.transition='margin-top 0.5s ease-in'; fhs.style.marginTop='128px';},2400);
                    setTimeout(function(){
                        fhs.style.display='none';
                        var ob = document.getElementById('ob'); var obl=document.getElementById('obl');
                        ob.style.top='50px'; ob.style.left='600px'; obl.style.top='110px'; obl.style.left='645px';
                    },2925);
                    setTimeout(function(){
                        fhs=document.getElementById('fhs4');     
                        document.getElementById('wb').style.opacity=1;
                        document.getElementById('wbl').style.opacity=1;
                    },3000);
                    setTimeout(function(){
                        fhs.height=26; fhs.style.top='320px';
                        showArrow(410,160,90);
                        fhs.onclick=function(){             this.onclick=null;
                            myStopFunction();
                            tong2.style.top='303px'; tong2.style.left='132px';  
                            setTimeout(function(){tong2.style.top='203px'; tong2.style.left='342px'; fhs.style.left='331px'; fhs.style.top='220px';},1200);
                            setTimeout(function(){fhs.style.transition='margin-top 0.5s ease-in'; fhs.style.marginTop='128px';},2400);
                            setTimeout(function(){
                                fhs.style.display='none';
                                var wb = document.getElementById('wb'); var wbl=document.getElementById('wbl');
                                wb.style.top='50px'; wb.style.left='450px'; wbl.style.top='110px'; wbl.style.left='485px';
                            },2925);
                            setTimeout(function(){
                                fhs=document.getElementById('fhs3');    
                                document.getElementById('ib').style.opacity=1;
                                document.getElementById('ibl').style.opacity=1;
                            },3000);
                            setTimeout(function(){
                                fhs.height=26; fhs.style.top='295px';
                                showArrow(380,190,90);
                                fhs.onclick=function(){             this.onclick=null;
                                    myStopFunction();
                                    tong2.style.top='278px'; tong2.style.left='162px'; 
                                    setTimeout(function(){tong2.style.top='203px'; tong2.style.left='342px'; fhs.style.left='331px'; fhs.style.top='220px';},1200);
                                    setTimeout(function(){fhs.style.transition='margin-top 0.5s ease-in'; fhs.style.marginTop='128px';},2400);
                                    setTimeout(function(){
                                        fhs.style.display='none';
                                        var ib = document.getElementById('ib'); var ibl=document.getElementById('ibl');
                                        ib.style.top='50px'; ib.style.left='300px'; ibl.style.top='110px'; ibl.style.left='335px';
                                    },2925);
                                    setTimeout(function(){
                                        fhs=document.getElementById('fhs2');
                                        fhs.height=26; fhs.style.top='295px';
                                        document.getElementById('plate').style.opacity='1';
                                        document.getElementById('3_1').style.opacity='1';
                                        showArrow(380,170,90);
                                        fhs.onclick=function(){         this.onclick=null;
                                            myStopFunction();
                                            tong2.style.top='278px'; tong2.style.left='142px'; 
                                            setTimeout(function(){tong2.style.top='108px'; tong2.style.left='137px'; fhs.style.left='126px'; fhs.style.top='125px';},1200);
                                            setTimeout(function(){tong2.style.top='200px'; tong2.style.left='345px';},2400);
                                            setTimeout(function(){
                                                showArrow(350,20,180);                                                
                                                document.getElementById('3_2').style.opacity='1';
                                                document.getElementById('fdr2').onclick=function(){
                                                    this.onclick=null;
                                                    myStopFunction();
                                                    fdclose(1);
                                                    setTimeout(function(){cooldown()},2000);
                                                }
                                            },3500);
                                        }
                                    },3000);
                                }
                            },4200);
                        }
                    },4200);
                }
            },4200);
        }
    }

    if (simsubscreennum == 4) {
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
            step4();
        };
    }
    if (simsubscreennum == 5) {
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
            step5();
        };
    }
    if (simsubscreennum == 6) {
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
            step6();
        };
    }
    if (simsubscreennum == 7) {
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
            step7();
        };
    }

    if (simsubscreennum == 8) {
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
                step8();
            }
        };
    }
    if (simsubscreennum == 9) {
        var level = 1;
        var type = 1;
        var deg = -120;
        var img = '';
        document.getElementById("lsw").style.WebkitTransform = "rotate(-120deg)";
        document.getElementById("lsw").style.msTransform = "rotate(-120deg)";
        document.getElementById("lsw").style.transform = "rotate(-120deg)";
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
            document.getElementById('lup').style.opacity = '0.6';
            document.getElementById('ldn').style.opacity = '0.6';
        }, 3500);
        setTimeout(function() {
            document.getElementById('scz').style.opacity = '1';
            document.getElementById('preview').style.opacity = '1';
            document.getElementById('choice1').style.visibility='visible';
            document.getElementById('choice1').style.opacity='1';
        }, 4500);
        setTimeout(function() {
            myInt = setInterval(function() {
                animatearrow();
            }, 500);
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 550px; top: 420px; height: 40px; z-index: 10;";
        }, 5500);
        document.getElementById('lup').onclick = function() {
            document.getElementById('ldn').style.visibility='visible';
            document.getElementById('ldn').style.display='block';
            this.style.display='none';
            myStopFunction();
            deg -= 120;
            document.getElementById("lsw").style.WebkitTransform = "rotate(" + deg + "deg)";
            document.getElementById("lsw").style.msTransform = "rotate(" + deg + "deg)";
            document.getElementById("lsw").style.transform = "rotate(" + deg + "deg)";
            document.getElementById('preview').style.WebkitFilter = "blur(10px)";
            if (type == 1) img='an_500x.jpg';
            else if (type ==2) img='no_500x.jpg';
            else if (type ==3) img='ic_500x.jpg';
            else if (type ==4) img='oi_500x.jpg';
            else if (type ==5) img='wa_500x.jpg';
            setTimeout(function() {
                document.getElementById('preview').src = 'images/microscope/'+img;
                document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                level++;
            }, 500);
        }
        document.getElementById('ldn').onclick = function() {
            myStopFunction();
            document.getElementById('lup').style.display='block';
            this.style.display='none';
            deg += 120;
            document.getElementById("lsw").style.WebkitTransform = "rotate(" + deg + "deg)";
            document.getElementById("lsw").style.msTransform = "rotate(" + deg + "deg)";
            document.getElementById("lsw").style.transform = "rotate(" + deg + "deg)";
            document.getElementById('preview').style.WebkitFilter = "blur(10px)";
            if (type == 1) img='an_100x.jpg';
            else if (type ==2) img='no_100x.jpg';
            else if (type ==3) img='ic_100x.jpg';
            else if (type ==4) img='oi_100x.jpg';
            else if (type ==5) img='wa_100x.jpg';
            setTimeout(function() {
                document.getElementById('preview').src = 'images/microscope/'+img;
                document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                level--;
            }, 500);         
        }
        document.getElementById('ms1').onclick=function(){
            if(type!=1){
                document.getElementById('preview').style.WebkitFilter = "blur(10px)";
                img=(level==1)?'an_100x.jpg':'an_500x.jpg';
                document.getElementById('ssw1').style.top='10px';
                document.getElementById('ssw2').style.top='10px';
                setTimeout(function() {
                    document.getElementById('preview').src = 'images/microscope/'+img;
                    document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                }, 500);
                type=1;
            }
        }
        document.getElementById('ms2').onclick=function(){
            if(type!=2){
                document.getElementById('preview').style.WebkitFilter = "blur(10px)";
                img=(level==1)?'no_100x.jpg':'no_500x.jpg';
                document.getElementById('ssw1').style.top='37px';
                document.getElementById('ssw2').style.top='37px';
                setTimeout(function() {
                    document.getElementById('preview').src = 'images/microscope/'+img;
                    document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                }, 500);
                type=2
            }            
        }
        document.getElementById('ms3').onclick=function(){
            if(type!=3) {
                document.getElementById('preview').style.WebkitFilter = "blur(10px)";
                img=(level==1)?'ic_100x.jpg':'ic_500x.jpg';
                document.getElementById('ssw1').style.top='64px';
                document.getElementById('ssw2').style.top='64px';
                setTimeout(function() {
                    document.getElementById('preview').src = 'images/microscope/'+img;
                    document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                }, 500);
                type=3;    
            }            
        }
        document.getElementById('ms4').onclick=function(){
            if(type!=4) {
                document.getElementById('preview').style.WebkitFilter = "blur(10px)";
                img=(level==1)?'oi_100x.jpg':'oi_500x.jpg';
                document.getElementById('ssw1').style.top='91px';
                document.getElementById('ssw2').style.top='91px';
                setTimeout(function() {
                    document.getElementById('preview').src = 'images/microscope/'+img;
                    document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                }, 500);
                type=4;
            }
        }
        document.getElementById('ms5').onclick=function(){
            if(type!=5) {
                document.getElementById('preview').style.WebkitFilter = "blur(10px)";
                img=(level==1)?'wa_100x.jpg':'wa_500x.jpg';
                document.getElementById('ssw1').style.top='118px';
                document.getElementById('ssw2').style.top='118px';
                setTimeout(function() {
                    document.getElementById('preview').src = 'images/microscope/'+img;
                    document.getElementById('preview').style.WebkitFilter = "blur(0px)";
                }, 500);
                type=5;
            }
        }
        setTimeout(function() {
            myStopFunction();
            validateAnswer(1, 1, "530px", "375px");
        }, 15000)
    }

    else if (simsubscreennum == 10) {
        setTimeout(function(){document.getElementById('nextButton').style.visibility = "visible";},4000)
    }

    else if (simsubscreennum == 11) {
        flag=5;
        repeat++;
        document.getElementById('p2-1').style.visibility = "hidden";
        //document.getElementById('trial').style = "visibility:visible ;left: 700px; top: 110px;position: absolute;font-weight: bold;text-transform: uppercase;";
        document.getElementById('trial').innerHTML = "Trial : " + repeat;
        if (repeat == 2) {
            myStopFunction();
            document.getElementById('2-1').style.visibility = "visible";
            document.getElementById('2-21').style.visibility = "visible";
            document.getElementById('2-3').style.visibility = "visible";
            document.getElementById('2-101').style.visibility = "visible";
        }
        if (flag == 5) {
            document.getElementById('2ms').style.visibility = "visible";
            document.getElementById('2-1n2').style.visibility = "visible";
        }
        showArrow(440,350,90);
        document.getElementById('2ms').onclick=function(){
            myStopFunction();
            this.onclick=null;
            this.style.left='408px';
            this.style.top='262.5px';
            setTimeout(function(){
                document.getElementById('p2-1').style.visibility = "visible";
                step11();
            },1000);
        }
    }

    else if (simsubscreennum == 12) {
        repeat++;
        refresh();
        document.getElementById('2-4').style.visibility = "hidden";
        document.getElementById('2-101').style.visibility = "hidden";
        document.getElementById('2-102').style.visibility = "hidden";
        document.getElementById('2-1n').style.visibility = "hidden";
        document.getElementById('2-1n2').style.visibility = "hidden";
        document.getElementById('2-2').style.visibility = "hidden";
        document.getElementById('2ci').style.visibility = "hidden";
        document.getElementById('2br').style.visibility = "hidden";
        document.getElementById('2ms').style.visibility = "hidden";
        document.getElementById('2al').style.visibility = "hidden";
        document.getElementById('3-5').style.visibility = "visible";
        // document.getElementById('3-31').style.visibility="visible";
        if (repeat == 1) {
            if (flag == 5) {
                document.getElementById('3ms').style.visibility = "visible";
                document.getElementById('3-1n2').style.visibility = "visible";
            }
        }
        if (repeat == 2) {
            if (flag == 5) {
                document.getElementById('3ms').style.visibility = "visible";
                document.getElementById('3-1n21').style.visibility = "visible";
            }
        }
        setTimeout(function() {
            myInt = setInterval(function() {
                animatearrow();
            }, 500);
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 590px; top:304px; height: 20px; z-index: 10;";
            document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(180deg)";
            document.getElementById('3-3').onclick = function() {
                step12();
            }
        }, 500);
    }
    else if (simsubscreennum == 13) {
        refresh();
        document.getElementById('status').style.visibility = "hidden";
        document.getElementById('status2').style.visibility = "hidden";
        document.getElementById('2-21').style.visibility = "hidden";
        document.getElementById('3-5').style.visibility = "hidden";
        // document.getElementById('3-6').style.visibility="hidden";
        document.getElementById('2-1').style.visibility = "hidden";
        document.getElementById('3-1').style.visibility = "hidden";
        document.getElementById('3-1n').style.visibility = "hidden";
        document.getElementById('3-1n2').style.visibility = "hidden";
        document.getElementById('3-1n1').style.visibility = "hidden";
        document.getElementById('3-1n21').style.visibility = "hidden";
        document.getElementById('3ci').style.visibility = "hidden";
        document.getElementById('3br').style.visibility = "hidden";
        document.getElementById('3ms').style.visibility = "hidden";
        document.getElementById('3al').style.visibility = "hidden";
        document.getElementById('nextButton').style.visibility = "visible";
        /*if (flag == 5) {
            document.getElementById('2').innerHTML = "150";
            document.getElementById('3').innerHTML = "C";
        }
        if (flag == 5) {
            document.getElementById('1').innerHTML = "Spring Steel";
            // if(repeat==1)
            // {
            // document.getElementById('4').innerHTML=ss1;
            // }
            // else if(repeat==2)
            // {
            // document.getElementById('4').innerHTML=ss2;
            // }
        }*/
        if (repeat == 1) {
            //fv1 = parseInt(degrees / 3.6);
            // document.getElementById('4').innerHTML=fv1.toFixed(2);
            //document.getElementById('4').innerHTML = parseInt(degrees / 3.6);
        }
        if (repeat == 2) {
            //document.getElementById('66').style.visibility = "visible";
            //fv2 = parseInt(degrees2 / 3.6);
            // document.getElementById('4').innerHTML=fv2.toFixed(2);
            //document.getElementById('4').innerHTML = parseInt(degrees2 / 3.6);
        }
        //fv3 = (fv2).toFixed(2);
        if (repeat == 2) {
            setTimeout(function() {
                //document.getElementById('tab').style.visibility = "hidden";
                //document.getElementById('tab2').style.visibility = "visible";
                document.getElementById('trial').style.visibility = "hidden";
                /*if (flag == 5) {
                    document.getElementById('22').innerHTML = "150";
                    document.getElementById('33').innerHTML = "C";
                }
                if (flag == 5) {
                    document.getElementById('11').innerHTML = "Spring Steel";
                }
                document.getElementById('44').innerHTML = fv1;
                document.getElementById('55').innerHTML = fv2;
                document.getElementById('status3').style.visibility = "visible";
                document.getElementById('status4').style.visibility = "visible";
                document.getElementById('status4').innerHTML = fv3;*/
            }, 750);
            setTimeout(function(){document.getElementById('nextButton').style.visibility = "visible";},4000);
        }
    }

    if (simsubscreennum == 14) {
        document.getElementById('nextButton').style.display="none";
        var type = 1;
        var level= 1;
        var slider = document.getElementById("mag");
        var output = document.getElementById("final");
        document.getElementById('ms21').onclick=function(){
            if(type!=1){
                img=(level==1)?'an_100x.jpg':'an_500x.jpg';
                document.getElementById('ssw21').style.top='10px';
                document.getElementById('ssw22').style.top='10px';
                document.getElementById('final').src = 'images/microscope/'+img;
                type=1;
            }
        }
        document.getElementById('ms22').onclick=function(){
            if(type!=2){
                img=(level==1)?'no_100x.jpg':'no_500x.jpg';
                document.getElementById('ssw21').style.top='37px';
                document.getElementById('ssw22').style.top='37px';
                document.getElementById('final').src = 'images/microscope/'+img;
                type=2;
            }
        }
        document.getElementById('ms23').onclick=function(){
            if(type!=3){
                img=(level==1)?'ic_100x.jpg':'ic_500x.jpg';
                document.getElementById('ssw21').style.top='64px';
                document.getElementById('ssw22').style.top='64px';
                document.getElementById('final').src = 'images/microscope/'+img;
                type=3;
            }
        }
        document.getElementById('ms24').onclick=function(){
            if(type!=4){
                img=(level==1)?'oi_100x.jpg':'oi_500x.jpg';
                document.getElementById('ssw21').style.top='91px';
                document.getElementById('ssw22').style.top='91px';
                document.getElementById('final').src = 'images/microscope/'+img;
                type=4;
            }
        }
        document.getElementById('ms25').onclick=function(){
            if(type!=5){
                img=(level==1)?'wa_100x.jpg':'wa_500x.jpg';
                document.getElementById('ssw21').style.top='118px';
                document.getElementById('ssw22').style.top='118px';
                document.getElementById('final').src = 'images/microscope/'+img;
                type=5;
            }
        }        
        slider.oninput = function() {
            if(this.value==1){
                if (type == 1) img='an_100x.jpg';
                else if (type ==2) img='no_100x.jpg';
                else if (type ==3) img='ic_100x.jpg';
                else if (type ==4) img='oi_100x.jpg';
                else if (type ==5) img='wa_100x.jpg';
                level=1;
            }
            else{
                if (type == 1) img='an_500x.jpg';
                else if (type ==2) img='no_500x.jpg';
                else if (type ==3) img='ic_500x.jpg';
                else if (type ==4) img='oi_500x.jpg';
                else if (type ==5) img='wa_500x.jpg';
                level=2;
            }
            document.getElementById('final').src = 'images/microscope/'+img;
        };
    }
}

function step4() {
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

function step5() {
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

function step6() {
    myStopFunction();
    setTimeout(function() {
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
        setTimeout(function() {
            document.getElementById('nextButton').style.visibility = "visible";
        }, 1000);
    }, 4500);
}

function step7() {
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

function step8() {
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
                    setTimeout(function() {
                        document.getElementById('nextButton').style.visibility = "visible";
                    }, 1000);
                }, 2500);
            }
        }
    }
}


var looper2;
var degrees2 = 0;

function rotateAnimation2(el, speed) {
    var elem = document.getElementById(el);
    if (navigator.userAgent.match("Chrome")) {
        elem.style.WebkitTransform = "rotate(" + degrees2 + "deg)";
    }
    else if (navigator.userAgent.match("Firefox")) {
        elem.style.MozTransform = "rotate(" + degrees2 + "deg)";
    }
    else if (navigator.userAgent.match("MSIE")) {
        elem.style.msTransform = "rotate(" + degrees2 + "deg)";
    }
    else if (navigator.userAgent.match("Opera")) {
        elem.style.OTransform = "rotate(" + degrees2 + "deg)";
    }
    else {
        elem.style.transform = "rotate(" + degrees2 + "deg)";
    }
    looper2 = setTimeout('rotateAnimation2(\'' + el + '\',' + speed + ')', speed);
    if (lever2 != 1) {
        degrees2++;
    }
    if (degrees2 > 359) {
        degrees2 = 1;
    }
    document.getElementById("status2").innerHTML = "Rockwell Hardness number = " + parseInt(degrees2 / 3.6);
}

//rotating pointer clockwise upto HRN value
var looper;
var degrees = 0;
var t = 0;
var degrees1;

function rotateAnimation(el, speed) {
    var elem = document.getElementById(el);
    if (navigator.userAgent.match("Chrome")) {
        elem.style.WebkitTransform = "rotate(" + degrees + "deg)";
    }
    else if (navigator.userAgent.match("Firefox")) {
        elem.style.MozTransform = "rotate(" + degrees + "deg)";
    }
    else if (navigator.userAgent.match("MSIE")) {
        elem.style.msTransform = "rotate(" + degrees + "deg)";
    }
    else if (navigator.userAgent.match("Opera")) {
        elem.style.OTransform = "rotate(" + degrees + "deg)";
    }
    else {
        elem.style.transform = "rotate(" + degrees + "deg)";
    }
    looper = setTimeout('rotateAnimation(\'' + el + '\',' + speed + ')', speed);

    // if(degrees <= t)
    // {
    if (lever != 1) {
        degrees++;
    }
    // }
    if (degrees > 359) {
        degrees = 1;
    }
    document.getElementById("status").innerHTML = "Rockwell Hardness number = " + parseInt(degrees / 3.6);
}

var looper1;
var degrees1 = 0;

function rotateAnimation1(el, speed) {
    var elem = document.getElementById(el);
    if (navigator.userAgent.match("Chrome")) {
        elem.style.WebkitTransform = "rotate(" + degrees1 + "deg)";
    }
    else if (navigator.userAgent.match("Firefox")) {
        elem.style.MozTransform = "rotate(" + degrees1 + "deg)";
    }
    else if (navigator.userAgent.match("MSIE")) {
        elem.style.msTransform = "rotate(" + degrees1 + "deg)";
    }
    else if (navigator.userAgent.match("Opera")) {
        elem.style.OTransform = "rotate(" + degrees1 + "deg)";
    }
    else {
        elem.style.transform = "rotate(" + degrees1 + "deg)";
    }
    looper1 = setTimeout('rotateAnimation1(\'' + el + '\',' + speed + ')', speed);
    degrees1++;
}

function step11() {
    setTimeout(function() {
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left:410px; top:440px; height: 25px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        // document.getElementById('3-3').onclick=function(){step3();}
    }, 500);
    if (repeat == 1) {
        $('#2-01').mousemove(function() {
            // alert(navigator.appName);
            myStopFunction();
            var element = document.getElementById("2-10");
            var position = $(element).offset(); //builtin function to find the HTML element's position
            var thread = document.getElementById('2-00');
            var platform = document.getElementById('2-000');
            var specimen1 = document.getElementById('2ms')
            if (position.left == 464) {
                document.getElementById('p2-1').style.visibility = "hidden";
                document.getElementById('2-101').style.visibility = "visible";
                document.getElementById('2-10').style.visibility = "hidden";
                document.getElementById('2-2').style.transformOrigin = "62% 93%"; //needle1 rotation
                document.getElementById('2-2').style.animation = "swing 4s forwards"; //needle1 rotation
                setTimeout(function(){
                    document.getElementById('2-4').style.visibility = "visible";
                    document.getElementById('nextButton').style.visibility = "visible";
                },5000);
            }
            else {
                specimen1.style.top = parseFloat(specimen1.style.top) - 0.06 +'px';
                element.style.left = parseFloat(element.style.left) + 0.15 + 'px'; 
                thread.style.top = parseFloat(thread.style.top)- (6/100) + 'px';
                thread.style.height = parseFloat(thread.style.height) + (6/100) + 'px';
                platform.style.top = parseFloat(platform.style.top) - (6/100)+'px';
            }
            // document.getElementById('2-5').innerHTML=+position.left;
        });
    }
    /*else if (repeat == 2) {
        $('#2-01').mousemove(function() {
            // alert(navigator.appName);
            myStopFunction();
            document.getElementById('2-21').style.transformOrigin = "62% 93%"; //needle1 rotation
            document.getElementById('2-21').style.animation = "swing 4s forwards"; //needle1 rotation
            var element = document.getElementById("2-101");
            element.style.left = parseFloat(element.style.left) + 0.15 + 'px';
            var position = $(element).offset(); //builtin function to find the HTML element's position 
            // document.getElementById('2-5').innerHTML=+position.left;
            if (position.left == 464) {
                document.getElementById('p2-1').style.visibility = "hidden";
                document.getElementById('2-4').style.visibility = "visible";
                document.getElementById('2-102').style.visibility = "visible";
                document.getElementById('2-101').style.visibility = "hidden";
                document.getElementById('nextButton').style.visibility = "visible";
            }
        });
    }*/
}

function step12() {
    myStopFunction();
    document.getElementById('3-3').onclick = "";
    document.getElementById('3-9').style.visibility = "visible";
    document.getElementById('3-11').style.visibility = "visible";
    if (repeat == 1) {

        if (flag == 5) {
            document.getElementById('3-10').style.visibility = "visible";
            document.getElementById('3-12').style.visibility = "hidden";
            document.getElementById('3-121').style.visibility = "hidden";
            document.getElementById('3-101').style.visibility = "hidden";
        }
        else {
            document.getElementById('3-12').style.visibility = "visible";
            document.getElementById('3-10').style.visibility = "hidden";
            document.getElementById('3-101').style.visibility = "hidden";
            document.getElementById('3-121').style.visibility = "hidden";
        }
        document.getElementById('3-4').style.visibility = "visible";
        setTimeout(function() {
            document.getElementById('3-4').style.transformOrigin = "0% 100%";
            document.getElementById('3-4').style.animation = "moveHand 1.5s forwards";
            //
            if (flag == 5) {
                document.getElementById('3-10').style.transformOrigin = "0% 100%";
                document.getElementById('3-10').style.animation = "moveHand2 3s forwards";
            }
            else {
                document.getElementById('3-12').style.transformOrigin = "0% 100%";
                document.getElementById('3-12').style.animation = "moveHand1 3s forwards";
            }
        }, 400);

        setTimeout(function() {
            document.getElementById('3-4').style.visibility = "hidden";
        }, 2200);
    }
    if (repeat == 2) {
        if (flag == 5) {
            document.getElementById('3-101').style.visibility = "visible";
            document.getElementById('3-121').style.visibility = "hidden";
            document.getElementById('3-12').style.visibility = "hidden";
            document.getElementById('3-10').style.visibility = "hidden";
        }
        else {
            document.getElementById('3-121').style.visibility = "visible";
            document.getElementById('3-101').style.visibility = "hidden";
            document.getElementById('3-10').style.visibility = "hidden";
            document.getElementById('3-12').style.visibility = "hidden";
        }
        document.getElementById('3-41').style.visibility = "visible";
        setTimeout(function() {
            document.getElementById('3-41').style.transformOrigin = "0% 100%";
            document.getElementById('3-41').style.animation = "moveHand 1.5s forwards";
            //
            if (flag == 5) {
                document.getElementById('3-101').style.transformOrigin = "0% 100%";
                document.getElementById('3-101').style.animation = "moveHand2 3s forwards";
            }
            else {
                document.getElementById('3-121').style.transformOrigin = "0% 100%";
                document.getElementById('3-121').style.animation = "moveHand1 3s forwards";
            }
        }, 400);
        setTimeout(function() {
            document.getElementById('3-41').style.visibility = "hidden";
        }, 2200);
    }
    setTimeout(function() {
        document.getElementById('3-9').style.visibility = "hidden";
        document.getElementById('3-10').style.visibility = "hidden";
        document.getElementById('3-101').style.visibility = "hidden";
        document.getElementById('3-11').style.visibility = "hidden";
        document.getElementById('3-12').style.visibility = "hidden";
        document.getElementById('3-121').style.visibility = "hidden";

        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left:600px; top:353px; height: 25px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(270deg)";
        document.getElementById('3-5').onclick = function() {
            step31();
        }
    }, 4700);
}

function step31() {
    myStopFunction();
    document.getElementById('3-5').style.visibility = "hidden";
    document.getElementById('3-6').style.visibility = "visible";
    document.getElementById('3-7').style.visibility = "visible";
    document.getElementById('3-8').style.visibility = "visible";
    document.getElementById('status5').style.visibility = "visible";
    document.getElementById('3-3').onclick = "";
    document.getElementById('3-8').style.transformOrigin = "50% 100%";
    degrees1 = 0;
    document.getElementById('3-8').style.transform='rotate(90deg)';
    document.getElementById('3-8').style.msTransform='rotate(90deg)';
    document.getElementById('3-8').style.WebkitTransform='rotate(90deg)';
    if (repeat == 1) {
        //document.getElementById('status').style.visibility = "visible";
        document.getElementById('status').innerHTML = "Rockwell Hardness Number = ";
        if (flag == 1 || flag == 2 || flag == 3 || flag == 4) {
            document.getElementById('3-1n').style.transformOrigin = "92.5%  17.5%";
            rotateAnimation("3-1n", 25);
            // rotateImage(); 
            // count();
        }
        if (flag == 5) {
            document.getElementById('3-1n2').style.transformOrigin = "48% 92.5%";
            rotateAnimation("3-1n2", 25);
            // Stop animation when button is clicked
            // rotateImage2(); 
            // count();
        }
        // setTimeout(function(){
        // myInt = setInterval(function(){ animatearrow(); }, 500);
        // document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:600px; top:353px; height: 25px; z-index: 10;";
        // document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
        // // Code for IE9
        // document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
        // // Standard syntax
        // document.getElementById("arrow1").style.transform = "rotate(270deg)";
        document.getElementById('3-6').onclick = function() {
            step32();
        }
        // },9700);
    }
    if (repeat == 2) {
        //document.getElementById('status2').style.visibility = "visible";
        document.getElementById('status2').innerHTML = "Rockwell Hardness Number = ";
        if (flag == 1 || flag == 2 || flag == 3 || flag == 4) {
            document.getElementById('3-1n1').style.transformOrigin = "92.5%  17.5%";
            rotateAnimation2("3-1n1", 25);
            // rotateImage3(); 
            // count();
        }
        if (flag == 5) {
            document.getElementById('3-1n21').style.transformOrigin = "48% 92.5%";
            rotateAnimation2("3-1n21", 40);
            // rotateImage4(); 
            // count();
        }
        setTimeout(function(){
            lever2=1;
            showArrow(353,600,-90);
            document.getElementById('3-6').onclick = function() {
                myStopFunction();
                step32();
            }
        },6200);
    }
}

function step32() {
    myStopFunction();
    document.getElementById('3-3').onclick = "";
    document.getElementById('3-5').onclick = "";
    document.getElementById('3-6').onclick = "";
    document.getElementById('status5').style.visibility = "hidden";
    document.getElementById('3-6').style.visibility = "hidden";
    document.getElementById('3-5').style.visibility = "visible";
    if (repeat == 1) {
        lever = 1;
        if (flag == 1 || flag == 2 || flag == 3 || flag == 4) {
            document.getElementById('3-1n').style.transformOrigin = "92.5%  17.5%";
            // rotateAnimation1("3-1n",12);
        }
        if (flag == 5) {
            document.getElementById('3-1n2').style.transformOrigin = "48% 92.5%";
            // rotateAnimation1("3-1n2",12);
        }
        if (degrees1 == 0) {
            setTimeout(function() {
                // if(flag==1 || flag==2 || flag==3 || flag==4)
                // {
                // document.getElementById('3-1n').style.visibility="hidden";
                // }
                // if(flag==5)
                // {
                // document.getElementById('3-1n2').style.visibility="hidden";
                // }    
                // document.getElementById('3-1').style.visibility="hidden";
                // document.getElementById('nextButton').style.visibility="visible";            
            }, 200);
        }
        //document.getElementById('nextButton').style.visibility = "visible";
    }
    if (repeat == 2) {
        lever2 = 1;
        if (flag == 5) {
            document.getElementById('3-1n21').style.transformOrigin = "48% 92.5%";
            // rotateAnimation1("3-1n21",12);
        }
        if (degrees1 == 0) {
            setTimeout(function() { 
                document.getElementById('nextButton').style.visibility = "visible";
            }, 3000);
        }
    }
    setTimeout(function(){
        document.getElementById('3-7').style.display = "none";
        document.getElementById('3-8').style.display = "none";
        document.getElementById('nextButton').style.visibility = "visible";
    },3000);
}
function refresh() {
    //document.getElementById('arrow1').style="";
    //document.getElementById("arrow1").style.WebkitTransform = ""; 
    document.getElementById('2-2').style.transformOrigin = "";
    document.getElementById('2-2').style.animation = "";
    document.getElementById('3-4').style.animation = " ";
    document.getElementById('status').innerHTML = "";
    document.getElementById('3-1n2').style.transformOrigin = "";
    document.getElementById('3-1n').style.transformOrigin = "";
}