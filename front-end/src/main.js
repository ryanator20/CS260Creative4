import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

import mock from './product-data.js'

let data = {
  products: mock,
  currentProduct: 1,
  cart: [],
  async addToCart(product){
    try{
      await this.getCart();
      let foundItem = this.cart.filter(currProduct => currProduct.id === product.id);
      //console.log(foundItem);
      if(foundItem.length > 0){
        //console.log("update item to quantity of " + (foundItem[0].quantity + 1));
        await this.incrementCartQuantity(foundItem[0]);
      }else{
      await axios.post('/api/cart', {
        id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      quantity: 1,
      rating: {
          rate: product.rating.rate,
          count: product.rating.count,
      },
      });
    }
    }catch (error){
      //console.log(error);
    }
  },
  async getCart() {
    try{
    let response = await axios.get("/api/cart");
      this.cart = response.data;
      return true;
    } catch (error) {
      //console.log(error);
    }
  },
  clearCart(){
    this.cart = [];
  },
  setCurrentProduct(productID){
    this.currentProduct = productID;
  },
  async incrementCartQuantity(product){
    try{
    await axios.put('/api/cart/' + product._id, {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      quantity: product.quantity + 1,
      rating: {
        rate: product.rating.rate,
        count: product.rating.count,
      },
    });
    await this.getCart();
  }catch (error){
    //console.log(error);
  }
  },
  async decrementCartQuantity(product){
    try{
      if(product.quantity > 1){
    await axios.put('/api/cart/' + product._id, {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      quantity: product.quantity - 1,
      rating: {
        rate: product.rating.rate,
        count: product.rating.count,
      },
    });
    await this.getCart();
  }else{
    this.removeFromCart(product);
  }
  }catch (error){
    //console.log(error);
  }
  },
  async removeFromCart(item) {
    try {
      await axios.delete("/api/cart/" + item._id);
      this.getCart();
      return true;
    } catch (error) {
      //console.log(error);
    }
  },
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
