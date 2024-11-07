// Função para obter dados da OpenWeatherMap
async function getWeatherData(city) {
    const apiKey = "c8aa43fe937d838bc890e96f9e3a8a0f"; // Insira sua chave aqui
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById("cityName").textContent = `Cidade: ${data.name}`;
            document.getElementById("temperature").textContent = `Temperatura: ${data.main.temp}°C`;
            document.getElementById("description").textContent = `Descrição: ${data.weather[0].description}`;
            document.getElementById("humidity").textContent = `Umidade: ${data.main.humidity}%`;

            document.getElementById("weatherData").classList.remove("hidden");
        } else {
            alert("Cidade não encontrada!");
        }
    } catch (error) {
        alert("Erro ao buscar dados de clima. Verifique sua conexão e tente novamente.");
        console.error("Erro ao buscar dados de clima:", error);
    }
}

// Evento para o botão de buscar clima
document.getElementById("getWeatherBtn")?.addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (city) {
        getWeatherData(city);
    } else {
        alert("Por favor, insira o nome de uma cidade.");
    }
});

// Modo Escuro
document.getElementById("toggleDarkMode")?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
