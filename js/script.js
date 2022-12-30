const welcome = () => {
    console.log("Dopiero się uczę, jest Git");
}


const removeImage = () => {
    const safetyButton = document.querySelector(".safety__button");
    const picture = document.querySelector(".safety__image")

    safetyButton.innerText =
        picture.classList.contains("image__show")
            ? "Cudnie!"
            : "Pokaż zdjęcie";
}

const init = () => {
    safetyButton.addEventListener("click", removeImage);

    welcome();
}

/* kalkulator BMI

const heightElement = document.querySelector(".jsHeight");
let weightElement = document.querySelector(".jsWeight");
let jsForm = document.querySelector(".jsForm");
const jsBmi = document.querySelector(".jsBmi");

jsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let height = heightElement.value;
    let weight = weightElement.value;

    let bmi = weight / ((height / 100) ** 2);
    jsBmi.innerText = bmi.toFixed(2)
});

document.querySelector(".bmiButton")

heightElement.addEventListener("input", () => {
    console.log(`Aktualna wartość: ${heightElement.value}`);
})

weightElement.addEventListener("input", () => {
    console.log(`Aktualna wartość: ${weightElement.value}`);
})

document.querySelector(".jsForm")

jsForm.addEventListener("reset", () => {
    console.log('Formularz zresetowany');
})

jsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log('Formularz wysłany');
})*/
