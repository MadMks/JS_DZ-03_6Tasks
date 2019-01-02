function showPopup() {
    var btnShow = document.getElementsByClassName("popup")[0];
    var overlay = document.getElementsByClassName("overlay")[0];

    overlay.style.display = "block";
    btnShow.classList.add("popup_active");
}

function hidePopup() {
    var btnShow = document.getElementsByClassName("popup")[0];
    var overlay = document.getElementsByClassName("overlay")[0];

    overlay.style.display = "none";
    btnShow.classList.remove("popup_active");
}