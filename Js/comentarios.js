const form = document.getElementById("comentarioForm");
const areaComentario = document.getElementById("comentario");
const zonaComentarios = document.getElementById("comentariosGuardados");
const borrarBtn = document.getElementById("borrarComentarios");


function cargarComentarios() {
    zonaComentarios.innerHTML = "<h3>Comentarios publicados:</h3>";

    const comentarios = JSON.parse(localStorage.getItem("comentariosEcoFood")) || [];

    if (comentarios.length === 0) {
        zonaComentarios.innerHTML += "<p class='text-muted'>Aún no hay comentarios.</p>";
        return;
    }

    comentarios.forEach(com => {
        const p = document.createElement("p");
        p.textContent = "• " + com;
        zonaComentarios.appendChild(p);
    });
}


form.addEventListener("submit", function(e) {
    e.preventDefault();

    const comentario = areaComentario.value.trim();

    if (comentario === "") {
        alert("Por favor, escribe un comentario antes de publicarlo.");
        return;
    }

    const comentarios = JSON.parse(localStorage.getItem("comentariosEcoFood")) || [];
    comentarios.push(comentario);

    localStorage.setItem("comentariosEcoFood", JSON.stringify(comentarios));

    areaComentario.value = "";
    cargarComentarios();
});


borrarBtn.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que quieres borrar todos los comentarios?")) {
        localStorage.removeItem("comentariosEcoFood");
        cargarComentarios();
    }
});

cargarComentarios();
