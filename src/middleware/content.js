const fetch = require('node-fetch');
const HttpError = require('../helpers/HttpError');

async function content(req, res, next) {
  if (!req.CONTENT_URL) {
    throw new HttpError(500, 'Internal server error');
  }
  const response = await fetch(req.CONTENT_URL, { method: 'GET' });
  const { players } = await response.json();

  // Making the content available for further middleware
  req.players = players;

  next();
}

module.exports = content;
