var button01 = document.querySelector(".btn-01");
var button02 = document.querySelector(".btn-02");
var button03 = document.querySelector(".btn-03");
var button04 = document.querySelector(".btn-04");

function perent() {
  myBtn01();

  function myBtn01() {
    var delay;

    button01.onclick = () => {
      button01.classList.remove("ani");
      button01.setAttribute("disabled", "");
      button02.removeAttribute("disabled", "");
      myBtn02();

      clearTimeout(cler01);
    };

    var cler01 = setTimeout(() => {
      button01.classList.remove("ani");
      button01.setAttribute("disabled", "");
      button02.removeAttribute("disabled", "");

      myBtn02();
    }, 5000);

    button01.classList.add("ani");
  }

  function myBtn02() {
    button02.onclick = () => {
      button02.classList.remove("ani");
      button02.setAttribute("disabled", "");
      button04.removeAttribute("disabled", "");
      clearTimeout(cler02);
      myBtn04();
    };

    var cler02 = setTimeout(() => {
      button02.classList.remove("ani");
      button02.setAttribute("disabled", "");
      button04.removeAttribute("disabled", "");

      myBtn04();
    }, 5000);

    button02.classList.add("ani");
  }
  function myBtn03() {
    button03.onclick = () => {
      button03.classList.remove("ani");
      button03.setAttribute("disabled", "");
      button01.removeAttribute("disabled", "");
      clearTimeout(cler03);
      myBtn01();
    };

    var cler03 = setTimeout(() => {
      button03.classList.remove("ani");
      button03.setAttribute("disabled", "");
      button01.removeAttribute("disabled", "");

      myBtn01();
    }, 5000);

    button03.classList.add("ani");
  }
  function myBtn04() {
    button04.onclick = () => {
      button04.classList.remove("ani");
      button04.setAttribute("disabled", "");
      button03.removeAttribute("disabled", "");
      clearTimeout(cler04);
      myBtn03();
    };

    var cler04 = setTimeout(() => {
      button04.classList.remove("ani");
      button04.setAttribute("disabled", "");
      button03.removeAttribute("disabled", "");

      myBtn03();
    }, 5000);

    button04.classList.add("ani");
  }
}

perent();

// Define Variable
// const dyce = document.querySelectorAll(".main-value");
// const dana = document.querySelectorAll("#dana");
// const Player1Btn = document.querySelectorAll(".player-01-Btn");
// const Player2Btn = document.querySelectorAll(".player-02-Btn");
// const Player3Btn = document.querySelectorAll(".player-03-Btn");
// const Player4Btn = document.querySelectorAll(".player-04-Btn");

// var arr = [Player1Btn, Player2Btn, Player3Btn, Player4Btn];

// dyce.forEach((e) => {
//   e.textContent = Math.round(Math.random() * 4 + 1);
//   e.addEventListener("click", changeValue);
// });

// function changeValue(e) {
//   e.explicitOriginalTarget.innerHTML = Math.round(Math.random() * 5 + 1);

//   // Player BTN animation
//   if (dyce[0].innerHTML == 6) {
//     Player2Btn.forEach(function (e) {
//       e.classList.add("animation");
//     });
//   }
//   if (dyce[1].innerHTML == 6) {
//     Player3Btn.forEach(function (e) {
//       e.classList.add("animation");
//     });
//   }
//   if (dyce[2].innerHTML == 6) {
//     Player1Btn.forEach(function (e) {
//       e.classList.add("animation");
//     });
//   }
//   if (dyce[3].innerHTML == 6) {
//     Player4Btn.forEach(function (e) {
//       e.classList.add("animation");
//     });
//   }

//   e.preventDefault();
// }

// var arr = [Player1Btn,Player2Btn,Player3Btn,Player4Btn]

// for (let i = 0; i < dyce.length; i++) {
//   console.log(i)

// }

// for (const f of Player4Btn) {
//   console.log(f)
// }

// if(dyce[1].innerHTML == 6) {
//   Player2Btn.forEach(function(e){
//     e.classList.add("animation")
//   });
// }if(dyce[2].innerHTML == 6) {
//   Player1Btn.forEach(function(e){
//     e.classList.add("animation")
//   });
// }if(dyce[3].innerHTML == 6) {
//   Player1Btn.forEach(function(e){
//     e.classList.add("animation")
//   });
// }

// var dana01 = document.querySelectorAll(".dana-02");
// const dana = document.querySelectorAll('#dana')
// var i = 0;

// const dana = document.querySelectorAll("#dana");
// const user02Dyce = document.querySelector("#main-dayce-01");
// const user02DyceCelderen = document.querySelector("#main-dayce-01 button");
// var randomNumber = 0;

// // create a rendom value
// user02DyceCelderen.textContent = (Math.round((Math.random()*5+1)))  ;

// // create dyce Click function
// user02Dyce.addEventListener("click", num)

// function num(){

//     randomNumber = (Math.round((Math.random()*5+1)));
//     user02DyceCelderen.textContent = randomNumber;

