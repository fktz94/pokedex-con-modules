import { LINK, llamarListaPokemones } from './llamar-api.js';
import {
  asignarDireccionesALosBotones,
  cambiarDePagina,
  listarPokemones,
} from './ui.js';

async function cargar() {
  const respuesta = await llamarListaPokemones();
  await listarPokemones(respuesta.results);
  asignarDireccionesALosBotones(respuesta.previous, respuesta.next, LINK);
  cambiarDePagina(respuesta.previous, respuesta.next);
}
cargar();

export default async function actualizar(url) {
  const respuesta = await llamarListaPokemones(url);
  await listarPokemones(respuesta.results);
}
