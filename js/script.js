document.addEventListener("DOMContentLoaded", function () {
    fetch("components/navbar.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar-container").innerHTML = data)
        .catch(err => console.error("Error loading navbar:", err));

    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-container").innerHTML = data)
        .catch(err => console.error("Error loading footer:", err));
});
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
});