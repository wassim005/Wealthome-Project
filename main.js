const header = document.getElementById("header");
const logo = document.getElementById("logo");
const headerLinks = document.getElementById("headerLinks");
const nlogin = document.getElementById("nlogin");
const nstarted = document.getElementById("nstarted");
const favs = document.querySelectorAll(".fav");
const wantList = document.getElementById("wantList");
const wantChoose = document.querySelectorAll(".wantChoose");
const wType = document.getElementById("wType");
const typeList = document.getElementById("typeList");
const typeChoose = document.querySelectorAll(".typeChoose");
const pType = document.getElementById("pType");
const scl = document.querySelector(".scroll");
const menu = document.getElementById("menu");
const m = document.getElementById("m");


// Add an event listener for the scroll event
addEventListener("scroll", () => {
    // If the user scrolls more than 100px, apply styles for a smaller header
    if (scrollY > 100) {
        header.classList.add("nav");
        logo.classList.add("nlogo");
        headerLinks.classList.add("nlink");
        nlogin.classList.add("nlogin");
        nstarted.classList.add("nstarted");
    } else {
        // Revert header styles when scrolling back to the top
        header.classList.remove("nav");
        logo.classList.remove("nlogo");
        headerLinks.classList.remove("nlink");
        nlogin.classList.remove("nlogin");
        nstarted.classList.remove("nstarted");
    }

    // Show the scroll-to-top button after scrolling 600px, hide it otherwise
    if (scrollY > 600) {
        scl.style.display = "flex"; // Display scroll-to-top button
    } else {
        scl.style.display = "none"; // Hide scroll-to-top button
    }
});

// Smooth scrolling back to the top when the scroll-to-top button is clicked
scl.onclick = () => {
    window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: "smooth" // Smooth scrolling effect
    });
};

// Add click event listeners to all favorite buttons
favs.forEach(fav => {
    fav.onclick = () => {
        // Toggle the "clicked" class and change the icon
        if (fav.classList.contains("clicked")) {
            fav.classList.remove("clicked"); // Remove the "clicked" class
            fav.innerHTML = "favorite_border"; // Set the icon to unselected
        } else {
            fav.classList.add("clicked"); // Add the "clicked" class
            fav.innerHTML = "favorite"; // Set the icon to selected
        }
    };
});

// Toggle visibility of the "want" dropdown list
function showWantList() {
    if (wantList.style.display === "block") {
        wantList.style.display = "none"; // Hide the dropdown
    } else {
        wantList.style.display = "block"; // Show the dropdown
    }
}

// Set the selected option from the "want" dropdown
wantChoose.forEach(item => {
    item.addEventListener("click", (event) => {
        const chosenText = event.target.innerHTML; // Get the text of the clicked item
        wType.innerHTML = chosenText; // Update the display with the selected option
    });
});

// Toggle visibility of the "type" dropdown list
function showTypeList() {
    if (typeList.style.display === "block") {
        typeList.style.display = "none"; // Hide the dropdown
    } else {
        typeList.style.display = "block"; // Show the dropdown
    }
}

// Set the selected option from the "type" dropdown
typeChoose.forEach(item => {
    item.addEventListener("click", (event) => {
        const chosenText = event.target.innerHTML; // Get the text of the clicked item
        pType.innerHTML = chosenText; // Update the display with the selected option
    });
});

// Toggle visibility and animation for the menu
menu.onclick = () => {
    if (m.style.display === "block") {
        // Close the menu with an animation
        m.style.animation = "menu-close 0.5s forwards"; // Play closing animation
        m.addEventListener("animationend", () => {
            m.style.display = "none"; // Hide the menu after the animation ends
        }, { once: true }); // Ensure the event listener is used only once
    } else {
        // Open the menu with an animation
        m.style.display = "block"; // Show the menu
        m.style.animation = "menu-open 0.5s forwards"; // Play opening animation
    }
};