
const mobileButton = document.querySelector("#mobileButton");
const mobileMenu = document.querySelector("#mobileMenu");
const mlButton = document.querySelector("#mlButton");
const slider = document.querySelector("#lightSlider");
const aliderItems = document.querySelectorAll("#lightSlider li");
// var aliderItems = slider.children;
const sliderLeftBtn = document.querySelector('.sLeft');
const sliderrightBtn = document.querySelector('.sRight');
const containerWidth = slider.offsetWidth;
var items = 0;
var margin = 20;



mobileButton.addEventListener("click" , function(){
    mobileMenu.classList.toggle("myclass");
    mlButton.classList.toggle("myclass");
})

// scrift for  slider responsive start
    reposive = [
        {breaPoint : {width:0, item : 1}},
        {breaPoint : {width:775, item : 2}},
        {breaPoint : {width:1000, item : 3}}
    ]

 function mother() {
    function lode() {
        for (let i = 0; i < reposive.length; i++) {
            if (window.innerWidth >= reposive[i].breaPoint.width){
                items = reposive[i].breaPoint.item
            }
        }
        for (let i = 0; i < aliderItems.length; i++) {
            aliderItems[i].style.minWidth = ((containerWidth / items) - margin) + "px";
            aliderItems[i].style.margin = (margin / 2) + "px";
        }
        nextPrev()
    }
    if (window.innerWidth >1000 ) {
        function nextPrev() {
            var i = 0;
            sliderLeftBtn.onclick = () => {
                i++;
                for (var l of aliderItems) {
                    if (i==1) {l.style.left = -((containerWidth / items) )*0 + "px"}
                    if (i==2) {l.style.left = -((containerWidth / items) )*1 + "px"}
                    if (i==3) {l.style.left = -((containerWidth / items) )*2 + "px"}
                    if (i==4) {l.style.left = -((containerWidth / items) )*3 + "px"}
                    if (i==5) {l.style.left = -((containerWidth / items) )*4 + "px"}
                    if (i>5) {i =0;}
                }
            }
            sliderrightBtn.onclick = ()=> {
                i--;
                for (var l of aliderItems) {
                    if (i==1) {l.style.left = -((containerWidth / items) )*0 + "px"}
                    if (i==2) {l.style.left = -((containerWidth / items) )*1 + "px"}
                    if (i==3) {l.style.left = -((containerWidth / items) )*2 + "px"}
                    if (i==4) {l.style.left = -((containerWidth / items) )*3 + "px"}
                    if (i==5) {l.style.left = -((containerWidth / items) )*4 + "px"}
                    if (i<0) {i = 5;}
                }
            }
            
        }
    }else if (window.innerWidth >775) {
        function nextPrev() {
            var i = 0;
            sliderLeftBtn.onclick = () => {
                i++
                for (var l of aliderItems) {
                    if (i==1) {l.style.left = -((containerWidth / items) )*0 + "px"}
                    if (i==2) {l.style.left = -((containerWidth / items) )*1 + "px"}
                    if (i==3) {l.style.left = -((containerWidth / items) )*2 + "px"}
                    if (i==4) {l.style.left = -((containerWidth / items) )*3 + "px"}
                    if (i==5) {l.style.left = -((containerWidth / items) )*4 + "px"}
                    if (i==6) {l.style.left = -((containerWidth / items) )*5 + "px"}
                    if (i>6) {i =0;}
                }
            }
            sliderrightBtn.onclick = ()=> {
                i--;
                for (var l of aliderItems) {
                    if (i==1) {l.style.left = -((containerWidth / items) )*0 + "px"}
                    if (i==2) {l.style.left = -((containerWidth / items) )*1 + "px"}
                    if (i==3) {l.style.left = -((containerWidth / items) )*2 + "px"}
                    if (i==4) {l.style.left = -((containerWidth / items) )*3 + "px"}
                    if (i==5) {l.style.left = -((containerWidth / items) )*4 + "px"}
                    if (i==6) {l.style.left = -((containerWidth / items) )*5 + "px"}
                    if (i<0) {i = 6;}
                }
            }
            
        }
    }
    else{
        function nextPrev() {
            var i = 0;
            sliderLeftBtn.onclick = () => {
                i++;
                for (var l of aliderItems) {
                    if (i==1) {l.style.left = -((containerWidth / items) )*0 + "px"}
                    if (i==2) {l.style.left = -((containerWidth / items) )*1 + "px"}
                    if (i==3) {l.style.left = -((containerWidth / items) )*2 + "px"}
                    if (i==4) {l.style.left = -((containerWidth / items) )*3 + "px"}
                    if (i==5) {l.style.left = -((containerWidth / items) )*4 + "px"}
                    if (i==6) {l.style.left = -((containerWidth / items) )*5 + "px"}
                    if (i==7) {l.style.left = -((containerWidth / items) )*6 + "px"}
                    if (i>7) {i =0;}
                }
            }
            sliderrightBtn.onclick = ()=> {
                i--;
                for (var l of aliderItems) {
                    if (i==1) {l.style.left = -((containerWidth / items) )*0 + "px"}
                    if (i==2) {l.style.left = -((containerWidth / items) )*1 + "px"}
                    if (i==3) {l.style.left = -((containerWidth / items) )*2 + "px"}
                    if (i==4) {l.style.left = -((containerWidth / items) )*3 + "px"}
                    if (i==5) {l.style.left = -((containerWidth / items) )*4 + "px"}
                    if (i==6) {l.style.left = -((containerWidth / items) )*5 + "px"}
                    if (i==7) {l.style.left = -((containerWidth / items) )*6 + "px"}
                    if (i<0) {i = 7;}
                }
            }
            
        }

    }
    lode()
 }
 mother()

