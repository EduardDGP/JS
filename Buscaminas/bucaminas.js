function obtenerInput(mensaje) {
    let input = prompt(mensaje);
    return input ? parseInt(input) : null;
}

function crearTablero(tamano) {
const tablero = [];
    for (let i = 0; i < tamano; i++) {
        const fila = Array(tamano).fill(0);
        tablero.push(fila);
    }
return tablero;
}

function colocarMinas(tablero, cantidadMinas) {
let minasColocadas = 0;
    while (minasColocadas < cantidadMinas) {
        const fila = Math.floor(Math.random() * tablero.length);
        const columna = Math.floor(Math.random() * tablero[0].length);
        if (tablero[fila][columna] !== '*') {
        tablero[fila][columna] = '*';
        minasColocadas++;
        }
    }
}

function imprimirTablero(tablero) {
    for (const fila of tablero) {
        console.log(fila.join(' '));
    }
}

function jugarBuscaminas() {
const tamano = obtenerInput('Introduce el número de casillas (cuadrado perfecto):');
if (!Number.isInteger(Math.sqrt(tamano))) {
    alert('El número de casillas debe ser un cuadrado perfecto. El juego ha terminado.');
    return;
}

const cantidadMinas = obtenerInput('Introduce el número de minas (no más de un tercio del total):');
if (cantidadMinas > tamano / 3) {
    alert('El número de minas no puede superar un tercio del total de casillas. El juego ha terminado.');
    return;
}

const tablero = crearTablero(Math.sqrt(tamano));
colocarMinas(tablero, cantidadMinas);

alert('¡Bienvenido al Buscaminas!\nUsa la consola para ver el estado del tablero.');
imprimirTablero(tablero);
}

jugarBuscaminas();
