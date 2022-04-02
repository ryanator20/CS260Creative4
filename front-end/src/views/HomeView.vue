<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#"><img src='mountain-logo.png' width="50px" height="50px" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
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
    <div class="photo">
      <img src="/images/cover.jpg" class="img-fluid mb-3">

    </div>
    <h1 class="mx-5 my-3">Featured</h1>
    <div class="products row">
      <div class="product my-3 col-md col-lg">
        <router-link to="/current-product" @click.native="setCurrentProduct(products[0].id)">
          <img :src="products[0].image" class="img-fluid">
        </router-link>
      </div>
      <div class="product my-3 col-md col-lg">
        <router-link to="/current-product" @click.native="setCurrentProduct(products[1].id)">
          <img :src="products[1].image" class="img-fluid">
        </router-link>
      </div>
      <div class="product my-3 col-md col-lg">
        <router-link to="/current-product" @click.native="setCurrentProduct(products[2].id)">
          <img :src="products[2].image" class="img-fluid">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    products(){
      return this.$root.$data.products;
    }
  },
  methods: {
    setCurrentProduct(productID){
      this.$root.$data.setCurrentProduct(productID);
    }
  }
}
</script>
