const archivoInput = document.getElementById("archivoCSV");
const nombreArchivo = document.getElementById("nombreArchivo");
const columnasContainer = document.getElementById("columnasContainer");

const visorContainer = document.getElementById("visorContainer");
const tituloColumna = document.getElementById("tituloColumna");
const contenidoColumna = document.getElementById("contenidoColumna");

const copiarBtn = document.getElementById("copiarBtn");
const descargarBtn = document.getElementById("descargarBtn");
const limpiarBtn = document.getElementById("limpiarBtn");

let datosCSV = {};
let columnaActual = "";

archivoInput.addEventListener("change", leerArchivo);

function leerArchivo(e){

    const archivo = e.target.files[0];

    if(!archivo) return;

    nombreArchivo.textContent = archivo.name;

    const reader = new FileReader();

    reader.onload = function(event){

        procesarCSV(event.target.result);

    };

    reader.readAsText(archivo);
}

function procesarCSV(texto) {

    datosCSV = {};
    columnasContainer.innerHTML = "";

    const resultado = Papa.parse(texto, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: false
    });

    const filas = resultado.data;

    if (!filas.length) {
        alert("No se encontraron datos.");
        return;
    }

    const encabezados = Object.keys(filas[0]);

    encabezados.forEach(columna => {
        datosCSV[columna] = [];
    });

    filas.forEach(fila => {

        encabezados.forEach(columna => {

            let valor = fila[columna];

            if (valor === null || valor === undefined) {
                valor = "";
            }

            datosCSV[columna].push(
                String(valor).trim()
            );

        });

    });

    crearTarjetas();
}

function crearTarjetas(){

    Object.keys(datosCSV).forEach(columna=>{

        const tarjeta = document.createElement("div");

        tarjeta.className = "tarjeta-columna";

        tarjeta.innerHTML = `
            <h3>${columna}</h3>
            <div class="registros">
                ${datosCSV[columna].length} registros
            </div>
        `;

        tarjeta.addEventListener("click",()=>{

            columnaActual = columna;

            tituloColumna.textContent =
                `Contenido: ${columna}`;

            contenidoColumna.value =
            datosCSV[columna]
                .filter(v => v !== "")
                .join("\n");

            visorContainer.classList.remove("oculto");

            visorContainer.scrollIntoView({
                behavior:"smooth"
            });

        });

        columnasContainer.appendChild(tarjeta);

    });
}

copiarBtn.addEventListener("click",()=>{

    navigator.clipboard.writeText(
        contenidoColumna.value
    );

    copiarBtn.textContent = "✓ Copiado";

    setTimeout(()=>{
        copiarBtn.textContent = "📋 Copiar";
    },1200);

});

descargarBtn.addEventListener("click",()=>{

    const blob = new Blob(
        [contenidoColumna.value],
        {type:"text/plain"}
    );

    const enlace =
        document.createElement("a");

    enlace.href =
        URL.createObjectURL(blob);

    enlace.download =
        `${columnaActual}.txt`;

    enlace.click();

});

limpiarBtn.addEventListener("click",()=>{

    datosCSV = {};

    archivoInput.value = "";

    nombreArchivo.textContent = "";

    columnasContainer.innerHTML = "";

    visorContainer.classList.add("oculto");

    contenidoColumna.value = "";

    tituloColumna.textContent = "";

});