


let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".button-add");



for(let i=0; i <addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function() {
        // let prevProductsCount = +productsCountEl.textContent;
        // productsCountEl.textContent = prevProductsCount + 1;
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}


// modal

let modal = document.querySelector(".modal");
let moreDetailsButtons = document.querySelectorAll(".button-more");
let closeBtn = document.querySelector(".btn-close");


moreDetailsButtons.forEach(item => {
    item.addEventListener("click",openModal)}
)

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide"); 
}

function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide");
}

closeBtn.addEventListener("click",closeModal);

modal.addEventListener("click",function(e){
    // console.log(e.target)
    if(e.target === modal) {
        closeModal()
    }
})

// Like and disLike

let blockLike = document.querySelector(".block-like");

blockLike.addEventListener("click",function(e){
    if(blockLike.classList.contains("dislike")){
        blockLike.classList.remove("dislike");
        blockLike.classList.add("like");
    } else {
        blockLike.classList.add("dislike");
        blockLike.classList.remove("like");
    } 
    
})

