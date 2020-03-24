const HttpError = require('./helpers/HttpError');

function get(req, res) {
  if (!req.params.id || parseInt(req.params.id, 10) === NaN) {
    throw new HttpError(422, 'Unprocessable entity: ID parameter is invalid');
  }

  const requestId = parseInt(req.params.id, 10);
  const player = req.players.find(({ id }) => id === requestId);

  if (!player) {
    throw new HttpError(404, 'Player not found.');
  }

  res.send(player);
}

function list({ players = [] }, res) {
  // Sort players by id ASCENDING
  players.sort((a, b) => a.id - b.id);
  res.send(players);
}

module.exports = { get, list };
