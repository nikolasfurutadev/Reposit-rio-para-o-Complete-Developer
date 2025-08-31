import { routeHello, routeAPINames, routeWeather } from './routes.js';

import express, { Request, Response } from 'express';

const server = express();
const port = 3000;

server.get("/hello", (_req: Request,res: Response) => {
    const response = routeHello();
    res.send(response);
});

server.get("/api/names", 
    async (_req: Request, res: Response): Promise<void> => {
    let response: string;
    try {
        response = await routeAPINames();
        res.send(response);
    } catch (error) {
        console.error(`error msg: ${error}`);
    }
    
});

server.get("/api/weather/:zipcode", 
    (req: Request, res: Response): void => {
    const response = routeWeather({zipcode: req.params.zipcode});
    res.send(response);
    });
    
server.listen(port, () => {
    console.log("Listening on port " + port);
});