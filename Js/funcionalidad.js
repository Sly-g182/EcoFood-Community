window.onload = function() {
    // Array de textos que se mostrarán aleatoriamente
    const texts = [
        "El desperdicio alimentario genera aproximadamente 8-10% de las emisiones mundiales de gases de efecto invernadero",
        "Más de 820 millones de personas sufren inseguridad alimentaria en el mundo",
        "Reducir en solo un 25% el desperdicio alimentario global podría alimentar a 870 millones de personas",
        "1/3 de los alimentos producidos globalmente se desperdician"
    ];

    // Selecciona un texto aleatorio
    const randomText = texts[Math.floor(Math.random() * texts.length)];

    // Cambia el texto en el div con id 'movable-text'
    document.getElementById("movable-text").innerText = randomText;
};


