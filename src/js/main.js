//write js here

let addToCart = document.querySelectorAll("#btn-add-cart");

for(let i = 0; i < addToCart.length; i++){
       addToCart[i].addEventListener('click',()=>{
           
             var currentActions = document.getElementsByClassName("actions");
             currentActions[i].classList.add("active");
           })
}


let rakModal = document.getElementsByClassName("rak-modal");
if(rakModal.length>0){

  rakModal[0].addEventListener('click',()=>{
    let modal = document.getElementsByClassName("modal");
    modal[0].style.display = 'flex';
    modal[0].addEventListener('click',()=>{
      modal[0].style.display = 'none';
    })
  })
}



let menu = document.getElementsByClassName("menu");
let check = true;
if(menu.length >0){
  menu[0].addEventListener('click',()=>{
    if(check){
      let nav = document.getElementsByClassName("header-right_nav");
      nav[0].style.display = "flex";
      document.body.style.overflow = "hidden";
      check = false;
    }
    else{
        let nav = document.getElementsByClassName("header-right_nav");
        nav[0].style.display = "none";
        document.body.style.overflow = "scroll";
        check = true;
    }
    
  })
}
