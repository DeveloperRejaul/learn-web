
// Dyce  Button Select
const mainDyce01 = document.querySelector("#main-dayce-01");
const mainDyce02 = document.querySelector("#main-dayce-02");
const mainDyce03 = document.querySelector("#main-dayce-03");
const dyceBtn01 = document.querySelector(".dyce-btn-01");
const dyceBtn02 = document.querySelector(".dyce-btn-02");
const dyceBtn03 = document.querySelector(".dyce-btn-03");
const dyceBtn04 = document.querySelector(".dyce-btn-04");
const aniIcon = document.querySelector(".ani-icon");
const player01DanaAni = document.querySelectorAll(".red-inner-inner #dana");


var dyceBtn = [dyceBtn01, dyceBtn02, dyceBtn03, dyceBtn04];

//Player Home Select
const Player01 = document.querySelector(".player-home-01");
const Player02 = document.querySelector(".player-home-02");
const Player03 = document.querySelector(".player-home-03");
const Player04 = document.querySelector(".player-home-04");




const radDAna = document.querySelectorAll(".part-01-inner.red-inner #dana");

const redDanaList = []
const redFild = []



// Dyce Button Add Random content
dyceBtn.forEach(function (e) {
  e.innerHTML = Math.round(Math.random() * 5 + 1);
});

// Player Dyce Rolling Animation
animation();

function animation() {
  Dyce01();

  // function for player 01
  function Dyce01() {

    Player01.classList.add("active");
    aniIcon.classList.add("active");

    var clear01 = setTimeout(function () {
      dyceBtn01.innerHTML = Math.round(Math.random() * 1+5);

      if (dyceBtn01.innerHTML >= 6) {
        danaAni()
      }
      if (dyceBtn01.innerHTML < 6){
        Player01.classList.remove("active");
        dyceBtn01.setAttribute("disabled", "");
        dyceBtn02.removeAttribute("disabled", "");
        aniIcon.classList.remove("active");
        danaAniclear()
        Dyce02();
      }
    }, 5000);

    mainDyce01.onclick = () => {
      dyceBtn01.innerHTML = Math.round(Math.random() * 1+5);
      if (dyceBtn01.innerHTML == 6) {
        danaAni()
      }
      if(dyceBtn01.innerHTML < 6) {
        Player01.classList.remove("active");
        dyceBtn01.setAttribute("disabled", "");
        dyceBtn02.removeAttribute("disabled", "");
        aniIcon.classList.remove("active");
        clearTimeout(clear01);
        danaAniclear()
        Dyce02();
        
      }
    };
  }

  // function for player 02
  function Dyce02() {
    Player02.classList.add("active");

    // auto
    var clear02 = setTimeout(function () {

      dyceBtn02.innerHTML = Math.round(Math.random() * 5+1);

      if (dyceBtn02.innerHTML < 6) {
        Player02.classList.remove("active");
        dyceBtn02.setAttribute("disabled", "");
        dyceBtn03.removeAttribute("disabled", "");

        Dyce03();
      }

    }, 5000);

    mainDyce02.onclick = () => {

      dyceBtn02.innerHTML = Math.round(Math.random() * 5+1);

      if (dyceBtn02.innerHTML < 6) {
        Player02.classList.remove("active");
        dyceBtn02.setAttribute("disabled", "");
        dyceBtn03.removeAttribute("disabled", "");
        clearTimeout(clear02);
        Dyce03();
      }
    };
  }

  // function for player 03
  function Dyce03() {
    Player03.classList.add("active");
    
    var clear03 = setTimeout(function () {

      dyceBtn03.innerHTML = Math.round(Math.random() * 5+1);

      if (dyceBtn03.innerHTML < 6 ) {
        Player03.classList.remove("active");
        dyceBtn03.setAttribute("disabled", "");
        dyceBtn04.removeAttribute("disabled", "");

        Dyce04();
      }

      
    }, 5000);

    mainDyce03.onclick = () => {
      dyceBtn03.innerHTML = Math.round(Math.random() * 5+1);
      if (dyceBtn03.innerHTML < 6 ){
        Player03.classList.remove("active");
        dyceBtn03.setAttribute("disabled", "");
        dyceBtn04.removeAttribute("disabled", "");
        clearTimeout(clear03);
        Dyce04();
      }

    };
  }

  // function for player 04
  function Dyce04() {
    Player04.classList.add("active");

    var clear04 = setTimeout(function () {

      dyceBtn04.innerHTML = Math.round(Math.random() * 5+1);
      if (dyceBtn04.innerHTML < 6 ){
        Player04.classList.remove("active");
        dyceBtn04.setAttribute("disabled", "");
        dyceBtn01.removeAttribute("disabled", "");
  
        Dyce01();
      }

    }, 5000);

    dyceBtn04.onclick = () => {

      dyceBtn04.innerHTML = Math.round(Math.random() * 5+1);
      if (dyceBtn04.innerHTML < 6 ){
        Player04.classList.remove("active");
        dyceBtn04.setAttribute("disabled", "");
        dyceBtn01.removeAttribute("disabled", "");
        clearTimeout(clear04);
        Dyce01();
      }

    };
  }
}


// Dana Animation function

function danaAni() {
  player01DanaAni.forEach(element => {
    element.classList.add('active')
  });
}
function danaAniclear() {
  player01DanaAni.forEach(element => {
    element.classList.remove('active')
  });
}

  