// scrift for  Apartment Plans part start
function plan() {
    const planUl = document.querySelector("#plan-ul");
    const plantli = planUl.children;
    const plantItemas  = document.querySelector('#planItemas');
    const plantIteme = plantItemas.children;


    plantIteme[1].classList.add("active")
    plantli[1].style.color = "#2289ff"

    plantli[0].onclick = () =>{
        for (const pcol of plantli) {
            pcol.style.color = "black";
        }
        for (const itemp of plantIteme) {
            itemp.classList.remove("active");
        }
        plantli[0].style.color = "#2289ff";
        plantIteme[0].classList.add("active");
    };
    plantli[1].onclick = () =>{
        for (const pcol of plantli) {
            pcol.style.color = "black";
        }
        for (const itemp of plantIteme) {
            itemp.classList.remove("active");
        }
        plantli[1].style.color = "#2289ff";
        plantIteme[1].classList.add("active");
    };
    plantli[2].onclick = () =>{
        for (const pcol of plantli) {
            pcol.style.color = "black";
        }
        for (const itemp of plantIteme) {
            itemp.classList.remove("active");
        }
        plantli[2].style.color = "#2289ff";
        plantIteme[2].classList.add("active");
    };
    plantli[3].onclick = () =>{
        for (const pcol of plantli) {
            pcol.style.color = "black";
        }
        for (const itemp of plantIteme) {
            itemp.classList.remove("active");
        }
        plantli[3].style.color = "#2289ff";
        plantIteme[3].classList.add("active");
    };
    plantli[4].onclick = () =>{
        for (const pcol of plantli) {
            pcol.style.color = "black";
        }
        for (const itemp of plantIteme) {
            itemp.classList.remove("active");
        }
        plantli[4].style.color = "#2289ff";
        plantIteme[4].classList.add("active");
    };
}
plan()

