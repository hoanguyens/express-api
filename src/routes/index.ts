import * as express from 'express';
import {errorHandler} from "../libs/httpErrors";

import publicRoutes from './public';
import usersRoutes from './v1/users';

export default function api(server: express.Express){
    server.use('/v1', publicRoutes, errorHandler)
    server.use('/v1/users', usersRoutes, errorHandler)
}

