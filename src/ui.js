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
  if (!(previous === null)) botonIrAtras.href = previous;
  if (!(next === null)) botonIrAdelante.href = next;
  habilitarYDeshabilitarBotones(previous, next);
}

export function funcionalizarBotones(callback, LINK) {
  botonIrPrincipio.addEventListener('click', () => {
    callback(LINK);
  });
  botonIrAtras.addEventListener('click', (e) => {
    callback(e.target.href);
  });
  botonIrAdelante.addEventListener('click', (e) => {
    callback(e.target.href);
  });
  botonIrFinal.addEventListener('click', () => {
    callback(`${LINK}?limit=19&offset=1260`);
  });
}