function faQ() {
    const hadd = document.querySelectorAll(".haddig");
    const faqItem = document.querySelectorAll("#faq-item");
    const icon = document.querySelectorAll("#icon-faq");

        hadd[0].onclick = ()=>{
            
            hadd[1].classList.remove("active");
            hadd[2].classList.remove("active");
            hadd[3].classList.remove("active");
            hadd[4].classList.remove("active");

            faqItem[1].classList.remove("active");
            faqItem[2].classList.remove("active");
            faqItem[3].classList.remove("active");
            faqItem[4].classList.remove("active");

            icon[1].classList.remove("active");
            icon[2].classList.remove("active");
            icon[3].classList.remove("active");
            icon[4].classList.remove("active");

            icon[1].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            icon[2].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            icon[3].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            icon[4].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';


            hadd[0].classList.toggle("active");
            faqItem[0].classList.toggle("active");
            icon[0].classList.toggle("active");

            if (icon[0].className == "active") {
                icon[0].innerHTML = '<i class="fas fa-minus text-gray-900"></i>';
            }else{
                icon[0].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            }
        }
        hadd[1].onclick = ()=>{

            hadd[0].classList.remove("active");
            hadd[2].classList.remove("active");
            hadd[3].classList.remove("active");
            hadd[4].classList.remove("active");

            faqItem[0].classList.remove("active");
            faqItem[2].classList.remove("active");
            faqItem[3].classList.remove("active");
            faqItem[4].classList.remove("active");

            icon[0].classList.remove("active");
            icon[2].classList.remove("active");
            icon[3].classList.remove("active");
            icon[4].classList.remove("active");

            icon[0].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            icon[2].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            icon[3].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            icon[4].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';


            hadd[1].classList.toggle("active");
            faqItem[1].classList.toggle("active");
            icon[1].classList.toggle("active");


            if (icon[1].className == "active") {
                icon[1].innerHTML = '<i class="fas fa-minus text-gray-900"></i>';
            }else{
                icon[1].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            }
        }
        hadd[2].onclick = ()=>{

            hadd[1].classList.remove("active");
            hadd[0].classList.remove("active");
            hadd[3].classList.remove("active");
            hadd[4].classList.remove("active");

            faqItem[1].classList.remove("active");
            faqItem[0].classList.remove("active");
            faqItem[3].classList.remove("active");
            faqItem[4].classList.remove("active");

            icon[1].classList.remove("active");
            icon[0].classList.remove("active");
            icon[3].classList.remove("active");
            icon[4].classList.remove("active");

            icon[1].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            icon[0].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            icon[3].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            icon[4].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';

            hadd[2].classList.toggle("active");
            faqItem[2].classList.toggle("active");
            icon[2].classList.toggle("active");


            if (icon[2].className == "active") {
                icon[2].innerHTML = '<i class="fas fa-minus text-gray-900"></i>';
            }else{
                icon[2].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            }
        }
        hadd[3].onclick = ()=>{

            hadd[1].classList.remove("active");
            hadd[2].classList.remove("active");
            hadd[0].classList.remove("active");
            hadd[4].classList.remove("active");

            faqItem[1].classList.remove("active");
            faqItem[2].classList.remove("active");
            faqItem[0].classList.remove("active");
            faqItem[4].classList.remove("active");

            icon[1].classList.remove("active");
            icon[2].classList.remove("active");
            icon[0].classList.remove("active");
            icon[4].classList.remove("active");

            icon[1].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            icon[2].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            icon[0].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            icon[4].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';

            hadd[3].classList.toggle("active");
            faqItem[3].classList.toggle("active");
            icon[3].classList.toggle("active");


            if (icon[3].className == "active") {
                icon[3].innerHTML = '<i class="fas fa-minus text-gray-900"></i>';
            }else{
                icon[3].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            }
        }
        hadd[4].onclick = ()=>{

            hadd[1].classList.remove("active");
            hadd[2].classList.remove("active");
            hadd[3].classList.remove("active");
            hadd[0].classList.remove("active");

            faqItem[1].classList.remove("active");
            faqItem[2].classList.remove("active");
            faqItem[3].classList.remove("active");
            faqItem[0].classList.remove("active");

            icon[1].classList.remove("active");
            icon[2].classList.remove("active");
            icon[3].classList.remove("active");
            icon[0].classList.remove("active");

            icon[1].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            icon[2].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            icon[3].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            icon[0].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';

            hadd[4].classList.toggle("active");
            faqItem[4].classList.toggle("active");
            icon[4].classList.toggle("active");


            if (icon[4].className == "active") {
                icon[4].innerHTML = '<i class="fas fa-minus text-gray-900"></i>';
            }else{
                icon[4].innerHTML = '<i class="fas fa-plus text-gray-500"></i>';
            }
        }
        
}
faQ()



