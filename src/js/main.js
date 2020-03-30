//write js here

let addToCart = document.querySelectorAll("#btn-add-cart");

// for(i = 0; i < addToCart.length; i++){
//     addToCart[i].addEventListener('click',()=>{
//         console.log(addToCart[i].textContent);
//         console.log(i);
//    })
// }

for(let i = 0; i < addToCart.length; i++){
       addToCart[i].addEventListener('click',()=>{
           
             var currentActions = document.getElementsByClassName("actions");
             currentActions[i].classList.add("active");
           })
}