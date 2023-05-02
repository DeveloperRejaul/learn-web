
let con = document.querySelector('.container');
let nav2 = document.querySelector('.nav2');
let nav = document.querySelector('.nav');
let my = document.querySelector('.my');

console.log(nav);


window.onscroll = ()=>{
    
if (scrollY >= nav.offsetHeight+nav2.offsetHeight ) {
    my.classList.add('active')
}else{
    my.classList.remove('active')
}


}










