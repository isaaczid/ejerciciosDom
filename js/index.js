import { menuHamburguesa } from "./menu-hamburguesa.js";
import { reloj } from "./reloj-alarma.js";

document.addEventListener("DOMContentLoaded", e => {
    menuHamburguesa(".button--burguer", ".panel");
    reloj(".watch__button--begin", ".watch__button--stop", ".watch__title");
});