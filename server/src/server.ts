import express from "express";

const app = express();

app.get('/ads', (request, response) => {
    console.log('ads');

    return response.json([
        {
            id: 1,
            name: 'anuncio'
        },
        {
            id: 2,
            name: 'anuncio'
        },
        {
            id: 3,
            name: 'anuncio'
        },
        {
            id: 3,
            name: 'anuncio'
        }
    ]);
});

app.listen(3333);
