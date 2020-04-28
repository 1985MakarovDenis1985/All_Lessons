
document.onwheel = function (event) {
    // console.log(event);
    if (event.deltaY < 0){
        document.getElementById("line").innerHTML = " down"
    }else if(event.deltaY > 0){
        document.getElementById("line").innerHTML = " top";
    }
    
    let speed = event.deltaY;
    speed = Math.abs(speed);

    if (speed < 50){
        document.getElementById("speed").innerHTML = " lowe"
    }
    else if (speed < 150){
        document.getElementById("speed").innerHTML = " Midle"
    }
    else if (speed < 350){
        document.getElementById("speed").innerHTML = " hight"
    }

    // console.log(speed);
};

let topline = 150;
document.getElementById("block").onwheel = (e) => {
    let line = e.deltaY;
    topline = topline + line*0.2
    document.getElementById("scroll").style.top = topline + "px";
    if (topline >= 280){
        topline = 280    }

    if (topline <= 0){
        topline = 0    }
    console.log(topline);

    return false;
}