const app = require('express')();
const helmet = require('helmet');
const bodyParser = require('body-parser');

const { content, errorHandler, errorCatcher } = require('./src/middleware');
const players = require('./src/routes');

const { PORT: port, HOST: host, CONTENT_URL } = process.env;

app.use(helmet());
app.use(bodyParser.json());

// Making CONTENT_URL available for content
// Passing it in req allows to test it without mocking process.env
app.use((req, res, next) => {
  req.CONTENT_URL = CONTENT_URL;
  next();
});

// Your data source middleware
app.use(errorCatcher(content));

app.use('/players', players);

app.use(errorHandler);

app.listen(port, host, function() {
  console.log(`✅ API available on ${host}:${port}`);
});
