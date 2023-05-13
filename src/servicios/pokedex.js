import {
  guardarPokemonEnLaLocalStorage,
  guardarPokemonesEnLaLocalStorage,
  obtenerPokemonDeLaLocalStorage,
  obtenerPokemonesDeLaLocalStorage,
} from '../storage/pokedex.js';

import {
  llamarListaPokemones,
  llamarPokemonesIndividuales,
} from '../api/llamar-api.js';
import mapearListadoPokemones, {
  mapearPokemon,
} from '../mapeador/pokemones.js';

export async function cargarPokemones(url) {
  try {
    return obtenerPokemonesDeLaLocalStorage(url);
  } catch (e) {
    const pokemonesData = await llamarListaPokemones(url);
    const pokemon = mapearListadoPokemones(pokemonesData);
    guardarPokemonesEnLaLocalStorage(pokemon, url);
    return pokemon;
  }
}

export async function cargarPokemonIndividual(id) {
  try {
    return obtenerPokemonDeLaLocalStorage(id);
  } catch (e) {
    const pokemonData = await llamarPokemonesIndividuales(id);
    const pokemon = mapearPokemon(pokemonData);
    guardarPokemonEnLaLocalStorage(pokemon, id);
    return pokemon;
  }
}
