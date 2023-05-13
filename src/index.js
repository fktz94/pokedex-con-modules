import { LINK } from './api/llamar-api.js';
import {
  vaciarLista,
  cantidadDePokemones,
  actualizaTextoCargando,
} from './ui/ui.js';
import listarPokemones from './ui/listarPokemones.js';
import manejarBotones from './ui/manejarBotones.js';
import mostrarPokemon from './ui/mostrarPokemon.js';
import {
  cargarPokemones,
  cargarPokemonIndividual,
} from './servicios/pokedex.js';

async function cargarPokemon(id) {
  const respuesta = await cargarPokemonIndividual(id);
  mostrarPokemon(respuesta);
}

async function cargarPagina(url = `${LINK}?offset=0&limit=20`) {
  vaciarLista();
  actualizaTextoCargando('Cargando...');

  const respuesta = await cargarPokemones(url);
  const { cantidad, urlSiguiente, urlAnterior, pokemones } = respuesta;

  cantidadDePokemones(cantidad);
  listarPokemones(pokemones, actualizaTextoCargando, cargarPokemon);

  manejarBotones(urlAnterior, urlSiguiente, cargarPagina);
}

cargarPagina();
