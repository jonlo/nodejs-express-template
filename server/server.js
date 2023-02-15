require('./config/config')
const express = require('express')
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const helmet = require("helmet");
const morgan = require('morgan')
const debug = require('debug')('*')

morgan.token('id', function getId(req) {
    return req.id
})

app.use(cors());
app.use(helmet());
app.use(morgan(':id :method :url :response-time :status', { skip: (req, res) => process.env.NODE_ENV === 'test' }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('./routes/index'));
const server = app.listen(process.env.PORT, () => {
    debug(`service listening in port ${process.env.PORT}`)
})
server.setTimeout(50000);
module.exports = server
