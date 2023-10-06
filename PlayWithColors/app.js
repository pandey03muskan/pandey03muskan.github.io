let btn1=document.querySelector("button");
btn1.addEventListener('click',function(){
    let h2=document.querySelector("h3");
    let color=randomColor();
    h2.innerText=color;
    h2.style.color=color;
    let div=document.querySelector(".random");
    div.style.background=color;
    btn1.style.background=color;
    document.querySelector("h2").style.color="white";
    btn1.style.color="white";
});

function randomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let randomcolor=`rgb(${red}, ${green}, ${blue})`;
    return randomcolor;
}



// gradient js

let first=document.querySelector(".first");
let second=document.querySelector(".second");
let btn=document.querySelector("#btn2");
let body=document.querySelector(".gradient");
// let outerbody=document.querySelector("body");
btn.addEventListener('click',function(){
    color="linear-gradient(to right, " 
                + first.value 
                + ", " 
                + second.value 
                + ")"; 
                first.style.background=first.value;
                second.style.background=second.value;
                body.style.background=color;
                // outerbody.style.background=color;
                let btn2=document.querySelector(".copybutton");
                btn2.classList.add("copybutton");
                document.querySelector(".output").innerHTML=`background-image:${color}`;
               
    
});
const copyContent = async () => {
    try {
      await navigator.clipboard.writeText("linear-gradient(to right, " 
      + first.value 
      + ", " 
      + second.value
      + ")");
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }