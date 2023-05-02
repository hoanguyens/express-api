import * as express from 'express';


const routes = express.Router();

routes.get('/get-term', (_req, res) => {
    res.json("hello user");
});

routes.get('/get-version', (_req, res) => {
    res.json("hello user");
});

export default routes;