let homepress = document.getElementById("home");
let contpress = document.getElementById("cont");
let infopress = document.getElementById("info");
let guidepress = document.getElementById("guide");

let home = document.getElementById("home-info");
let cont = document.getElementById("contact-info");
let info = document.getElementById("information-info");
let guide = document.getElementById("guide-info");

homepress.addEventListener("click",() => {
    home.style.visibility = 'visible';
    cont.style.visibility = 'hidden';
    info.style.visibility = 'hidden';
    guide.style.visibility = 'hidden';
});

contpress.addEventListener("click",() => {
    home.style.visibility = 'hidden';
    cont.style.visibility = 'visible';
    info.style.visibility = 'hidden';
    guide.style.visibility = 'hidden';
});

infopress.addEventListener("click",() => {
    home.style.visibility = 'hidden';
    cont.style.visibility = 'hidden';
    info.style.visibility = 'visible';
    guide.style.visibility = 'hidden';
});

guidepress.addEventListener("click",() => {
    home.style.visibility = 'hidden';
    cont.style.visibility = 'hidden';
    info.style.visibility = 'hidden';
    guide.style.visibility = 'visible';
});