const d = document;
export const menuHamburguesa = (selecBoton, selecPanel) => {
    d.addEventListener("click", e => {
        const $boton = d.querySelector(selecBoton),
            $panel = d.querySelector(selecPanel);

        if(e.target.matches(selecBoton) || e.target.matches(`${selecBoton} *`)){
            $boton.classList.toggle("is-active");
            $panel.classList.toggle("panel--hide");
        }

        if(e.target.matches(`${selecPanel} *`)){
            $boton.classList.toggle("is-active");
            $panel.classList.toggle("panel--hide");
        }
    });
}