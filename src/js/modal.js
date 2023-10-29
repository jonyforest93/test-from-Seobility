const openModalButton = document.querySelector(".btn-open-modal");
const closeModalButton = document.querySelector(".btn-close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

openModalButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    setTimeout(() => {
        modal.classList.add("scale-modal");
    }, 10);

    document.body.classList.add("no-scroll");
});

closeModalButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    modal.classList.remove("scale-modal");
    document.body.classList.remove("no-scroll");
});
