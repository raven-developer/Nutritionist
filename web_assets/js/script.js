document.addEventListener("DOMContentLoaded", function () {
    // Load Navbar
    fetch("../web_include/nav.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar").innerHTML = data);

    // Load Footer
    fetch("../web_include/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);

    document.querySelectorAll(".w-blog-excerpt").forEach(function (content) {
        let words = content.textContent.trim().split(/\s+/); // Trim and split by spaces
        if (words.length > 20) {
            content.textContent = words.slice(0, 20).join(" ") + "...";
        }
    });

    const toggle_monthly = document.getElementById("toggle-monthly");
    const toggle_yearly = document.getElementById("toggle-yearly");

    toggle_monthly.addEventListener("click", () => {
        toggle_monthly.classList.add("enabled");
        toggle_yearly.classList.remove("enabled");
    });

    toggle_yearly.addEventListener("click", () => {
        toggle_yearly.classList.add("enabled");
        toggle_monthly.classList.remove("enabled");
    });
});

