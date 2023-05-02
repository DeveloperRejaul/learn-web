//curcolar progres bar stars
let numbar = document.querySelector("#number");
let conter = 0;

setInterval(() => {
    if (conter == 65) {
        clearInterval()
    }else{
        conter += 1;
        numbar.innerHTML = conter + "%";
    }
},25);

//curcolar progres bar ends