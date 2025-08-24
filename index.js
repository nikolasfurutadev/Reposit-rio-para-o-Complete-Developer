import express from 'express';
import { routeHello, routeAPINames } from './routes.js'

const server = express();
const port = 3000;

server.get("/hello", (req,res) => {
    const response = routeHello(req,res);
    res.send(response);
});

server.get("/api/names", async (req,res) => {
    let response;
    try {
        response = await routeAPINames(req,res);
    } catch (error) {
        console.error(`error msg: ${error}`);
    }
    res.send(response);
});

server.listen(port, () => {
    console.log("Listening on port " + port);
});