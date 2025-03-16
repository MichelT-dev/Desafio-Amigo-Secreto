let nomes = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nomeInput = input.value;

    if (nomeInput === "") {
        alert("Escreva um nome Válido!");
        return;
    }

    if (nomes.includes(nomeInput)) {
        alert("Nome já adicionado!");
        return;
    }

    nomes.push(nomeInput);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    nomes.forEach(nomeInput => {
        let li = document.createElement("li");
        li.textContent = "-" + nomeInput;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert("Adicione ao menos um nome para sortear!");
        return;
    }
    
    let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado é: ${sorteado}</li>`;
}