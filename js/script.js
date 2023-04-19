let navbar= document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    searchForn.classList.remove('active');
    cartitem.classList.remove('active');
}
let searchForn= document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForn.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
}
let cartitem= document.querySelector('.cart-container');

document.querySelector('#cart-btn').onclick=()=>{
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForn.classList.remove('active');
    
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    searchForn.classList.remove('active');
    cartitem.classList.remove('active');
}