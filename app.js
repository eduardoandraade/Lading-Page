// select The Elements
var botão_alterar_tema;
var container_pai;
var empresa_bar_menu;


function declare(){
    botão_alterar_tema = document.querySelector(".botão-alterar-tema");
    container_pai = document.querySelector(".container-pai");
    empresa_bar_menu = document.querySelector(".empresa-bar-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function alterarTema() {
    // clone the wrapper
    dark = !dark;
    console.log(dark);
    let clone = container_pai.cloneNode(true);
    if(dark) {
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else {
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    document.body.classList.add("stop-scolling");

    clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scolling");
        container_pai.remove();
        clone.classList.remove("copy");
        // Reset Variables
        declare();
        events();
    });

}

function events() {
    botão_alterar_tema.addEventListener("click", alterarTema);
    empresa-bar-menu.addEventListener("click", () => {
        container_pai.classList.toggle("active");
    });
}

events();
