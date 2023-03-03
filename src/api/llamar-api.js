export const LINK = 'https://pokeapi.co/api/v2/pokemon';

export async function llamarListaPokemones(url) {
  return (await fetch(url)).json();
}

export async function llamarPokemonesIndividuales(id) {
  if (id === undefined) {
    throw new Error('Debe ingresar un id para llamar un pokemon');
  }
  const url = `${LINK}/${id}`;
  return (await fetch(url)).json();
}
