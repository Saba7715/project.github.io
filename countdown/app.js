const enddate = "22 November 2022 02:53 PM"
document.getElementById("end-date").innerText= enddate;
const input = document.getElementsByTagName("input")

function countdown(){
    const end = new Date(enddate)
    const start = new Date()
    const diff = (end-start)/1000;

    if(diff<0) return;

    input[0].value= Math.floor(diff/3600/24);//Days
    input[1].value= Math.floor((diff/3600)%24);//Hours
    input[2].value= Math.floor((diff/60)%60);//Minutes
    input[3].value= Math.floor((diff)%60);//Seconds
}

countdown()

setInterval(countdown, 1000);





