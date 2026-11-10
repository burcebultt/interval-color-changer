
let intervalId ;
function startChange(){
    if(!intervalId){
        intervalId = setInterval(changeColor, 1000);
    }
}

function changeColor(){  //arkaplan sıyah degılse sıyah yap yazılar beyaz eger beyazsa yazıları sıyah yaparız
 if(document.body.style.backgroundColor!=="black"){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
 }
 else{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
 }
}

document.getElementById("stop").addEventListener("click", stopChange);
document.getElementById("start").addEventListener("click", startChange);

function stopChange(){
    clearInterval(intervalId);
}