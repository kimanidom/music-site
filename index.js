// Contact form submission handler
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = form.name.value;
        localStorage.setItem("username", name);
        alert("Thank you, " + name + "! We'll get back to you soon.");
        form.reset();
      });
    }
  
    // Personalized greeting on homepage
    const greetingEl = document.getElementById("greeting");
    const username = localStorage.getItem("username");
    if (greetingEl && username) {
      greetingEl.textContent = "Welcome back, " + username + "!";
    }
  });
  