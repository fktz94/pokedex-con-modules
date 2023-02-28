// const botonIrFinal = document.getElementById('ir-final');
// const botonIrPrincipio = document.getElementById('ir-principio');
// const botonVolverAtras = document.getElementById('volver-atras');

function manejarCambioPagina(e, callbackPaginaSeleccionada) {
  e.preventDefault();
  const { target } = e;
  callbackPaginaSeleccionada(target.href);
}

export default function manejarBotones(
  urlAnterior,
  urlSiguiente,
  callbackPaginaSeleccionada = () => {},
) {
  const $botonIrAtras = document.getElementById('ir-atras');
  if (urlAnterior === null) {
    $botonIrAtras.classList.add('disabled');
  } else {
    $botonIrAtras.classList.remove('disabled');
  }

  const $botonIrAdelante = document.getElementById('ir-adelante');
  $botonIrAdelante.href = urlSiguiente;
  if (urlSiguiente === null) {
    $botonIrAdelante.classList.add('disabled');
  } else {
    $botonIrAdelante.classList.remove('disabled');
  }

  $botonIrAdelante.addEventListener('click', (e) =>
    manejarCambioPagina(e, callbackPaginaSeleccionada),
  );
}

/*
function habilitarYDeshabilitarBotones(previous, next) {
  if (previous === null) {
    botonIrPrincipio.classList.add('disabled');
    botonIrAtras.classList.add('disabled');
  } else {
    botonIrPrincipio.classList.remove('disabled');
    botonIrAtras.classList.remove('disabled');
  }
  if (next === null) {
    botonIrAdelante.classList.add('disabled');
    botonIrFinal.classList.add('disabled');
  } else {
    botonIrAdelante.classList.remove('disabled');
    botonIrFinal.classList.remove('disabled');
  }
}

export function asignarDireccionesALosBotones(previous, next) {
  if (!(previous === null)) {
    botonIrAtras.href = previous;
  } else {
    botonIrAtras.href = undefined;
  }
  if (!(next === null)) {
    botonIrAdelante.href = next;
  } else {
    botonIrAdelante.href = undefined;
  }
  habilitarYDeshabilitarBotones(previous, next);
}

export function funcionalizar(callback, LINK) {
  if (botonIrPrincipio.classList.contains('disabled')) {
    botonIrPrincipio.addEventListener('click', () => {});
  } else {
    botonIrPrincipio.addEventListener('click', () => {
      callback(LINK);
    });
  }

  if (botonIrAtras.classList.contains('disabled')) {
    botonIrAtras.addEventListener('click', () => {});
  } else {
    botonIrAtras.addEventListener('click', (e) => {
      callback(e.target.href);
    });
  }

  // Por mas que el href de botonIrAdelante sea undefined (null), sigue llamando a la Pag1.
  // ( por los eventListeners en el stack?)

  if (botonIrAdelante.classList.contains('disabled')) {
    botonIrAdelante.addEventListener('click', () => {});
  } else {
    botonIrAdelante.addEventListener('click', (e) => {
      callback(e.target.href);
    });
  }

  if (botonIrFinal.classList.contains('disabled')) {
    botonIrFinal.addEventListener('click', () => {});
  } else {
    botonIrFinal.addEventListener('click', () => {
      callback(`${LINK}?limit=19&offset=1260`);
    });
  }

  botonVolverAtras.addEventListener('click', ocultarPokemon);
}
*/
