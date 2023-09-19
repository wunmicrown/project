function adsToggle () {
    const contentDiv = document.getElementById("Contents");
    const hidden = document.getElementById("hidden")
    if (contentDiv.style.display === "none") {
        hidden.innerHTML='hide Add-ons'
        contentDiv.style.display = "block";
    }else if(contentDiv.style.display = "block"){
        hidden.innerHTML='show Add-ons'
        contentDiv.style.display = "none";
    }
        if(caret.classList.contains("deg135")){
            caret.classList.remove("deg135");
            caret.classList.add("deg315");
        }else if(caret.classList.contains("deg315")){
            caret.classList.remove("deg315");
            caret.classList.add("deg135");
        }
}

