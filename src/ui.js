const botonIrAtras = document.getElementById('ir-atras');
const botonIrAdelante = document.getElementById('ir-adelante');
const botonIrPrincipio = document.getElementById('ir-principio');
const botonIrFinal = document.getElementById('ir-final');
const botonVolverAtras = document.getElementById('volver-atras');

export async function listarPokemones(listaDePokemones) {
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

export function asignarDireccionesALosBotones(previous, next, url) {
  if (previous === null) {
    botonIrAtras.classList.add('disabled');
  } else {
    botonIrAtras.href = previous;
    botonIrAtras.onclick();
    if (botonIrAtras.classList.contains('disabled'))
      botonIrAtras.classList.remove('disabled');
  }
  if (next === null) {
    botonIrAdelante.classList.add('disabled');
  } else {
    botonIrAdelante.href = next;
    if (botonIrAdelante.classList.contains('disabled'))
      botonIrAdelante.classList.remove('disabled');
  }
  botonVolverAtras.href = url;
}

export async function cambiarDePagina(pgAnterior, pgPosterior, callback) {
  if (pgAnterior === null) {
    botonIrAtras.onclick(() => '');
  } else {
    botonIrAtras.onclick(callback);
  }
}
