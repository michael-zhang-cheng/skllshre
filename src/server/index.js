const express = require('express');
const app = express();
const cors = require('cors');
const config = require('../config.js');
const port = config.server_port;
app.use([cors(), express.json()]);

const {
  redirectURL,
  createURLs
} = require('./routes/url');

app.post('/', createURLs);
app.get('/:hash', redirectURL);

app.listen(port, () => console.log(`url shortender listening at port ${port}`));
