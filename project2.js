const btn=document.querySelector("button");

const randomColor=()=>{
    let val="0123456789ABCDEF";
    let hash="#";
    for(let i=0;i<6;i++){
        hash = hash + val[Math.floor(Math.random()*16)];
    }
    return hash;
};

function randomColorChanger(){
    document.body.style.backgroundColor=randomColor();
}
btn.addEventListener("click", randomColorChanger);