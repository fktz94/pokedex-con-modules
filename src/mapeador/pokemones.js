import ListadoPokemones from '../entidades/listadoPokemones.js';
import Pokemon from '../entidades/pokemon.js';
import Movimientos from '../entidades/movimientos.js';

export default function mapearListadoPokemones(datosApi) {
  const {
    count: cantidad,
    next: urlSiguiente,
    previous: urlAnterior,
    results: pokemones,
  } = datosApi;

  return new ListadoPokemones(cantidad, urlSiguiente, urlAnterior, pokemones);
}

export function mapearPokemon(datosApi) {
  const {
    name: nombre,
    sprites: {
      other: {
        home: { front_default: imagen },
      },
    },
    types: tipos,
    weight: peso,
    abilities: habilidades,
    height: altura,
    moves: movimientos,
  } = datosApi;

  return new Pokemon(
    nombre,
    imagen,
    tipos.map((item) => item.type.name),
    peso,
    habilidades.map((item) => item.ability.name),
    altura,
    movimientos.map(
      (item) =>
        new Movimientos(
          item.move.name,
          item.version_group_details.map((v) => v.version_group.name),
        ),
    ),
  );
}
