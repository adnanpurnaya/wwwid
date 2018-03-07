<template>
  <header>
    <nav>
      <ul>
        <li><nuxt-link to="/" exact>Home</nuxt-link></li>
        <li class="dropdown" 
          @mouseover="display = 'block'" 
          @mouseleave="display = 'none'" 
          @click="display = 'none'"
          >
          <nuxt-link :to="categories.length > 0 ? categories[0].link : ''" class="dropbtn">&#9662; Kategori</nuxt-link>
          <div class="dropdown-content" :style="{display: display}">
            <nuxt-link 
              v-for="category in categories" 
              :to="category.link" 
              :key="category.text"
              >
              {{ category.text }} <small>({{ category.count }})</small>
            </nuxt-link>
          </div>
        </li>
        <li><nuxt-link to="/about" exact>About</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data: () => {
    return {
      categories: [],
      display: "none"
    };
  },
  methods: {
    ucwords: str => {
      return str
        .replace(/-/g, " ")
        .toLowerCase()
        .replace(/\b[a-z]/g, function(letter) {
          return letter.toUpperCase();
        });
    }
  },
  mounted: function() {
    let categories = [
      { name: "frontend-development", count: 1 },
      { name: "snapshot-testing", count: 1 },
      { name: "unit-testing", count: 1 },
      { name: "frontend-testing", count: 1 },
      { name: "integration-testing", count: 1 },
      { name: "progressive-web-app", count: 4 },
      { name: "newsletter", count: 2 },
      { name: "web-development", count: 5 },
      { name: "front-end-development", count: 3 },
      { name: "web-performance", count: 1 },
      { name: "challenge", count: 1 },
      { name: "tips", count: 1 },
      { name: "life", count: 1 },
      { name: "web-developer", count: 1 },
      { name: "product-development", count: 1 },
      { name: "web", count: 2 },
      { name: "accessibility", count: 2 },
      { name: "a11y", count: 1 },
      { name: "forms", count: 1 },
      { name: "shadow-dom", count: 1 },
      { name: "html-templates", count: 1 },
      { name: "web-components", count: 1 },
      { name: "custom-elements", count: 1 },
      { name: "wcag", count: 1 },
      { name: "people-with-disabilities", count: 1 },
      { name: "billion-users-on-the-web", count: 1 },
      { name: "web-accessibilty", count: 1 }
    ];
    this.categories = categories
      .map(cat => {
        return {
          text: this.ucwords(cat.name),
          link: "/kategori/" + cat.name,
          count: cat.count
        };
      })
      .sort((a, b) => {
        if (a.text < b.text) return -1;
        if (a.text > b.text) return 1;
        return 0;
      });
  }
};
</script>


<style scoped>
header {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #dbdfe1;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li a,
.dropbtn {
  display: inline-block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover,
.dropdown:hover .dropbtn {
  background-color: #f9f9f9;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  /* display: none; */
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  /* display: block; */
}
</style>