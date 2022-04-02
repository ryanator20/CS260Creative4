<template>
<div class="currentProduct">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"><img src='/mountain-logo.png' width="50px" height="50px" /></a>
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
          <router-link to="/cart" class="nav-link">Cart</router-link>
        </li>
        <!--
          <li class="nav-item">
            <a class="nav-link" href="/contact.html">Contact me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/cart.html">Cart</a>
          </li>
          -->
      </ul>
    </div>
  </nav>
  <h1 class="mx-5 my-3">{{currentProduct.title}}</h1>
  <div class="product-page row">
    <div class="product my-3 col-md col-lg">
      <img :src="currentProduct.image" class="img-fluid">
    </div>
    <div class="product description my-3 col-md col-lg">
      <h2 class='title'>{{currentProduct.title}}</h2>
      <h2 class='price'>${{currentProduct.price}}</h2>
      <div class="buttons">
        <button class="btn btn-secondary my-2 my-sm-0" @click="addToCart(currentProduct)">Add to cart</button>
      </div>
      <p>{{currentProduct.description}}
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CurrentProductView',
  computed: {
    currentProduct() {
      let currentProducts = this.$root.$data.products.filter(product => product.id === this.$root.$data.currentProduct);
      let currentProduct = currentProducts[0];
      return currentProduct;
    }
  },
  methods: {
    addToCart(product) {
      this.$root.$data.addToCart(product);
    }
  }
}
</script>
