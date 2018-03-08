<template>
  <nuxt-link :to="'/' + post.slug">
  <article class="post">
    <!-- <div class="thumbnail" :style="{backgroundImage: 'url(' + post.thumbnail + ')'}"></div> -->
    <img :data-src="post.thumbnail" class="thumbnail lazyload" />
    <div>
      <h1>{{ post.title }}</h1>
    </div>
    <div>
      <span class="author">Oleh {{ post.author }}</span>
      <span class="pubDate">pada {{ formatDate(post.pubDate) }}</span>
    </div>
    <div v-html="firstParagraph(post.content)"></div>
    <span class="badge badge-secondary" v-for="category in post.categories" :key="category">{{ category }}</span>
  </article>
  </nuxt-link>
</template>

<script>
export default {
  props: ["post"],
  methods: {
    firstParagraph: content => {
      const paragraph = content.match(/<p>(.+?)<\/p>/g);
      return paragraph[0];
    },
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
  /* width: 100%; */
  /* max-width: 900px; */
  padding: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #aaa;
  margin: 10px 10px 25px 10px;
}
.thumbnail {
  /* background-position: center; */
  /* background-size: cover; */
  width: 100%;
  height: 200px;
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
</style>
