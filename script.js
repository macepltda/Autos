let autos = {};

fetch('autos.json')
  .then(res => res.json())
  .then(data => {
    autos = data;
  })
  .catch(err => {
    console.error("Error al cargar los datos:", err);
  });

function buscarVehiculo() {
    const matriculaInput = document.getElementById("matricula");
    const matricula = matriculaInput.value.toUpperCase();
    const resultado = document.getElementById("resultado");

    if (autos[matricula]) {
        let color = autos[matricula].bencina.includes("20") ? "auto-falta" : "auto-ok";
        resultado.innerHTML = `
            <span class="${color}">✅ Vehículo encontrado</span>
            <table>
                <tr>
                    <th>Bencina</th>
                    <th>Kilometraje</th>
                </tr>
                <tr>
                    <td>${autos[matricula].bencina}</td>
                    <td>${autos[matricula].kilometraje}</td>
                </tr>
            </table>
        `;
    } else {
        resultado.innerHTML = "❌ Vehículo no encontrado";
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
        buscarVehiculo();
    }
});
