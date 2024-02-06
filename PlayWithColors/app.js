let btn1=document.querySelector("button");
let copybutton1=document.querySelector(".copybutton1");
btn1.addEventListener('click',function(){
    let h2=document.querySelector("h3");
    let hexacolor="#"+randomcolor()[0]+randomcolor()[1]+randomcolor()[2];
    h2.innerText=hexacolor;
    h2.style.color=hexacolor;
    let div=document.querySelector(".random");
    div.style.background=hexacolor;
    btn1.style.background=hexacolor;
    document.querySelector("h2").style.color="white";
    btn1.style.color="white";
    copybutton1.style.color=hexacolor;
});
function randomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
      function rgbToHex() {
          let r=Number(red).toString(16);
          if(r.length<2){
            r="0"+r;
          }
          let g=Number(green).toString(16);
          if(g.length<2){
            g="0"+g;
          }
          let b=Number(blue).toString(16);
          if(b.length<2){
            b="0"+b;
          }
          return [r,g,b];
      }
      return rgbToHex();
    }

text=document.getElementById("heading");
// let toast=document.querySelector(".Copy_color");
// let t=document.querySelector("#toast");
function copyContent1(){
  navigator.clipboard.writeText(text.innerText).then(function() {
  let t=document.querySelector(".toast");
  t.innerText="copied!";
  console.log("copied");
  setTimeout( function() {
    t.innerText = "";
}, 1000);
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});
}







let first=document.querySelector(".first");
let second=document.querySelector(".second");
let btn=document.querySelector("#btn2");
let body=document.querySelector(".gradient");
btn.addEventListener('click',function(){
  baseColor=first.value 
  + ", " 
  + second.value;
  let orientationButton=document.querySelectorAll(".Orientationbox");

//   function setTransition() {
//     orientationButton[0].style.transition ='all .8s ease-in 0.05s';
//     orientationButton[1].style.transition ='all .8s ease-in 0.05s';
//     orientationButton[2].style.transition ='all .8s ease-in 0.05s';
//     orientationButton[3].style.transition ='all .8s ease-in 0.05s';  
//  }


  // Array.from(orientationButton).forEach((ob)=>{
  //   ob.addEventListener('click',(e)=>{
  //     if(e.target.innerHTML=='<i class="fa-solid fa-arrow-left"></i>'){
  //           color="linear-gradient(to left," + baseColor +")";  
  //           body.style.background=color;
  //           document.querySelector(".output").innerHTML=`background-image:${color}`;
  //           orientationButton[0].style.border="1px solid white";
  //     }
  //   else if(e.target.innerHTML=='<i class="fa-solid fa-arrow-right"></i>'){
  //           color="linear-gradient(to right," + baseColor +")";
  //           body.style.background=color;
  //           document.querySelector(".output").innerHTML=`background-image:${color}`;
  //           orientationButton[1].style.border="1px solid white";
  //   }
  //   else if(e.target.innerHTML=='<i class="fa-solid fa-arrow-up"></i>'){
  //          color="linear-gradient(to top," + baseColor +")";
  //          body.style.background=color;
  //          document.querySelector(".output").innerHTML=`background-image:${color}`;
  //          orientationButton[2].style.border="1px solid white";
  //   }
  //   else if(e.target.innerHTML=='<i class="fa-solid fa-arrow-down"></i>'){
  //          color="linear-gradient(to bottom," + baseColor +")";
  //          body.style.background=color;
  //          document.querySelector(".output").innerHTML=`background-image:${color}`;
  //          orientationButton[3].style.border="1px solid white";
  //   }
  // });
  // });

    color="linear-gradient(to right," + baseColor +")";
    body.style.background=color;
    document.querySelector(".output").innerHTML=`background-image:${color}`;
    

    first.style.background=first.value;
    second.style.background=second.value;
    let btn2=document.querySelector(".copybutton");
    btn2.classList.add("copybutton");
               
    
});
const copyContent = async () => {
      await navigator.clipboard.writeText("linear-gradient(to right, " 
      + first.value 
      + ", " 
      + second.value
      + ")").then(function() {
  let t=document.querySelector(".toast1");
  t.innerText="copied!";
  console.log("copied");
  setTimeout( function() {
    t.innerText = "";
}, 1000);
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});
}



