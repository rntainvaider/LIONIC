const Burger = document.querySelector(".burger");

Burger.addEventListener("click", () => {
    const HeaderNav = document.querySelector(".header__nav");
    const currentDisplay = window.getComputedStyle(HeaderNav).display;

    HeaderNav.style.display = (currentDisplay === "none") ? "flex" : "none";
});
