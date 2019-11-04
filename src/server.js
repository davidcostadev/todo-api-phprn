const { server } = require('fastexpress');
const cors = require('cors');
const routes = require('./routes');

server.use(cors({ origin: '*' }));

server.use(routes);

const port = parseInt(process.env.PORT, 10) || 3000;

server.listen(port);

module.exports = server;
