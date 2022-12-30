console.log("Dopiero się uczę, jest Git");

let abracadabra = document.querySelector(".safety__button");
let picture = document.querySelector(".safety__image")

abracadabra.addEventListener("click", () => {
    picture.classList.toggle("image__show");

    abracadabra.innerText =
        picture.classList.contains("image__show")
            ? "Cudnie!"
            : "Pokaż zdjęcie";
});

/* kalkulator BMI

let heightElement = document.querySelector(".jsHeight");
let weightElement = document.querySelector(".jsWeight");
let jsForm = document.querySelector(".jsForm");
let jsBmi = document.querySelector(".jsBmi");

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
