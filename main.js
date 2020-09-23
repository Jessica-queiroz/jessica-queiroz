const nome = prompt("Qual o seu nome?")
document.write("Olá " + nome);
const prova = prompt("Deseja fazer a prova?")
if (prova == "sim") {
    const pergunta1 = prompt("Quanto é 3 + 3\na:5\nb:6\nc:7")
    const pergunta2 = prompt("Quanto é 3 x 5\na:5\nb:2\nc:15")
    const pergunta3 = prompt("Quanto 10 / 2\na:5\nb:2\nc:3")
    if (pergunta1 == "b") {
        let pergunta = document.getElementById("resposta-1b");
        pergunta.textContent = ("Resposta 1 correta");
        console.log(pergunta1);
    } else {
        document.getElementById("Resposta-1")
        let pergunta = document.getElementById("resposta-1");
        pergunta.textContent = ("Resposta 1 incorreta")
        console.log(pergunta1);
    }

    if (pergunta2 == "c") {
        let pergunta = document.getElementById("resposta-2c");
        pergunta.textContent = ("Resposta 2 correta");
        console.log(pergunta2);
    } else {
        document.getElementById("Resposta-2")
        let pergunta = document.getElementById("resposta-2");
        pergunta.textContent = ("Resposta 2 incorreta")
        console.log(pergunta2);
    }

    if (pergunta3 == "a") {
        let pergunta = document.getElementById("resposta-3a");
        pergunta.textContent = ("Resposta 3 correta");
        console.log(pergunta3);
    } else {
        document.getElementById("Resposta-3")
        let pergunta = document.getElementById("resposta-3");
        pergunta.textContent = ("Resposta 3 incorreta")
        console.log(pergunta3);

    }

} else {
    document.write(alert(" Até logo"))
}
