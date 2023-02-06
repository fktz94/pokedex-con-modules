export const LINK = 'https://pokeapi.co/api/v2/pokemon';

export async function llamarListaPokemones(url = LINK) {
  return fetch(url).then((respuesta) => respuesta.json());
}
