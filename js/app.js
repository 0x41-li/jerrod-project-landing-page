const humIcon = document.querySelector(".header__hum-icon");
const nav = document.querySelector(".header__nav");

humIcon.addEventListener("click", () => {
    humIcon.classList.toggle("show");
    nav.classList.toggle("show");
});
