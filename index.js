function Scrolling(){
    document.getElementsByClassName('active').classList.add("content-l");
}

addEventListener(onmouseenter , ()=>{
    Scrolling();
})