window.onload = function() {

    const texts = [
        "El desperdicio alimentario genera aproximadamente 8-10% de las emisiones mundiales de gases de efecto invernadero",
        "Más de 820 millones de personas sufren inseguridad alimentaria en el mundo",
        "Reducir en solo un 25% el desperdicio alimentario global podría alimentar a 870 millones de personas",
        "1/3 de los alimentos producidos globalmente se desperdician",
        "El 20% de la población mundial no tiene acceso a agua potable (ONU, 2021).",
        "La contaminación del aire causa alrededor de 7 millones de muertes prematuras al año",
        "Cada año, más de 8 millones de toneladas de plástico terminan en los océanos",
        "El 40% de la tierra agrícola en el mundo se destina a producir alimentos que nunca se consumen",
    ];

    const randomText = texts[Math.floor(Math.random() * texts.length)];

    document.getElementById("movable-text").innerText = randomText;
};





function toggleTexto(boton) {
    var textoAdicional = boton.previousElementSibling;

    if (textoAdicional.style.display === "none" || textoAdicional.style.display === "") {
        textoAdicional.style.display = "block";
        boton.textContent = "- INFO";  
    } else {
        textoAdicional.style.display = "none";
        boton.textContent = "+ INFO"; 
    }
}




