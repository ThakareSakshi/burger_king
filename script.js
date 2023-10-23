let order_section=document.querySelector(".order");

const order_btn=document.querySelector(".order_btn");
order_btn.addEventListener("click",()=>{
    let burger=document.getElementById("burger");
    let fries=document.getElementById("Fries");
    let coldDrink=document.getElementById("cold-Drink");

    if(burger.checked==true){
       console.log("burger");
    }
    if(fries.checked==true){
        console.log("fires")
    }
    if(coldDrink.checked==true){
        console.log("cold drink")
    }
})


let promise1= new Promise(resolve ,reject){

}