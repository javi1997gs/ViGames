// ---- --- --- Modal --- --- ---- //
const open1=document.querySelector("#open-modal1");
const modal1=document.querySelector("#modal1");
const open2=document.querySelector("#open-modal2");
const modal2=document.querySelector("#modal2");
const close1=document.querySelector("#close-modal1");
const close2=document.querySelector("#close-modal2");

open1.addEventListener("click",()=>{
    modal1.showModal();
})

open2.addEventListener("click",()=>{
    modal2.showModal();
})

close1.addEventListener("click",()=>{
    modal1.close();
})

close2.addEventListener("click",()=>{
    modal2.close();
})

// ---- --- --- Video --- --- ---- //
