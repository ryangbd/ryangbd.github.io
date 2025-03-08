function showprojeto() {
    let home = document.querySelector(".inicio");
    let projeto = document.querySelector(".projetos");

    home.style.animation = "sair 1s ease";
    home.style.opacity = "0";
    home.style.transform = "translateX(20%)";

    setTimeout(() => {
        home.style.display = "none";
        projeto.style.display = "flex";
        projeto.style.animation = "chegar 1s ease";
        projeto.style.opacity = "1";
        projeto.style.transform = "translateX(0)";
    }, 100);
}

function voltar() {
    let home = document.querySelector(".inicio");
    let projeto = document.querySelector(".projetos");

    projeto.style.animation = "sair 1s ease";
    projeto.style.opacity = "0";
    projeto.style.transform = "translateX(20%)";

    setTimeout(() => {
        projeto.style.display = "none";
        home.style.display = "flex";
        home.style.animation = "chegar 1s ease";
        home.style.opacity = "1";
        home.style.transform = "translateX(0)";
    }, 200);
}

function showcontatos(){
    let fundocontato = document.querySelector(".fundocontato");
    fundocontato.style.display='flex'
    fundocontato.addEventListener("click", voltarcontatos);
}
function voltarcontatos(){
    let fundocontato = document.querySelector(".fundocontato")
    fundocontato.style.display='none'
}