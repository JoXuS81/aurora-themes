const hamburgerMenu = document.querySelector(".lines");
const menuInside = document.querySelector(".header-content-menuInside");
const menuOptionHome = document.querySelector(".header-content-menuInside-container-options-home");
const menuOptionOffers = document.querySelector(".header-content-menuInside-container-options-offers")
const menuOptionWork = document.querySelector(".header-content-menuInside-container-options-work");


hamburgerMenu.addEventListener("click", () => 
{
    hamburgerMenu.classList.toggle("lines");
    hamburgerMenu.classList.toggle("changeLines");
    menuInside.classList.toggle("header-content-menuInside");
    menuInside.classList.toggle("showMenu");
});


menuOptionHome.addEventListener("click", () => 
{
    hamburgerMenu.classList.remove("changeLines");
    hamburgerMenu.classList.add("lines");
    menuInside.classList.remove("showMenu");
    menuInside.classList.add("header-content-menuInside");
});

menuOptionOffers.addEventListener("click", () => 
{
    hamburgerMenu.classList.remove("changeLines");
    hamburgerMenu.classList.add("lines");
    menuInside.classList.remove("showMenu");
    menuInside.classList.add("header-content-menuInside");
});


menuOptionWork.addEventListener("click", () => 
{
    hamburgerMenu.classList.remove("changeLines");
    hamburgerMenu.classList.add("lines");
    menuInside.classList.remove("showMenu");
    menuInside.classList.add("header-content-menuInside");
});