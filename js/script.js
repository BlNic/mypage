{
    const welcome = () => {
        console.log("Dopiero się uczę, jest Git");
    }

    const removeImage () => {
        picture.classList.toggle("image__show");

        safetyButton.innerText =
            picture.classList.contains("image__show")
                ? "Cudnie!"
                : "Pokaż zdjęcie";
    }

    const safetyButton = document.querySelector(".safety__button");
    const picture = document.querySelector(".safety__image")

    safetyButton.addEventListener("click", removeImage);

    welcome();
}