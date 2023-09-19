function adsToggle () {
    const contentDiv = document.getElementById("Contents");
    const hidden = document.getElementById("hidden")
    if (contentDiv.style.display === "none") {
        hidden.innerHTML='Show Add ons'
        contentDiv.style.display = "block";
    } else {        
        hidden.innerHTML='Hide Add ons'
        contentDiv.style.display = "none";
    }
}

