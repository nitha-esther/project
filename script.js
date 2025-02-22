document.getElementById("themeToggle").addEventListener("change", function() {
    if (this.checked) {
        document.body.style.background = "#f8e8ee"; // Light pink theme
    } else {
        document.body.style.background = "#ffffff"; // Default white background
    }
});
