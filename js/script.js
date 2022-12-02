/*Inserir votos*/
function inserirVotos(valor) {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;

    /*Se o primeiro input estiver vazio inserir o valor nele*/
    if (valor1 == "") {
        document.getElementById("campo1").value = valor;

    } else if (valor2 == "") {
        document.getElementById("campo2").value = valor;
    }
}

/*Apagando os dados dos campos 1 e 2*/
function corrigirVotos() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}


/* votar */

function votar() {
    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);
    /* Transformando o número para contabilizar a votação como deve ser */
    var numeroCandidato = (valor1 * 10) + valor2;

    /* Verificar se existe o candidato no storage */
    if (sessionStorage.getItem(numeroCandidato) !== null) {
        votos = parseInt(sessionStorage.getItem(numeroCandidato)) + 1;
        sessionStorage.setItem(numeroCandidato, votos)
    } else {
        sessionStorage.setItem(numeroCandidato, 1);
    }

 
    alert("Confirmado voto no candidato " + numeroCandidato)
    corrigirVotos()
}


/* audio ao clicar em confirmar */

const buttonPlay = document.getElementById("btn-confirm");
buttonPlay.addEventListener("click", function () {
    const audio = document.querySelector("audio")
    audio.play()
})





/* voto em branco */
function votarBranco(){
    var contador = 0;
    var votouBranco = document.getElementById("btn-blank");

    votouBranco.onclick = function () {
        contador++;
        console.log(contador);
        alert("Você votou em branco!");
    }

}



/* Resultado */
function exibirResultado() {
    document.getElementById("resultado").innerHTML = ""
    for (i = 0; i < 100; i++) {

      

        if (sessionStorage.getItem(i) !== null) {
            document.getElementById("resultado").innerHTML += "Candidato " + i + " tem " + sessionStorage.getItem(i) + " votos<br/>";
            
        } 


    }
}

 
