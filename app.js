// select The Elements
var botão_alterar_tema;
var container_pai;

function declare(){
    var botão_alterar_tema = document.querySelector(".botão-alterar-tema");
    var container_pai = document.querySelector(".container-pai");
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

    clone.addEventListener("animationend", () => {
        container_pai.remove();
        clone.classList.remove("copy");
        // Reset Variables
        declare();
        
    });

}


botão_alterar_tema.addEventListener("click", alterarTema);


