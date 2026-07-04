window.onload = function () {

    // Show welcome message only on the Home page
    if (document.title === "Home") {
        alert("Welcome to Yusuf Ashiru Yusuf's Portfolio Website!");
    }

    // Set skill progress bars
    if (document.getElementById("htmlSkill")) {
        document.getElementById("htmlSkill").value = 90;
    }

    if (document.getElementById("cssSkill")) {
        document.getElementById("cssSkill").value = 80;
    }

    if (document.getElementById("pythonSkill")) {
        document.getElementById("pythonSkill").value = 60;
    }
};

// Contact form validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}