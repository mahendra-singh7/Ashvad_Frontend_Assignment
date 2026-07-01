// ==========================
// Mobile Menu Toggle
// ==========================

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

// ==========================
// Dark / Light Theme Toggle
// ==========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerText = "Light Theme";
    } else {
        themeBtn.innerText = "Dark Theme";
    }

});

// ==========================
// Contact Form Validation
// ==========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let isValid = true;

    // Input Values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error Elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Clear Previous Errors
    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";

    // Name Validation
    if (name === "") {
        nameError.innerText = "Name is required.";
        isValid = false;
    }

    // Email Validation
    if (email === "") {
        emailError.innerText = "Email is required.";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailError.innerText = "Enter a valid email.";
        isValid = false;
    }

    // Message Validation
    if (message === "") {
        messageError.innerText = "Message is required.";
        isValid = false;
    }

    // Success
    if (isValid) {
        alert("Form Submitted Successfully!");

        form.reset();
    }

});

// ==========================
// Scroll To Top Button
// ==========================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ==========================
// Active Navigation Highlight
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});