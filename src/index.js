import { llamarListaPokemones } from './llamar-api.js';
import {
  asignarDireccionesALosBotones,
  listarPokemones,
  funcionalizarBotones,
} from './ui.js';

async function actualizar(url) {
  const respuesta = await llamarListaPokemones(url);
  await listarPokemones(respuesta.results);
  asignarDireccionesALosBotones(respuesta.previous, respuesta.next);
  funcionalizarBotones(actualizar);
}

async function cargar() {
  const respuesta = await llamarListaPokemones();
  await listarPokemones(respuesta.results);
  asignarDireccionesALosBotones(respuesta.previous, respuesta.next);
  funcionalizarBotones(actualizar);
}
cargar();
