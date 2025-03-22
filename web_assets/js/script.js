document.addEventListener("DOMContentLoaded", function () {
    // Load Navbar
    fetch("../web_include/nav.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar").innerHTML = data);

    // Load Footer
    fetch("../web_include/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});