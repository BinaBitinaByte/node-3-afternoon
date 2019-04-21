const express = require("express"); 
const massive = require("massive");
require("dotenv").config();
const app = express();
const products_controller = require("./products_controller");


const SERVER_PORT = 3000;


massive(process.env.
    CONNECTION_STRING
    ).then(dbInstance => {
    app.set("db", dbInstance);
  console.log("Database connected")
  })
  // adding a .catch
  .catch(err => console.log(err));

app.get('/api/products', products_controller.getAll);
app.get('/api/products/:id', products_controller.getOne);
app.put('/api/products/:id', products_controller.update);
app.post('/api/products', products_controller.create);
app.delete('/api/products/:id', products_controller.delete);


app.listen(SERVER_PORT, () =>{
    console.log(`Listening on port ${SERVER_PORT}`);
})

