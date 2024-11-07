// Obtém os elementos do formulário e os campos
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Lida com o envio do formulário
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Envia uma requisição POST para o servidor
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then((response) => response.json())
    .then((data) => {
        // Verifica se o login foi bem-sucedido
        if (data.message === 'Login bem-sucedido') {
            // Se o login for bem-sucedido, redireciona para a página inicial
            window.location.href = 'index.html'; // Substitua com o caminho correto da sua página inicial
        } else {
            alert('Usuário ou senha inválidos');
        }
    })
    .catch((error) => {
        console.error('Erro na requisição:', error);
    });
});
