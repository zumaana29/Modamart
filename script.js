window.addEventListener("load", () => {
    setTimeout(() => {
        alert("Welcome to Dress Store 💃✨");
    }, 500);
});
document.getElementById("getOtpBtn").addEventListener("click", () => {
    let otp = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("generatedOTP", otp);
    alert("Your OTP is: " + otp);
});
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let number = document.getElementById("number").value.trim();
    let otp = document.getElementById("otp").value.trim();
    let message = document.getElementById("formMessage");

    if (name.length < 3) {
        message.style.color = "yellow";
        message.textContent = "Name must be at least 3 characters.";
        return;
    }
    if (!/^[0-9]{10}$/.test(number)) {
        message.style.color = "yellow";
        message.textContent = "Enter a valid 10-digit number.";
        return;
    }
    if (otp !== localStorage.getItem("generatedOTP")) {
        message.style.color = "red";
        message.textContent = "Invalid OTP. Please try again.";
        return;
    }

    message.style.color = "lightgreen";
    message.textContent = "Form submitted successfully ✅";
    document.getElementById("contactForm").reset();
    localStorage.removeItem("generatedOTP");
});
document.querySelectorAll('.top-info a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
