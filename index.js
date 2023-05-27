import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import ProductModel from './models/Product.js';
import OrderModel from './models/Order.js';

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());
app.use(cors());

app.get('/products/:category', async (req, res) => {
    const { category } = req.params;
  
    try {
      const products = await ProductModel.find();
  
      if (!products) {
        return res.status(404).json({
          message: 'Error! Products not found.'
        });
      }
  
      const { [category]: selectedCategory, ...otherProducts } = products[0]._doc;
  
      res.json(selectedCategory);
      
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Connection error.'
      });
    }
  });

app.post('/orders', async (req, res) => {
    try {
        const doc = new OrderModel(req.body);
        const order = await doc.save();
        res.json(order);
    } catch (error) {
        res.json({
            message: 'failed to add order',
            error,
        })
    }
})

app.get('/orders', async (req, res) => {
  try {
      const orders = await OrderModel.find();

      if (!orders) {
          return res.status(404).json({
              message: 'Error! Orders not found.'
          })
      }

      res.json(orders);

  } catch (err) {
      console.log(err);
      res.status(500).json({
          message: 'Connection error.'
      })
  }
})

app.listen(process.env.PORT || 8181, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server ok');
});