const list = document.querySelector(".list");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    list.classList.toggle("active")
})