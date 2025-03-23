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

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".w-blog-excerpt").forEach(function (content) {
        let words = content.textContent.trim().split(/\s+/); // Trim and split by spaces
        if (words.length > 20) {
            content.textContent = words.slice(0, 20).join(" ") + "...";
        }
    });
});