// }

// if( randomNumber == 6 ) {

//     dana.forEach( (e) =>{

//         e.classList.add('animation');

//         e.onclick = () =>  {
//             dana.forEach( (b) =>{

//                 b.classList.remove('animation');

//             });
//         };
//     });
// }
// console.log(randomNumber);

//     dana01[2].addEventListener('click', function () {

//         dana01[2].classList.add('active');

//         i++;

//         if (i==2) {
//             dana01[2].style.bottom = "40px"
//         }else if (i==3) {
//             dana01[2].style.bottom = "60px"
//         }else if (i==4) {
//             dana01[2].style.bottom = "80px"
//         }else if (i==5) {
//             dana01[2].style.bottom = "100px"
//         }else if (i==6) {
//             dana01[2].style.left = "100px"
//             dana01[2].style.bottom = "123px"
//         }else if (i==7) {
//             dana01[2].style.left = "80px"
//         }else if (i==8) {
//             dana01[2].style.left = "60px"
//         }else if (i==9) {
//             dana01[2].style.left = "40px"
//         }else if (i==10) {
//             dana01[2].style.left = "20px"
//         }else if (i==11) {
//             dana01[2].style.left = "0px"
//         }else if (i==12) {
//             dana01[2].style.bottom = "145px"
//         }else if (i==13) {
//             dana01[2].style.bottom = "167px"
//         }else if (i==14) {
//             dana01[2].style.left = "20px"
//         }else if (i==15) {
//             dana01[2].style.left = "40px"
//         }else if (i==16) {
//             dana01[2].style.left = "60px"
//         }else if (i==17) {
//             dana01[2].style.left = "80px"
//         }else if (i==18) {
//             dana01[2].style.left = "100px"
//         }else if (i==19) {
//             dana01[2].style.left = "123px"
//             dana01[2].style.bottom = "190px"
//         }else if (i==20) {
//             dana01[2].style.bottom = "210px"
//         }else if (i==21) {
//             dana01[2].style.bottom = "230px"
//         }else if (i==22) {
//             dana01[2].style.bottom = "250px"
//         }else if (i==23) {
//             dana01[2].style.bottom = "270px"
//         }else if (i==24) {
//             dana01[2].style.bottom = "290px"
//         }else if (i==25) {
//             dana01[2].style.left = "152px"
//         }else if (i==26) {
//             dana01[2].style.left = "178px"
//         }else if (i==27) {
//             dana01[2].style.bottom = "270px"
//         }else if (i==28) {
//             dana01[2].style.bottom = "250px"
//         }else if (i==29) {
//             dana01[2].style.bottom = "230px"
//         }else if (i==30) {
//             dana01[2].style.bottom = "210px"
//         }else if (i==31) {
//             dana01[2].style.bottom = "190px"
//         }else if (i==32) {
//             dana01[2].style.bottom = "168px"
//             dana01[2].style.left = "203px"
//         }else if (i==33) {
//             dana01[2].style.left = "223px"
//         }else if (i==34) {
//             dana01[2].style.left = "243px"
//         }else if (i==35) {
//             dana01[2].style.left = "263px"
//         }else if (i==36) {
//             dana01[2].style.left = "283px"
//         }else if (i==37) {
//             dana01[2].style.left = "303px"
//         }else if (i==38) {
//             dana01[2].style.bottom = "145px"
//         }else if (i==39) {
//             dana01[2].style.bottom = "123px"
//         }else if (i==40) {
//             dana01[2].style.left = "283px"
//         }else if (i==41) {
//             dana01[2].style.left = "262px"
//         }else if (i==42) {
//             dana01[2].style.left = "242px"
//         }else if (i==43) {
//             dana01[2].style.left = "223px"
//         }else if (i==44) {
//             dana01[2].style.left = "203px"
//         }else if (i==45) {
//             dana01[2].style.left = "179px"
//             dana01[2].style.bottom = "100px"
//         }else if (i==46) {
//             dana01[2].style.bottom = "81px"
//         }else if (i==47) {
//             dana01[2].style.bottom = "60px"
//         }else if (i==48) {
//             dana01[2].style.bottom = "40px"
//         }else if (i==49) {
//             dana01[2].style.bottom = "20px"
//         }else if (i==50) {
//             dana01[2].style.bottom = "1px"
//         }else if (i==51) {
//             dana01[2].style.bottom = "1px"
//             dana01[2].style.left = "153px"
//         }else if (i==52) {
//             dana01[2].style.bottom = "21px"
//         }else if (i==53) {
//             dana01[2].style.bottom = "41px"
//         }else if (i==54) {
//             dana01[2].style.bottom = "61px"
//         }else if (i==55) {
//             dana01[2].style.bottom = "81px"
//         }else if (i==56) {
//             dana01[2].style.bottom = "101px"
//         }else if (i==57) {
//             dana01[2].style.bottom = "131px"
//             dana01[2].style.width = "5%"
//             dana01[2].style.height = "5%"

//         };

//     });

// };
