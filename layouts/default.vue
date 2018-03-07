<template>
  <div>
    <Header/>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";

export default {
  components: {
    Header
  }
};
</script>


<style>
html {
  font-family: Source Sans Pro, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, sans-serif;
  color: #333;
}
body { 
  padding-top: 60px; 
}
figure img {
  width: 100%;
}
figure figcaption {
  text-align: center;
  color: #6c757d !important;
  font-size: 90%;
}
a {
  text-decoration: none;
  color: black;
}
.container {
  width: 100%;
  /* padding-right: 15px;
  padding-left: 15px; */
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  margin: 2px;
}
.badge-secondary {
  color: #fff;
  background-color: #6c757d;
}
/* .badge-secondary[href]:hover, .badge-secondary[href]:focus {
  color: #fff;
  text-decoration: none;
  background-color: #545b62;
} */
.nuxt-link-active {
  background-color: #f9f9f9;
}
</style>
