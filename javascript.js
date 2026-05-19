async function enviar() {

    const nome = document.getElementById('nome').value;

    const resposta = await fetch('http://localhost:4000/saudacao', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome })
    });

    const dados = await resposta.json();

    document.getElementById('resultado').innerText =
        dados.mensagem;
}