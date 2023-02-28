/* Declare variables below to save the different sections (divs) of your story*/
let title= document.querySelector(".title");
let storyopen= document.querySelector(".story-opening");
let storyop1= document.querySelector(".option-one-screen");
let storyop2= document.querySelector(".option-two-screen");
let storyop1end= document.querySelector(".option-one-end");
let storyop2end= document.querySelector(".option-two-end");
let button1= document.querySelector(".option-one");
let button2= document.querySelector(".option-two");

button1.onclick=function(){
	storyop1.style.display="block";
    storyop1end.style.display="block";
    button1.style.display="none";
    button2.style.display="none";
    storyopen.style.display="none";
    title.innerHTML="I'm happy that you chose to go to São Paulo";
};

button2.onclick=function(){
	storyop2.style.display="block";
    storyop2end.style.display="block";
    button1.style.display="none";
    button2.style.display="none";
    storyopen.style.display="none";
    title.innerHTML="I'm happy that you chose to go to Rio de Janeiro";
};