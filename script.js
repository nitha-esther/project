document.getElementById("queryToggle").addEventListener("change", function() {
    document.getElementById("queryForm").style.display = this.checked ? "block" : "none";
});

document.getElementById("queryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userEmail = document.getElementById("userEmail").value;
    const userQuery = document.getElementById("userQuery").value;
    
    window.location.href = `mailto:nishisheeba196@gmail.com?subject=Customer Query&body=Email: ${userEmail}%0D%0AQuery: ${userQuery}`;
});
