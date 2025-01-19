// JavaScript for Interactivity

document.addEventListener("DOMContentLoaded", () => {
    const getStartedButton = document.getElementById("get-started");
    const contactForm = document.getElementById("contact-form");

    // Smooth Scroll
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Get Started Button Alert
    getStartedButton.addEventListener("click", () => {
        alert("Welcome! Start recycling now by uploading your plastic details!");
    });

    // Contact Form Submission
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
    });
});
