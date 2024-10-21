// Seleciona o formulário e a tabela
const form = document.getElementById('cadastroForm');
const tabela = document.getElementById('usuariosTable').getElementsByTagName('tbody')[0];

// Função para adicionar uma nova linha na tabela
function adicionarUsuario(nome, email) {
    const novaLinha = tabela.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaEmail.textContent = email;
}

// Evento de envio do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault();  // Impede o recarregamento da página

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Adiciona o usuário na tabela
    adicionarUsuario(nome, email);

    // Limpa os campos do formulário
    form.reset();
});