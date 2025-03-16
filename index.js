//  Offer Close

let offerContainer = document.getElementById('offerContainer')
let offerClose = document.getElementById('offerClose')

offerClose.addEventListener('click',function(){
    offerContainer.style.display = 'none'
})

// Side Navbar Functionality

let sideNavbar = document.getElementById('sideNavbar')
let sideNavClose = document.getElementById('sideNavClose')
let navbarClick = document.getElementById('navbarClick')

navbarClick.addEventListener('click',function(){
    sideNavbar.style.left = '0%'
})
sideNavClose.addEventListener('click',function(){
    sideNavbar.style.left = '-50%'
})


// Image silder Functionality

let index               = 0;
const slides            = document.getElementById('slides');
const totalCountofSlide = document.querySelectorAll('#slide').length;

// Next btn funtionality
document.getElementById('prev').onclick = function(){
    if (index < totalCountofSlide - 1){
        index = index + 1
    }
    else{
        index = 0
    }
    // Call slider function
    updateSlid()
}

// Previous btn Fucntionality
document.getElementById('next').onclick = function(){
    if (index > 0){
        index = index - 1
    }
    else{
        index = totalCountofSlide - 1
    }
    // Call slider function
    updateSlid()
}

function updateSlid(){
    slides.style.transform = `translateX(-${index * 100}%)`
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("hiddenDiv").classList.remove("opacity-0");
    }, 100); // Wait for 3 seconds
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("brandHid").classList.remove("opacity-0");
    }, 300); // Wait for 3 seconds
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("CustomExp").classList.remove("opacity-0");
    }, 500); // Wait for 3 seconds
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("newArri").classList.remove("opacity-0");
    }, 900); // Wait for 3 seconds
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("mostWanted").classList.remove("opacity-0");
    }, 1100); // Wait for 3 seconds
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("limitedOffer").classList.remove("opacity-0");
    }, 1400); // Wait for 3 seconds
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("newsLetter").classList.remove("opacity-0");
    }, 1600); // Wait for 3 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    let icons = document.querySelectorAll("i.fa-heart");

    icons.forEach(icon => {
        icon.addEventListener("click", function () {
            icon.classList.toggle("fa-regular");
            icon.classList.toggle("fa-solid");
            icon.style.color = icon.classList.contains("fa-solid") ? "#ff0000" : "#000000";
        });
    });
});


