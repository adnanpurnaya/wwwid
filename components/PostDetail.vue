<template>
  <article class="post">
    <div>
      <h1 class="title">{{ post.title }}</h1>
    </div>
    <div>
      <span class="author">Oleh {{ post.author }}</span>
      <span class="pubDate">pada {{ formatDate(post.pubDate) }}</span>
    </div>
    <div class="content" v-html="post.content"></div>
    <nuxt-link class="badge badge-secondary" v-for="category in post.categories" :key="category" :to="'/kategori/' + category">{{ category }}</nuxt-link>
  </article>
</template>

<script>
export default {
  props: ["post"],
  methods: {
    formatDate: date => {
      const objDate = new Date(date);
      return objDate.toLocaleDateString("id");
    }
  }
};
</script>

<style scoped>
.post {
  box-sizing: border-box;
  /* max-width: 900px; */
  padding: 30px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #aaa;
  margin: 10px;
  width: 100%;
}
.title {
  font-size: 2em;
  border-bottom: 1px solid #dbdfe1;
  margin-bottom: 15px;
}
.author {
  color: #6c757d !important;
  margin-right: 5px;
  font-size: 90%;
}
.pubDate {
  color: #6c757d !important;
  font-size: 90%;
}
.content {
  overflow: hidden;
}
</style>
