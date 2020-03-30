//write js here

let addToCart = document.querySelectorAll("#btn-add-cart");

for(let i = 0; i < addToCart.length; i++){
       addToCart[i].addEventListener('click',()=>{
           
             var currentActions = document.getElementsByClassName("actions");
             currentActions[i].classList.add("active");
           })
}


let rakModal = document.getElementsByClassName("rak-modal");

console.log(rakModal[0].textContent);

rakModal[0].addEventListener('click',()=>{
  let modal = document.getElementsByClassName("modal");
  modal[0].style.display = 'flex';
  modal[0].addEventListener('click',()=>{
    modal[0].style.display = 'none';
  })
})