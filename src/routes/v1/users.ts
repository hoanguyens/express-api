import * as express from 'express';
import { info, error, warn } from '../../libs/logger';

const routes = express.Router();

routes.use((req, res, next) => {
    warn('Check authorization');
    if(!req.headers.authorization){
        error('Unauthorized');
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    next();
});

routes.get('/get-profile', (_req, res) => {
    info('Get user profile');
    res.json("hello user");
});

routes.get('/get-settings', (_req, res) => {
    info('Get user settings');
    res.json("hello user");
});

routes.get('/get-activity', (_req, res) => {
    info('Get user activity');
    res.json("hello user");
});

routes.get('/add', (_req, res) => {
    info('Get user activity');
    res.json("hello user");
});

routes.get('/remove', (_req, res) => {
    info('Get user activity');
    res.json("hello user");
});

routes.get('/update', (_req, res) => {
    info('Get user activity');
    res.json("hello user");
});

export default routes;