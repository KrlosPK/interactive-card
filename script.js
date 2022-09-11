// Elementos de las Tarjetas
const titularTarjetaEl = document.querySelector("#titularTarjeta");
const numeroTarjetaEl = document.querySelector("#numeroTarjeta");
const mesTarjetaEl = document.querySelector("#mesTarjeta");
const anoTarjetaEl = document.querySelector("#anoTarjeta");
const cvcEl = document.querySelector("#cvc");

// Inputs
const titularInput = document.querySelector("#titularInput");
const numeroTarjetaInput = document.querySelector("#numeroTarjetaInput");
const mesInput = document.querySelector("#mesInput");
const anoInput = document.querySelector("#anoInput");
const cvcInput = document.querySelector("#cvcInput");

// Buttons
const borrarNumeroTarjetaBtn = document.querySelector("#borrarNumeroTarjeta");
const confirmBtn = document.querySelector("#confirmBtn");
const continueBtn = document.querySelector("#continueBtn");

// Complete State
const containerCS = document.querySelector(".container");

// Funciones
const cambiarTextoTitular = () => {
    titularTarjetaEl.textContent = titularInput.value;
};
const cambiarTextoNumero = () => {
    numeroTarjetaEl.textContent = numeroTarjetaInput.value;
};
const borrarTextoNumero = () => {
    numeroTarjetaInput.value = "";
    numeroTarjetaEl.textContent = "";
};
const cambiarTextoMes = () => {
    mesTarjetaEl.textContent = mesInput.value;
};
const cambiarTextoAno = () => {
    anoTarjetaEl.textContent = anoInput.value;
};
const cambiarTextoCvc = () => {
    cvcEl.textContent = cvcInput.value;
};

const enviarFormulario = (e) => {
    e.preventDefault();

    const numeroTarjetaIU = document.querySelector("#numeroTarjetaInput").value;
    const titularTarjetaIU = document.querySelector("#titularInput").value;
    const mesIU = document.querySelector("#mesInput").value;
    const anoIU = document.querySelector("#anoInput").value;
    const cvcIU = document.querySelector("#cvcInput").value;

    // Validaciones para el Titular de la Tarjeta
    if (
        titularTarjetaIU === "" ||
        titularTarjetaIU === null ||
        /^\s+$/.test(titularTarjetaIU)
    ) {
        Swal.fire({
            icon: "error",
            title: "Inválido...",
            text: "El titular no puede estar vacío o lleno de espacios en blanco!",
        });
        return;
    }
    if (titularTarjetaIU.length < 2) {
        Swal.fire({
            icon: "error",
            title: "Inválido...",
            text: "El titular no puede ser menor a 2 caracteres!",
        });
        return;
    }
    // Fin Validaciones para el Titular de la Tarjeta

    // Validaciones para el Número de Tarjeta
    if (
        numeroTarjetaIU === "" ||
        numeroTarjetaIU === null ||
        numeroTarjetaIU.length !== 16 ||
        /^\s+$/.test(numeroTarjetaIU)
    ) {
        Swal.fire({
            icon: "error",
            title: "Inválido...",
            text: "El número de Tarjeta no puede estar vacío o incompleto!",
        });
        return;
    }
    if (isNaN(numeroTarjetaIU)) {
        Swal.fire({
            icon: "error",
            title: "Inválido...",
            text: "El número de Tarjeta no puede contener letras",
        });
        return;
    }
    // Fin Validaciones para el Número de Tarjeta

    // Validaciones para el mes de la Fecha de Expiración
    if (mesIU === "" || mesIU === null || /^\s+$/.test(mesIU)) {
        Swal.fire({
            icon: "error",
            title: "Inválido...",
            text: "El mes de la Tarjeta no puede estar vacío o lleno de espacios en blanco!",
        });
        return;
    }
    if (mesIU.length < 2) {
        Swal.fire({
            icon: "error",
            title: "Inválido...",
            text: "El mes de la Tarjeta no puede ser de 1 solo dígito",
        });
        return;
    }
    if (mesIU > 12) {
        Swal.fire({
            icon: "error",
            title: "Inválido...",
            text: "El mes de la Tarjeta no puede ser mayor que 12",
        });
        return;
    }
    if (isNaN(mesIU)) {
        Swal.fire({
            icon: "error",
            title: "Inválido...",
            text: "El mes de la Tarjeta no puede contener letras",
        });
        return;
    }
    // Fin Validaciones para el mes de la Fecha de Expiración

    // Validaciones para el año de la Fecha de Expiración
    if (anoIU === "" || anoIU === null || /^\s+$/.test(anoIU)) {
        Swal.fire({
            icon: "error",
            title: "Inválido...",
            text: "El año de la Tarjeta no puede estar vacío o lleno de espacios en blanco!",
        });
        return;
    }
    if (anoIU.length < 2) {
        Swal.fire({
            icon: "error",
            title: "Inválido...",
            text: "El año de la Tarjeta no puede ser de 1 solo dígito",
        });
        return;
    }
    if (anoIU < 23) {
        Swal.fire({
            icon: "error",
            title: "Inválido...",
            text: "El año de la Tarjeta no puede ser menor que 23",
        });
        return;
    }
    if (isNaN(anoIU)) {
        Swal.fire({
            icon: "error",
            title: "Inválido...",
            text: "El año de la Tarjeta no puede contener letras",
        });
        return;
    }
    // Fin Validaciones para el año de la Fecha de Expiración

    // Validaciones para el CVC
    if (cvcIU === "" || cvcIU === null || /^\s+$/.test(cvcIU)) {
        Swal.fire({
            icon: "error",
            title: "Inválido...",
            text: "El cvc de la Tarjeta no puede estar vacío o lleno de espacios en blanco",
        });
        return;
    }
    if (cvcIU.length !== 3) {
        Swal.fire({
            icon: "error",
            title: "Inválido...",
            text: "El cvc de la Tarjeta tiene que tener 3 números",
        });
        return;
    }
    if (isNaN(cvcIU)) {
        Swal.fire({
            icon: "error",
            title: "Inválido...",
            text: "El cvc de la Tarjeta no puede contener letras",
        });
        return;
    }
    // Fin Validaciones para el CVC

    containerCS.classList.remove("hidden");
};

const reiniciarFormulario = () => {
    location.reload();
};

// Eventos
confirmBtn.addEventListener("click", enviarFormulario);

continueBtn.addEventListener("click", reiniciarFormulario);

borrarNumeroTarjetaBtn.addEventListener("click", borrarTextoNumero);

titularInput.addEventListener("keyup", cambiarTextoTitular);
numeroTarjetaInput.addEventListener("keyup", cambiarTextoNumero);
mesInput.addEventListener("keyup", cambiarTextoMes);
anoInput.addEventListener("keyup", cambiarTextoAno);
cvcInput.addEventListener("keyup", cambiarTextoCvc);

titularInput.addEventListener("keydown", cambiarTextoTitular);
numeroTarjetaInput.addEventListener("keydown", cambiarTextoNumero);
mesInput.addEventListener("keydown", cambiarTextoMes);
anoInput.addEventListener("keydown", cambiarTextoAno);
cvcInput.addEventListener("keydown", cambiarTextoCvc);

cambiarTextoTitular();
cambiarTextoNumero();
cambiarTextoMes();
cambiarTextoAno();
cambiarTextoCvc();
