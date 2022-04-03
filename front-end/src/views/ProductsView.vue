<template>
<div class="productsView">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"><img src='mountain-logo.png' width="50px" height="50px" /></a>
    <form class="form-inline mx-lg-auto my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search Products" aria-label="Search" v-model="searchText">
    </form>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link active">All Products</router-link>
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

  <h1 class="mx-5 m my-3 pt-3">All Products</h1>
  <div class="products row">
    <div class="product col-sm-6 col-lg-4 my-3" v-for="product in products" :key="product.id">
      <div class="item">
        <router-link to="/current-product" @click.native="setCurrentProduct(product.id)">
          <img :src="product.image" class="img-fluid">
          <h4 class='title'>{{product.title}}</h4>
          <h4 class='price'>${{product.price}}</h4>
        </router-link>
        <button class="btn btn-secondary my-2 my-sm-0" @click="addToCart(product)">Add to cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductsView',
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.title.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
  methods: {
    setCurrentProduct(productID) {
      this.$root.$data.setCurrentProduct(productID);
    },
    async addToCart(product) {
      await this.$root.$data.addToCart(product);
    }
  }
}
</script>

