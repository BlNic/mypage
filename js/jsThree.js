console.log("Dopiero się uczę ;)");

let abracadabra = document.querySelector(".button");
let picture = document.querySelector(".image")

abracadabra.addEventListener("click", () => {
    picture.classList.toggle("image__show");


    abracadabra.innerText =
        picture.classList.contains("image__show")
            ? "Cudnie!"
            : "Pokaż zdjęcie";
});

let heightElement = document.querySelector(".jsHeight");
let weightElement = document.querySelector(".jsWeight");
let jsForm = document.querySelector(".jsForm");
let jsBmi = document.querySelector(".jsBmi");
______________________________________________________
jsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let height = heightElement.value;
    let weight = weightElement.value;

    let bmi = weight / ((height / 100) ** 2);
    jsBmi.innerText = bmi.toFixed(2)
});
______________________________________________________


heightElement.focus()

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
    console.log(bmi);

})
