const body=document.body;
const button=document.querySelector(".btn");
const color=document.querySelector(".color");

const colorGenerator=function(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const randomColor=`rgb(${red}, ${green}, ${blue})`
    return randomColor;
}
button.addEventListener("click",()=>{
    const randomColor=colorGenerator();
    color.textContent=randomColor;
    body.style.backgroundColor=randomColor;
})