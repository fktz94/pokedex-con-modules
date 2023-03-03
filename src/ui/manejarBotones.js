function manejarCambioPagina(e, callbackPaginaSeleccionada = () => {}) {
  const { target } = e;
  callbackPaginaSeleccionada(target.href);
}

export default function manejarBotones(
  urlAnterior,
  urlSiguiente,
  callbackPaginaSeleccionada = () => {},
) {
  const $botonIrPrincipio = document.getElementById('ir-principio');
  const $botonIrAtras = document.getElementById('ir-atras');
  const $botonIrAdelante = document.getElementById('ir-adelante');
  const $botonIrFinal = document.getElementById('ir-final');

  $botonIrPrincipio.href =
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';
  $botonIrAtras.href = urlAnterior;
  $botonIrAdelante.href = urlSiguiente;
  $botonIrFinal.href = 'https://pokeapi.co/api/v2/pokemon?offset=1260&limit=19';

  if (urlAnterior === null) {
    $botonIrPrincipio.classList.add('disabled');
    $botonIrAtras.classList.add('disabled');
    $botonIrPrincipio.onclick = () => {};
    $botonIrAtras.onclick = () => {};
  } else {
    $botonIrPrincipio.classList.remove('disabled');
    $botonIrAtras.classList.remove('disabled');
    $botonIrPrincipio.onclick = (e) => {
      manejarCambioPagina(e, callbackPaginaSeleccionada);
    };
    $botonIrAtras.onclick = (e) => {
      manejarCambioPagina(e, callbackPaginaSeleccionada);
    };
  }

  if (urlSiguiente === null) {
    $botonIrAdelante.classList.add('disabled');
    $botonIrFinal.classList.add('disabled');
    $botonIrAdelante.onclick = () => {};
    $botonIrFinal.onclick = () => {};
  } else {
    $botonIrAdelante.classList.remove('disabled');
    $botonIrFinal.classList.remove('disabled');
    $botonIrAdelante.onclick = (e) => {
      manejarCambioPagina(e, callbackPaginaSeleccionada);
    };
    $botonIrFinal.onclick = (e) => {
      manejarCambioPagina(e, callbackPaginaSeleccionada);
    };
  }
}
