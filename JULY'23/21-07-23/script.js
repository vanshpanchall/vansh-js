let getBtn = document.querySelector("random");
let chars="abcdemghijklmnopqrstuvxyz012345678@#$&"
random.addEventListener("click", e => {
    document.querySelector("#pass").textContent= Math.floor(Math.random() * chars.length) +
    chars
})