import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import products from './data/products.js';
dotenv.config();


const port = process.env.PORT || 5000;

const app = express();
app.use(cors());


app.get('/', (req, res) => {
    res.send('API is Running');
});

app.get('/api/products', (req, res) => {
    res.send(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id);
    res.send(product);
});

app.listen(port, () => {
    console.log(`Listening on the ${port}`);
});