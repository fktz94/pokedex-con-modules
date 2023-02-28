function ocultarGrillaPokemones() {
  document.getElementById('h2').classList.add('hidden');
  document.getElementById('grilla-de-pokemones').classList.add('hidden');
  document.getElementById('flechas').classList.add('hidden');
}

function mostrarHabilidadesPokemon(respuesta) {
  respuesta.types.forEach((caract, i) => {
    const tipo = caract.type.name;
    const tipoPokemon = document.getElementById('tipo-pokemon');
    const strong = document.createElement('strong');
    if (i === 0) {
      strong.textContent = tipo;
    } else {
      strong.textContent = `, ${tipo}`;
    }
    tipoPokemon.appendChild(strong);
  });

  const pesoPokemon = document.getElementById('peso-pokemon');
  const peso = document.createElement('strong');
  peso.textContent = respuesta.weight;
  pesoPokemon.append(peso);

  respuesta.abilities.forEach((caract, i) => {
    const habilidad = caract.ability.name;
    const habilidadPokemon = document.getElementById('habilidad-pokemon');
    const strong = document.createElement('strong');
    if (i === 0) {
      strong.textContent = habilidad;
    } else {
      strong.textContent = `, ${habilidad}`;
    }
    habilidadPokemon.appendChild(strong);
  });

  const alturaPokemon = document.getElementById('altura-pokemon');
  const altura = document.createElement('strong');
  altura.textContent = respuesta.height;
  alturaPokemon.append(altura);
}

export function mostrarPokemon(respuesta) {
  ocultarGrillaPokemones();
  const nombrePokemon = document.getElementById('nombre-pokemon');
  nombrePokemon.classList.remove('hidden');
  nombrePokemon.textContent = respuesta.name.toUpperCase();

  const imagenPokemon = document.getElementById('imagen-pokemon');
  imagenPokemon.classList.remove('hidden');
  imagenPokemon.src = `${respuesta.sprites.other.home.front_default}`;

  const dataPokemon = document.getElementById('data-pokemon');
  dataPokemon.classList.remove('hidden');
  mostrarHabilidadesPokemon(respuesta);
  botonVolverAtras.classList.remove('hidden');
}

export function getIdPokemon(callback) {
  const pokemones = document.getElementById('grilla-de-pokemones').childNodes;
  pokemones.forEach((pokemon) => {
    pokemon.addEventListener('click', (e) => {
      const id = e.target.attributes.id.value;
      callback(id);
    });
  });
}

function eliminarHijos(array) {
  array.forEach((item) => item.remove());
}

function ocultarPokemon() {
  document.getElementById('h2').classList.remove('hidden');
  document.getElementById('grilla-de-pokemones').classList.remove('hidden');
  document.getElementById('flechas').classList.remove('hidden');
  document.getElementById('nombre-pokemon').classList.add('hidden');
  document.getElementById('imagen-pokemon').classList.add('hidden');
  document.getElementById('data-pokemon').classList.add('hidden');

  const tipoPokemon = document.querySelectorAll('#tipo-pokemon strong');
  const habilidadPokemon = document.querySelectorAll(
    '#habilidad-pokemon strong',
  );
  eliminarHijos(tipoPokemon);
  eliminarHijos(habilidadPokemon);

  const pesoPokemon = document.querySelector('#peso-pokemon strong');
  const alturaPokemon = document.querySelector('#altura-pokemon strong');

  pesoPokemon.remove();
  alturaPokemon.remove();

  botonVolverAtras.classList.add('hidden');
}
