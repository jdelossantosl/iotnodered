const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverrride = require('method-override');
const session = require('express-session');

//Inicio
const app = express();

//Configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

    //Configuracion de las vistas
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares para la asimilacion de los formularios, etc del lado servidor
app.use(express.urlencoded({extended: false}));
app.use(methodOverrride('_method'));
app.use(session({
    secret: 'berberecho',
    resave: true,
    saveUninitialized: true
}));

//Rutas
app.use(require('./routes/index'));
app.use(require('./routes/temperatura'));
app.use(require('./routes/luz'));
app.use(require('./routes/co2'));

//Rutas estaticas para css etc
app.use(express.static(path.join(__dirname, 'public')));


//Servidor
app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en puerto', app.get('port'));
});