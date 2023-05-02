// Define Variable
const user02Dyce = document.querySelector("#main-dayce-01");
const user02DyceCelderen = document.querySelector("#main-dayce-01 button");
var dana01 = document.querySelectorAll(".dana-02");
const dana = document.querySelectorAll('#dana')
var i = 0;




// // create a rendom value
user02DyceCelderen.textContent = (Math.round((Math.random()*5+1)))  ;

// // create dyce Click function
user02Dyce.addEventListener("click", ()=>{
    var randomNumber = (Math.round((Math.random()*5+1)));
    user02DyceCelderen.textContent = randomNumber;


    if( randomNumber == 6 ){


        dana.forEach( (e) =>{
            
            e.classList.add('animation');

            e.onclick = () =>  {
                dana.forEach( (b) =>{
                
                    b.classList.remove('animation');
        
                })    ;
            };

        });

        dana01[2].addEventListener('click', function () {

            dana01[2].classList.add('active');
            
            i++;
            
            if (i==2) {
                dana01[2].style.bottom = "40px"
            }else if (i==3) {
                dana01[2].style.bottom = "60px"
            }else if (i==4) {
                dana01[2].style.bottom = "80px"
            }else if (i==5) {
                dana01[2].style.bottom = "100px"
            }else if (i==6) {
                dana01[2].style.left = "100px"
                dana01[2].style.bottom = "123px"
            }else if (i==7) {
                dana01[2].style.left = "80px"
            }else if (i==8) {
                dana01[2].style.left = "60px"
            }else if (i==9) {
                dana01[2].style.left = "40px"
            }else if (i==10) {
                dana01[2].style.left = "20px"
            }else if (i==11) {
                dana01[2].style.left = "0px"
            }else if (i==12) {
                dana01[2].style.bottom = "145px"
            }else if (i==13) {
                dana01[2].style.bottom = "167px"
            }else if (i==14) {
                dana01[2].style.left = "20px"
            }else if (i==15) {
                dana01[2].style.left = "40px"
            }else if (i==16) {
                dana01[2].style.left = "60px"
            }else if (i==17) {
                dana01[2].style.left = "80px"
            }else if (i==18) {
                dana01[2].style.left = "100px"
            }else if (i==19) {
                dana01[2].style.left = "123px"
                dana01[2].style.bottom = "190px"
            }else if (i==20) {
                dana01[2].style.bottom = "210px"
            }else if (i==21) {
                dana01[2].style.bottom = "230px"
            }else if (i==22) {
                dana01[2].style.bottom = "250px"
            }else if (i==23) {
                dana01[2].style.bottom = "270px"
            }else if (i==24) {
                dana01[2].style.bottom = "290px"
            }else if (i==25) {
                dana01[2].style.left = "152px"
            }else if (i==26) {
                dana01[2].style.left = "178px"
            }else if (i==27) {
                dana01[2].style.bottom = "270px"
            }else if (i==28) {
                dana01[2].style.bottom = "250px"
            }else if (i==29) {
                dana01[2].style.bottom = "230px"
            }else if (i==30) {
                dana01[2].style.bottom = "210px"
            }else if (i==31) {
                dana01[2].style.bottom = "190px"
            }else if (i==32) {
                dana01[2].style.bottom = "168px"
                dana01[2].style.left = "203px"
            }else if (i==33) {
                dana01[2].style.left = "223px"
            }else if (i==34) {
                dana01[2].style.left = "243px"
            }else if (i==35) {
                dana01[2].style.left = "263px"
            }else if (i==36) {
                dana01[2].style.left = "283px"
            }else if (i==37) {
                dana01[2].style.left = "303px"
            }else if (i==38) {
                dana01[2].style.bottom = "145px"
            }else if (i==39) {
                dana01[2].style.bottom = "123px"
            }else if (i==40) {
                dana01[2].style.left = "283px"
            }else if (i==41) {
                dana01[2].style.left = "262px"
            }else if (i==42) {
                dana01[2].style.left = "242px"
            }else if (i==43) {
                dana01[2].style.left = "223px"
            }else if (i==44) {
                dana01[2].style.left = "203px"
            }else if (i==45) {
                dana01[2].style.left = "179px"
                dana01[2].style.bottom = "100px"
            }else if (i==46) {
                dana01[2].style.bottom = "81px"
            }else if (i==47) {
                dana01[2].style.bottom = "60px"
            }else if (i==48) {
                dana01[2].style.bottom = "40px"
            }else if (i==49) {
                dana01[2].style.bottom = "20px"
            }else if (i==50) {
                dana01[2].style.bottom = "1px"
            }else if (i==51) {
                dana01[2].style.bottom = "1px"
                dana01[2].style.left = "153px"
            }else if (i==52) {
                dana01[2].style.bottom = "21px"
            }else if (i==53) {
                dana01[2].style.bottom = "41px"
            }else if (i==54) {
                dana01[2].style.bottom = "61px"
            }else if (i==55) {
                dana01[2].style.bottom = "81px"
            }else if (i==56) {
                dana01[2].style.bottom = "101px"
            }else if (i==57) {
                dana01[2].style.bottom = "131px"
                dana01[2].style.width = "5%"
                dana01[2].style.height = "5%"
        
            };
        
        });

    };
    
});















