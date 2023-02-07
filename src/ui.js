const botonIrPrincipio = document.getElementById('ir-principio');
const botonIrAtras = document.getElementById('ir-atras');
const botonIrAdelante = document.getElementById('ir-adelante');
const botonIrFinal = document.getElementById('ir-final');

function vaciarLista() {
  const pokemones = document.querySelectorAll('a');
  if (pokemones.length > 0) pokemones.forEach((pokemon) => pokemon.remove());
}

export async function listarPokemones(listaDePokemones) {
  vaciarLista();
  listaDePokemones.forEach((pokemon) => {
    const indice = pokemon.url.split('/')[6];
    const elemento = document.createElement('a');
    elemento.classList.add(
      'pokemon',
      'px-6',
      'py-4',
      'rounded-full',
      'shadow',
      'bg-slate-100/30',
      'shadow-black',
    );
    elemento.id = `${indice}`;
    elemento.textContent = `${
      indice < 10 ? `0${indice}` : indice
    }) ${pokemon.name.toUpperCase()}`;
    document.getElementById('grilla-de-pokemones').appendChild(elemento);
  });
}

function habilitarYDeshabilitarBotones(previous, next) {
  if (previous === null) {
    botonIrPrincipio.classList.add('disabled');
    botonIrAtras.classList.add('disabled');
  } else {
    botonIrPrincipio.classList.remove('disabled');
    botonIrAtras.classList.remove('disabled');
  }
  if (next === null) {
    botonIrAdelante.classList.add('disabled');
    botonIrFinal.classList.add('disabled');
  } else {
    botonIrAdelante.classList.remove('disabled');
    botonIrFinal.classList.remove('disabled');
  }
}
export function asignarDireccionesALosBotones(previous, next) {
  if (!(previous === null)) {
    botonIrAtras.href = previous;
  } else {
    botonIrAtras.href = undefined;
  }
  if (!(next === null)) {
    botonIrAdelante.href = next;
  } else {
    botonIrAdelante.href = undefined;
  }
  habilitarYDeshabilitarBotones(previous, next);
}

// La siguiente función me genera un pilón de eventListeners, de manera acumulativa y exponencial

export function funcionalizarBotones(callback, LINK) {
  if (botonIrPrincipio.classList.contains('disabled')) {
    botonIrPrincipio.addEventListener('click', () => '');
  } else {
    botonIrPrincipio.addEventListener('click', () => {
      callback(LINK);
    });
  }

  if (botonIrAtras.classList.contains('disabled')) {
    botonIrAtras.addEventListener('click', () => '');
  } else {
    botonIrAtras.addEventListener('click', (e) => {
      callback(e.target.href);
    });
  }

  // Por mas que el href sea undefined, sigue llamando a la Pag1.
  // ( por los eventListeners en el stack?)

  if (botonIrAdelante.classList.contains('disabled')) {
    botonIrAdelante.addEventListener('click', () => '');
  } else {
    botonIrAdelante.addEventListener('click', (e) => {
      callback(e.target.href);
    });
  }

  if (botonIrFinal.classList.contains('disabled')) {
    botonIrFinal.addEventListener('click', () => '');
  } else {
    botonIrFinal.addEventListener('click', () => {
      callback(`${LINK}?limit=19&offset=1260`);
    });
  }
}

// Pokemón por separado

export function mostrarPokemon(respuesta) {
  const nombrePokemon = document.getElementById('nombre-pokemon');
  nombrePokemon.classList.remove('hidden');
  nombrePokemon.textContent = respuesta.name.toUpperCase();

  const imagenPokemon = document.getElementById('imagen-pokemon');
  imagenPokemon.classList.remove('hidden');
  imagenPokemon.src = `${respuesta.sprites.other.home.front_default}`;

  //   document.getElementById('data-pokemon').removeClass('hidden');
}

export function getId(callback) {
  const pokemones = document.getElementById('grilla-de-pokemones').childNodes;
  pokemones.forEach((pokemon) => {
    pokemon.addEventListener('click', (e) => {
      const id = e.target.attributes.id.value;
      callback(id);
    });
  });
}
