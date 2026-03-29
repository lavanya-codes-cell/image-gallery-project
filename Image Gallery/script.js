let images = document.querySelectorAll(".container img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

//filter sec
function filterImages(category){
images.forEach(function(img){
    if(category==="all"){
        img.classList.remove("hide");
    }
    else if(img.classList.contains(category)){
        img.classList.remove("hide");
    }
    else{
        img.classList.add("hide");
    }
});
}

//lightbox
function openltb(index) {
let visibleImages=document.querySelectorAll(".container img:not(.hide)");

    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndex].src;
}

//close
function closeltb() {
    lightbox.style.display = "none";
}

//next & previous
function changeImage(step) {
let visibleImages=document.querySelectorAll(".container img:not(.hide)");

    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = visibleImages.length - 1;
    }

    if (currentIndex >= visibleImages.length) {
        currentIndex = 0;
    }

    lightboxImg.src = visibleImages[currentIndex].src;
}
