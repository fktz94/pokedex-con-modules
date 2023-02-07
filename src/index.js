import {
  LINK,
  llamarListaPokemones,
  llamarPokemonesIndividuales,
} from './llamar-api.js';
import {
  asignarDireccionesALosBotones,
  listarPokemones,
  funcionalizarBotones,
  getId,
  mostrarPokemon,
} from './ui.js';

async function cargarPokemon(id) {
  const respuesta = await llamarPokemonesIndividuales(id);
  mostrarPokemon(respuesta);
}

async function actualizar(url) {
  const respuesta = await llamarListaPokemones(url);
  await listarPokemones(respuesta.results);
  asignarDireccionesALosBotones(respuesta.previous, respuesta.next);
  funcionalizarBotones(actualizar, LINK);
  getId(cargarPokemon);
}

actualizar(LINK);
