function infinitegrow(){
    var element = document.getElementById("growid");
    growid.classList.add("growcl");
    growid.classList.remove("shrinkcl");
}

function shrinktext(){
    var element = document.getElementById("growid");
    growid.classList.add("shrinkcl");
    growid.classList.remove("growcl");
    setTimeout(infinitegrow, 1500);
}
