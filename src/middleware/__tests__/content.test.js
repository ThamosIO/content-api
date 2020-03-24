const HttpError = require('../../helpers/HttpError');
const players = require('../../mocks/players');
const content = require('../content');

jest.mock('node-fetch');

const fetch = require('node-fetch');

const CONTENT_URL = 'https://url';

const req = {
  CONTENT_URL,
};
const res = {};
const next = jest.fn();

const response = {
  json: () => ({
    players,
  }),
};

describe('content', () => {
  test('must throw if no URL is set in req', async () => {
    // `content` is async so the usual .toThrow doesn't work
    // hence this workaround
    let error;
    try {
      await content({}, res, next);
    } catch (e) {
      error = e;
    }
    expect(error).toEqual(new HttpError(500, 'Internal server error'));
  });

  test('must add an array of objects to the express req object', async () => {
    fetch.mockReturnValue(response);

    await content(req, res, next);

    expect(req).toEqual({ CONTENT_URL, players });
  });
});
