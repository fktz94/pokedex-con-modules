export function vaciarLista() {
  const pokemones = document.querySelectorAll('a');
  if (pokemones.length > 0) pokemones.forEach((pokemon) => pokemon.remove());
}

export function cantidadDePokemones(texto) {
  const cantidad = document.getElementById('cantidad-de-pokemones');
  cantidad.innerText = texto;
}

export function actualizaTextoCargando(texto) {
  const mensajeCargando = document.getElementById('mensaje-cargando');
  mensajeCargando.innerText = texto;
}
