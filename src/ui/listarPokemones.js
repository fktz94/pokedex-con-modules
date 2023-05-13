export default async function listarPokemones(
  listaDePokemones,
  actualizaTextoCargando = () => {},
  cargarPokemon = () => {},
) {
  actualizaTextoCargando('');
  listaDePokemones.forEach((pokemon) => {
    const { name: nombre, url } = pokemon;
    const indice = url.split('/')[6];
    const elemento = document.createElement('a');
    elemento.classList.add(
      'pokemon',
      'px-6',
      'py-4',
      'rounded-full',
      'shadow',
      'bg-slate-100/30',
      'shadow-black',
    );
    elemento.id = `${nombre}`;
    elemento.textContent = `${
      indice < 10 ? `0${indice}` : indice
    }) ${nombre.toUpperCase()}`;
    document.getElementById('grilla-de-pokemones').appendChild(elemento);

    elemento.onclick = (e) => {
      const { target } = e;
      cargarPokemon(target.id);
    };
  });
}
