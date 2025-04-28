//To be added once all done since its too risky
//window.location.href = window.location.href.replace('/web_pages', '');

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

    const features_table = document.getElementById("w-features-table");
    const table_row = document.querySelectorAll(".w-row-label");

    table_row.forEach(td => {
        const value = td.textContent.trim();
        switch (value) {
            case "check":
                td.innerHTML = '<div class="w-table-icon"><img src="../web_assets/images/Check.png" alt="Check Icon"></div>';
                break;
            case "cross":
                td.innerHTML = '<div class="w-table-icon"><img src="../web_assets/images/cross.png" alt="Cross Icon"></div>';
                break;
            default:
                break;
        }
    });

});