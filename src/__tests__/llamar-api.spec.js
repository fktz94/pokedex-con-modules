/// <reference types="jest"/>

import {
  LINK,
  llamarListaPokemones,
  llamarPokemonesIndividuales,
  // llamarPokemonesIndividuales,
} from '../llamar-api.js';

beforeEach(() => {
  global.fetch = jest.fn();
});

test('llamar a un pokemon con url', () => {
  global.fetch.mockImplementationOnce(
    () =>
      new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r({});
        });
        resolve({ json: () => jsonPromise });
      }),
  );

  llamarListaPokemones('http://www.poke.com');
  expect(global.fetch).toHaveBeenCalledTimes(1);
});

test('llamar a un pokemon c/parametro x default', () => {
  global.fetch.mockImplementationOnce(
    () =>
      new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r({});
        });
        resolve({ json: () => jsonPromise });
      }),
  );

  llamarListaPokemones();
  expect(global.fetch).toHaveBeenCalledTimes(1);

  expect(global.fetch).toHaveBeenCalledWith(LINK);
});

test('llamar pokemon individual', () => {
  global.fetch.mockImplementationOnce(
    () =>
      new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r({});
        });
        resolve({ json: () => jsonPromise });
      }),
  );

  llamarPokemonesIndividuales('2');
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`${LINK}/2`);
});

test('llamar pokemon individual sin parametro', async () => {
  return expect(llamarPokemonesIndividuales()).rejects.toEqual(
    new Error('Debe ingresar un id para llamar un pokemon'),
  );
});
