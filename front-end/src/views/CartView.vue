<template>
<div class="CartView">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"><img src='mountain-logo.png' width="50px" height="50px" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">All Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link active">Cart</router-link>
        </li>
        <!--
          <li class="nav-item">
            <a class="nav-link" href="/contact.html">Contact me</a>
          </li>
          -->
      </ul>
    </div>
  </nav>
  <div v-if="notEmpty">
    <h1 class="mx-5 m my-3 pt-3">Your Cart</h1>
    <div class="products row" data-masonry="{&quot;percentPosition&quot;: true }" style="position: relative; height: 774px;">
      <div class="product col-sm-6 col-lg-4 my-3" v-for="(product, index) in products" :key="index">
        <div class="item">
          <router-link to="/current-product" @click.native="setCurrentProduct(product.id)">
            <img :src="product.image" class="img-fluid">
            <h4 class='title'>{{product.title}}</h4>
            <h4 class='price'>$ {{product.price}}</h4>
            <h4 class='quantity'>Quantity: {{product.quantity}}</h4>
          </router-link>
          <button class="btn btn-secondary my-2 my-sm-0" @click="removeFromCart(product)">Remove from cart</button>
          <button class="btn btn-secondary m-2 my-sm-0" @click="decrementCartQuantity(product)">-</button>
          <button class="btn btn-secondary my-2 my-sm-0" @click="incrementCartQuantity(product)">+</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h1 class="mx-5 m my-3 pt-3">Your Cart Is Empty</h1>
  </div>
</div>
</template>

<script>
//import axios from 'axios';
export default {
  name: 'CartView',
  created() {
    this.getCart();
  },
  computed: {
    products() {
      return this.$root.$data.cart;
    },
    notEmpty() {
      if (this.$root.$data.cart.length === 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    setCurrentProduct(productID) {
      this.$root.$data.setCurrentProduct(productID);
    },
    async removeFromCart(item) {
      this.$root.$data.removeFromCart(item);
    },
    async getCart() {
      this.$root.$data.getCart();
    },
    async incrementCartQuantity(product) {
      await this.$root.$data.incrementCartQuantity(product);
      //this.getCart();
    },
    async decrementCartQuantity(product) {
      await this.$root.$data.decrementCartQuantity(product);
      //this.getCart();
    },
  }
}
</script>
