"use strict";
alert("Вважливо, коли пишеш десятковий дріб, то потрібно використовувати не кому ',' а крапку '.'");
const size = document.querySelector(".size"),
    sizeThousand = document.querySelector(".sizeThousand"),
    ruler = document.querySelector(".ruler"),
    button = document.querySelector(".calculate"),
    buttonThousand = document.querySelector("calculateThousand"),
    result = document.querySelector(".result"),
    resultThousand = document.querySelector(".resultThousand"),
    angle = document.querySelector(".angle"),
    thousand = document.querySelector(".thousand");

button.addEventListener("click", (event) => {
    event.preventDefault();
    result.innerText += size.value * 6 / ruler.value + "м";
});
thousand.addEventListener("submit", (event) => {
    event.preventDefault();
    resultThousand.innerText += sizeThousand.value * 1000 / angle.value + "м";
});
