computerSequence=[];
usersequence=[];

btnOptionsC=["one","two","three","four"];
let h2=document.querySelector("h3");
//styling
// h2.style.color="#1ddbdb";
h2.style.color="rgb(170, 38, 218)";
// h2.style.color="rgb(26, 78, 150)";
h2.style.fontWeight="bold";


let level=0;
let start=false;

startButton=document.querySelector(".computerButton");
startButton.addEventListener('click',function(){
    if(start==false){
       start=true;
       console.log(start);
       levelup();
    }
    
});

function flashComputer(btn){
    btn.classList.add("flashC");
    setTimeout(function(){
         btn.classList.remove("flashC");
    },250);
}

function flashUser(btn){
    btn.classList.add("flashU");
    setTimeout(function(){
         btn.classList.remove("flashU");
    },250);
}

function levelup(){
    h2.innerText=`Level-${level}`;
    usersequence=[];
    let randomidx=Math.floor(Math.random()*3);
    let btn=document.querySelector(`.${btnOptionsC[randomidx]}`);
    computerSequence.push(btn.getAttribute("id"));
    console.log(computerSequence);
    flashComputer(btn);
    ++level;
}

// function flashWrong(btnr){
//     btnr.classList.add("flashWrong");
//     setTimeout(function(){
//      btnr.classList.remove("flashWrong");
//     },250);
// }

// function flashRight(btnw){
// //    btnw.classList.add("flashRight");
//    btnw.style.background="green";
//    setTimeout(function(){
//    },250);
//     // console.log(btnw)
// }


hScore=document.querySelector(".highestScore");
let heighestScore=0;
function highestScore(idx){
    heighestScore=(idx+1)*5;
    hScore.innerText=`Score - ${heighestScore}`;
    return heighestScore;
}





function check(idx){
    if((usersequence[idx]===computerSequence[idx])){
       if(usersequence.length==computerSequence.length){
        setTimeout(levelup(),1000);
        // highestScore(idx);
        let heightest=0
        preHigh=highestScore(idx);
        if(preHigh>heightest){
            heightest=preHigh;
        }
        console.log(heightest);
       }
    }
    else{
        h2.innerText=`Game over!!! your score is ${heighestScore}`;
        document.querySelector("body").classList.add("flashWrong");
        setTimeout(function(){
            document.querySelector("body").classList.remove("flashWrong");
        },100);
        hScore.innerText="Score - 0";
        reset(); 
    }
}
function pressed(btn1){
    btn2=this;
    flashUser(btn2);
    
    btnId=btn2.getAttribute("id");
    usersequence.push(btnId);
    check(usersequence.length-1);
}
btns=document.querySelectorAll(".box");
for(btn1 of btns){
    btn1.addEventListener('click',pressed);
}
quitbutton=document.querySelector(".quit");
quitbutton.addEventListener('click',function(){
    console.log("quit");
    reset();
    h2.innerText=`Quit!!! your score is ${heighestScore}`;
    hScore.innerText="Score - 0";
});

function reset(){
    usersequence=[];
    computerSequence=[];
    level=0;
    start=false;
}


