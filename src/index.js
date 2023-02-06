import { LINK, llamarListaPokemones } from './llamar-api.js';
import {
  asignarDireccionesALosBotones,
  listarPokemones,
  funcionalizarBotones,
} from './ui.js';

async function cargar(url) {
  const respuesta = await llamarListaPokemones(url);
  await listarPokemones(respuesta.results);
  asignarDireccionesALosBotones(respuesta.previous, respuesta.next);
  funcionalizarBotones(cargar, LINK);
}
cargar(LINK);
