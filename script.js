function becomeVisible() {
    if (document.querySelector('.phone-menu').style.display === "block") {
        document.querySelector('.phone-menu').style.display = "none";
    }
    
    else {
        document.querySelector(".phone-menu").style.display = "block";
    }
}