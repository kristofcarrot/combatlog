const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const config = require('./config'); // index.js найдёт сам, по умолчанию
const mainRouter = require('./routers'); // index.js найдёт сам, по умолчанию
const authRouter = require('./routers/auth'); // js поймёт сам

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('tiny'));
app.use(express.static('public'));

app.use(mainRouter);
app.use('/auth', authRouter);

app.listen(config.port, function() {
    console.log(`Слушаем порт ` + config.port);
});