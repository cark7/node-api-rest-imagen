import express from 'express'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'
const app = express();

import indexRoutes from './routes/index'
//settings
app.set('port', 4000)

//middlewares
app.use(morgan('dev'))
app.use(express.json())
// Add headers before the routes are defined
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API Access-Control-Allow-Headers
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);
    app.use(cors());
    next();

});
//routes
app.use('/api', indexRoutes)

// this folder for this public files
app.use('/uploads', express.static(path.resolve('uploads')))

export default app