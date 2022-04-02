const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/creative-cart', {
  useNewUrlParser: true
});
// Create a scheme for items in the cart
const itemSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  quantity: Number,
  rating: {
      rate: Number,
      count: Number,
  },
});

// Create a model for items in the cart.
const Item = mongoose.model('Item', itemSchema);
const Product = mongoose.model('Product', itemSchema);

// Create a new item in the cart
app.post('/api/cart', async (req, res) => {
    const item = new Item({
      id: req.body.id,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image,
      quantity: req.body.quantity,
      rating: {
          rate: req.body.rating.rate,
          count: req.body.rating.count,
      },
    });
    try {
      await item.save();
      res.send(item);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  // Get a list of all of the items in the cart.
  app.get('/api/cart', async (req, res) => {
    try {
      let items = await Item.find();
      res.send(items);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  app.delete('/api/cart/:id', async (req, res) => {
    try {
      let items = await Item.deleteOne({
        _id: req.params.id
      });
      res.send(items);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  app.put('/api/cart/:id', async (req, res) => {
    try {
      let item = await Item.findOne({
        _id: req.params.id
      });
      item.quantity = req.body.quantity;
      item.description = req.body.description;
      await item.save();
      res.send({item:item});
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });



app.listen(3000, () => console.log('Server listening on port 3000!'));