export const LINK = 'https://pokeapi.co/api/v2/pokemon';

export async function llamarListaPokemones(url) {
  return (await fetch(url)).json();
}

// export async function llamarPokemonesIndividuales(id) {
//   const url = `${LINK}/${id}`;
//   return fetch(url).then((respuesta) => respuesta.json());
// }
