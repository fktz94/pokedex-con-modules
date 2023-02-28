import {
  LINK,
  llamarListaPokemones,
  // llamarPokemonesIndividuales,
} from './api/llamar-api.js';
import {
  vaciarLista,
  cantidadDePokemones,
  actualizaTextoCargando,
} from './ui/ui.js';
import listarPokemones from './ui/listarPokemones.js';
import manejarBotones from './ui/manejarBotones.js';

// async function cargarPokemon(id) {
//   const respuesta = await llamarPokemonesIndividuales(id);
//   mostrarPokemon(respuesta);
// }

async function cargarPagina(url) {
  vaciarLista();
  actualizaTextoCargando('Cargando...');

  const respuesta = await llamarListaPokemones(url);
  const {
    count: cantidad,
    next: urlSiguiente,
    previous: urlAnterior,
    results: pokemones,
  } = respuesta;

  cantidadDePokemones(cantidad);
  listarPokemones(pokemones, actualizaTextoCargando);

  manejarBotones(urlAnterior, urlSiguiente, cargarPagina);

  // asignarDireccionesALosBotones(respuesta.previous, respuesta.next);
  // funcionalizarBotones(cargarPagina, LINK);
  // getIdPokemon(cargarPokemon);
}

cargarPagina(LINK);
