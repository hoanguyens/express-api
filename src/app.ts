import * as express from "express";
import * as cors from "cors";
//import * as session from "express-session";
import * as compression from "compression";
import * as helmet from "helmet";
import * as dotenv from "dotenv";
import * as httpModule from 'http';


import {  HttpError, errorHandler } from "./libs/httpErrors";
import { dev, port, onError } from "./libs/utils";
import { info, logger } from "./libs/logger";
import api from "./routes";

//Read variable .env
dotenv.config();

//Create Express server
const app = express();

//Store in Express 
app.set('port', port);

// @ts-ignore 
app.use(helmet());
app.use(compression());
app.use(express.json());

/**
 * CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
 */
app.use(
    cors({
        origin: dev ? process.env.URL_APP : process.env.PRODUCTION_URL_APP,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true
    })
);

/**
 * Express configuration API.
 */
api(app);

/***
 * Create HTTP Server
 */
const server = httpModule.createServer(app);

// catch 403 and forward to error handler
app.get('/', (_, res) => {
    res.sendStatus(403);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(
        errorHandler(
            new HttpError(404, 'Page not found'), 
            req, 
            res, 
            next
        )
    )
});
  
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => {
    logger.debug('debug right before info');
    info(`> Ready on ${dev ? process.env.URL_API : process.env.PRODUCTION_URL_API}`);
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    //debug('Listening on ' + bind);
    logger.debug('Listening on' + bind);
}