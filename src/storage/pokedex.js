function obtenerOffsetLimit(url) {
  const offset = /offset=([0-9]+)/gi.exec(url).pop();
  const limit = /limit=([0-9]+)/gi.exec(url).pop();
  return `pokemon_${offset}_${limit}`;
}
function obtenerId(id) {
  return `pokemon_${id}`;
}

export function obtenerPokemonesDeLaLocalStorage(url) {
  const pokemones = JSON.parse(localStorage.getItem(obtenerOffsetLimit(url)));
  if (pokemones === null) {
    throw new Error('No se encontro el archivo en la local storage');
  }
  return pokemones;
}

export function obtenerPokemonDeLaLocalStorage(id) {
  const pokemon = JSON.parse(localStorage.getItem(obtenerId(id)));
  if (pokemon === null) {
    throw new Error('No se encontró el pokemon en la local storage');
  }
  return pokemon;
}

export function guardarPokemonesEnLaLocalStorage(pokemones, url) {
  if (typeof pokemones !== 'object') {
    throw new Error('Se debe guardar un objeto json');
  }

  localStorage.setItem(obtenerOffsetLimit(url), JSON.stringify(pokemones));
}

export function guardarPokemonEnLaLocalStorage(pokemon, id) {
  if (typeof pokemon !== 'object') {
    throw new Error('Se debe guardar un objeto json');
  }

  localStorage.setItem(obtenerId(id), JSON.stringify(pokemon));
}
