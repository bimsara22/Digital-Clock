const hourE1=document.getElementById('hours');
const minuteE1=document.getElementById('minutes');
const secondsE1=document.getElementById('seconds');
const ampmE1=document.getElementById('ampm');

function updateclock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";

    if(h>12){
        h = h-12;
        ampm="PM";
    }


    hourE1.innerHTML=h;
    minuteE1.innerHTML=m;
    secondsE1.innerHTML=s;


    ampmE1,(innerText=ampm);
    setTimeout(() => {
        updateclock()

    }, 1000);

}

updateclock()
