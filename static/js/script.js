const modal = document.getElementById("loginModal");
const btn = document.getElementById("loginBtn");
const span = document.getElementById("close-btn");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}