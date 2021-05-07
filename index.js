require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const { CONNECTION_STRING, SERVER_PORT } = process.env;
const {
  create,
  getOne,
  getAll,
  update,
  deleteRow,
} = require('./products_controller');
const productsEndpoint = '/api/products';

app.use(express.json());
massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((dbInstance) => {
    app.set('db', dbInstance);
  })
  .catch((err) => {
    console.log(err);
  });

// get endpoints

app.get(productsEndpoint, getAll);

app.get(`${productsEndpoint}/:id`, getOne);

// post endpoints

app.post(productsEndpoint, create);

// put endpoints

app.put(`${productsEndpoint}/:id`, update);

// delete endpoints

app.delete(`${productsEndpoint}/:id`, deleteRow);

app.listen(SERVER_PORT, () => console.log(`Running on Port ${SERVER_PORT}`));
