const start = 10 ;
let time = start * 60;
 const contDownEl =document.getElementById("countdown");
setInterval(updateCountdown, 1000);
 function updateCountdown(){

    const minutes =Math.floor(time/60);
    let secounds =  time % 60;

    secounds = secounds < 10 ? '0' + secounds : secounds;
    contDownEl.innerHTML= `${minutes}: ${secounds}`;

    time--;
 }