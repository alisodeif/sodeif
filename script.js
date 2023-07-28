modal=document.getElementById("modal");
overlay=document.getElementById("overlay");
modal2=document.getElementById("modal2");
overlay2=document.getElementById("overlay2");
button=document.getElementById("button");
/* a resalt kala part*/
 var plus=Number(document.getElementById("plus").innerHTML);
 var plus2=Number(document.getElementById("plus2").innerHTML);
 plus3=plus+plus2;
console.log(plus);
console.log(plus2);
console.log(plus3);
document.getElementById("plus4").innerHTML= plus3 ;
document.getElementById("plus3").innerHTML= plus3 ;
/* a function modal part*/
function myfunc(){
modal.style.transform="translatey(0px)";
overlay.style.visibility="visible";
}
function myfunc2(){
    modal2.style.transform="translatey(0px)";
    overlay2.style.visibility="visible";
    }
    /* a addeventlisener part*/
button.addEventListener('click',function(){ 
    modal.style.transform="translatey(1000px)";
overlay.style.visibility="hidden"; 
})
button2.addEventListener('click',function(){ 
    modal.style.transform="translatey(1000px)";
overlay.style.visibility="hidden"; 
})
modal2.addEventListener('click',function(){ 
    modal2.style.transform="translatey(1000px)";
overlay2.style.visibility="hidden"; 
})


