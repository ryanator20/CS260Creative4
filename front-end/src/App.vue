<template>
  <div id="app">
    <router-view/>
    <div class="footer my-3 py-5 text-center">
      <a href="https://github.com/ryanator20/CS260Creative4" target="_blank"><img src="/images/github.png" class="mx-1"></a>
      <a href="https://www.linkedin.com/in/ryan-lee20/" target="_blank"><img src="/images/LI-In-Bug.png" class="mx-1"></a>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Josefin Sans', sans-serif;
  background-color: #eeeeee;
}
.bg-dark {
  background-color: #000 !important;
}

.product-page {
  background-color: #fff;
}

.product p {
  margin-top: 1em;
}

.description {
  margin-left: 1em;
}

.footer {
  background-color: #000;
}
.footer img {
  width: auto;
  height: 50px;
}

.item {
  background-color: #fff;
  padding: 1em;
}

.item a img {
  margin-bottom: 1em;
}

.item a .price {
  margin-bottom: 0px;
}

a {
  text-decoration: none;
  color: #000;
}

a:active {
  text-decoration: none;
  color: #000;
}

a:hover {
  text-decoration: none;
  color: #000;
}

a:visited {
  text-decoration: none;
  color: #000;
}

.page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background-color: #000000;
    border-color: #000000;
}

@media (min-width: 48em) {
  .navbar-nav {
    margin-left: auto !important;
    margin-right: 0 !important;
  }
  form {
    margin-left: auto !important;
    margin-right: 0 !important;
  }

  .photo img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
  }

  .product a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product router-link img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product .item a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>
