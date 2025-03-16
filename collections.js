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


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("newsLetter").classList.remove("opacity-0");
    }, 1600); // Wait for 3 seconds
});

// let occasionInputs = document.querySelectorAll('#occasionInput');

// occasionInputs.forEach(input => {
//     input.addEventListener('click', function () {
//         console.log(input.value);
//     });
// });

document.querySelectorAll('.radiocheck input[type="radio"]').forEach((radio) => {
    radio.addEventListener('click', function () {
        const parentLabel = this.closest('.radiocheck');
        const activeElement = parentLabel.querySelector('.active');

        if (activeElement.classList.contains('hidden')) {
            activeElement.classList.remove('hidden');
        } else {
            activeElement.classList.add('hidden');
        }
    });
});
let searchBoxInput = document.getElementById('searchBoxInput');
let dressNameElements = document.querySelectorAll('.dressName');

searchBoxInput.addEventListener("keyup", function() {
    let enteredValue = this.value.toLowerCase();
    dressNameElements.forEach(element => {
        let match = element.textContent.toLowerCase().includes(enteredValue); 
        // Show/hide based on match
        if (match) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});



let checkBoxValues = document.getElementsByName("checkBoxValue");
let valueArrey = [];
let defaultArrey = ['summer', 'party', 'beach'];

checkBoxValues.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {
        if (valueArrey.includes(this.value)) {
            valueArrey = valueArrey.filter(val => val !== this.value);
        } else {
            valueArrey.push(this.value);
        }

        // Recalculate diff dynamically
        let diff = valueArrey.filter(x => !defaultArrey.includes(x));

        console.log("Difference:", diff);
        console.log("Default Array:", defaultArrey);
        console.log("Selected Values:", valueArrey);
    });
});



// document.querySelectorAll('.dressName').forEach(element =>{
//     element.style.display = 
// })

