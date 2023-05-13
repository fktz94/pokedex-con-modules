function mostrarMovimientos(movimientos) {
  document.getElementById('data-pokemon').classList.add('hidden');
  document.getElementById('volver-atras').classList.add('hidden');
  document.getElementById('contenedor-movimientos').classList.remove('hidden');

  const $salir = document.getElementById('salir');
  $salir.onclick = () => {
    document.getElementById('data-pokemon').classList.remove('hidden');
    document.getElementById('volver-atras').classList.remove('hidden');
    document.getElementById('contenedor-movimientos').classList.add('hidden');
    document.getElementById('movimientos').innerHTML = '';
  };

  const $divMovimientos = document.getElementById('movimientos');

  movimientos.forEach((item) => {
    const $contenedor = document.createElement('div');
    $contenedor.classList = 'my-2';
    const { nombre, movimiento } = item;

    const $nombre = document.createElement('span');
    $nombre.textContent = `${nombre.toUpperCase()} : `;
    $nombre.classList = 'font-black';
    $contenedor.appendChild($nombre);

    const $movimientos = document.createElement('span');
    $movimientos.textContent = movimiento.join(', ');
    $movimientos.classList = 'font-mono';
    $contenedor.appendChild($movimientos);

    $divMovimientos.appendChild($contenedor);
  });
}

function mostrarHabilidadesPokemon(respuesta) {
  const { tipos, peso, habilidades, altura, movimientos } = respuesta;

  tipos.forEach((tipo, i) => {
    const tipoPokemon = document.getElementById('tipo-pokemon');
    const strong = document.createElement('strong');
    if (i === 0) {
      strong.textContent = tipo;
    } else {
      strong.textContent = `, ${tipo}`;
    }
    tipoPokemon.appendChild(strong);
  });

  const pesoPokemon = document.getElementById('peso-pokemon');
  const textoPeso = document.createElement('strong');
  textoPeso.textContent = peso;
  pesoPokemon.append(textoPeso);

  habilidades.forEach((habilidad, i) => {
    const habilidadPokemon = document.getElementById('habilidad-pokemon');
    const strong = document.createElement('strong');
    if (i === 0) {
      strong.textContent = habilidad;
    } else {
      strong.textContent = `, ${habilidad}`;
    }
    habilidadPokemon.appendChild(strong);
  });

  const alturaPokemon = document.getElementById('altura-pokemon');
  const textoAltura = document.createElement('strong');
  textoAltura.textContent = altura;
  alturaPokemon.append(textoAltura);

  const $verMovimientos = document.getElementById('ver-movimientos');
  $verMovimientos.onclick = () => {
    mostrarMovimientos(movimientos);
  };
}

function eliminarHijos(array) {
  array.forEach((item) => item.remove());
}

function ocultarPokemon(botonVolverAtras) {
  document.getElementById('tablero-pokemones').classList.remove('hidden');
  document.getElementById('flechas').classList.remove('hidden');
  document.getElementById('data-pokemon').classList.add('hidden');

  const tipoPokemon = document.querySelectorAll('#tipo-pokemon strong');
  const habilidadPokemon = document.querySelectorAll(
    '#habilidad-pokemon strong',
  );
  const pesoPokemon = document.querySelector('#peso-pokemon strong');
  const alturaPokemon = document.querySelector('#altura-pokemon strong');

  eliminarHijos(tipoPokemon);
  eliminarHijos(habilidadPokemon);
  pesoPokemon.remove();
  alturaPokemon.remove();

  botonVolverAtras.classList.add('hidden');
}

export default function mostrarPokemon(pokemon) {
  document.getElementById('tablero-pokemones').classList.add('hidden');
  document.getElementById('flechas').classList.add('hidden');

  const { nombre, imagen } = pokemon;

  const nombrePokemon = document.getElementById('nombre-pokemon');
  nombrePokemon.classList.remove('hidden');
  nombrePokemon.textContent = nombre.toUpperCase();

  const imagenPokemon = document.getElementById('imagen-pokemon');
  imagenPokemon.classList.remove('hidden');
  imagenPokemon.src = imagen;

  const dataPokemon = document.getElementById('data-pokemon');
  dataPokemon.classList.remove('hidden');

  const $botonVolverAtras = document.getElementById('volver-atras');
  $botonVolverAtras.classList.remove('hidden');
  $botonVolverAtras.onclick = () => ocultarPokemon($botonVolverAtras);

  mostrarHabilidadesPokemon(pokemon);
}
