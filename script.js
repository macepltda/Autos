// "Base de datos" simple
const autos = {
    "ABCD12": { bencina: "40 litros", kilometraje: "120.000 km" },
    "ZXCV98": { bencina: "20 litros", kilometraje: "85.000 km" }
};

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

function limpiar() {
    document.getElementById("matricula").value = "";
    document.getElementById("resultado").innerHTML = "";
}
