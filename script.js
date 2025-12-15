let autos = {};

fetch('autos.json')
  .then(res => res.json())
  .then(data => {
    autos = data;
  })
  .catch(err => {
    console.error("Error al cargar los datos:", err);
  });

function buscarAuto() {
    const matriculaInput = document.getElementById("matricula");
    const matricula = matriculaInput.value.toUpperCase();
    const resultado = document.getElementById("resultado");

    if (autos[matricula]) {
        let color = autos[matricula].bencina.includes("20") ? "auto-falta" : "auto-ok";
        resultado.innerHTML =
            `<span class="${color}">Bencina: ${autos[matricula].bencina}<br>` +
            `Kilometraje: ${autos[matricula].kilometraje}</span>`;
    } else {
        resultado.innerHTML = "❌ Auto no encontrado";
    }
}

function borrar() {
    document.getElementById("matricula").value = "";
    document.getElementById("resultado").innerHTML = "";
}

const inputMatricula = document.getElementById("matricula");
inputMatricula.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
       event.preventDefault();
        buscarAuto();
    }
});