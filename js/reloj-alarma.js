const d = document;

export function reloj(selecBegin, selecStop, selectTitle){
    const $botonInicio = d.querySelector(selecBegin),
        $botonParo = d.querySelector(selecStop),
        $titulo = d.querySelector(selectTitle);
    let refTiempo = null;

    d.addEventListener("click", e => {
        if(e.target.matches(selecBegin)){
            $botonInicio.setAttribute("disabled", true);
            $botonParo.removeAttribute("disabled");
            refTiempo = setInterval(() => {
                const tiempo = new Date();
                $titulo.textContent = tiempo.toLocaleTimeString();
            }, 1000);
        }
        if(e.target.matches(selecStop)){
            $botonInicio.removeAttribute("disabled");
            $botonParo.setAttribute("disabled", true);
            $titulo.textContent = "Reloj Digital y Alarma Sonora";
            clearInterval(refTiempo);
        }
    });
}

export function alarma(selecBegin, selecStop){
    const $botonInicio = d.querySelector(selecBegin),
        $botonParo = d.querySelector(selecStop);
}

