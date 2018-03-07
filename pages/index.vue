<template>
  <section class="posts">
    <Post v-for="post in posts" :key="post.guid" :post="post" />
  </section>
</template>

<script>
import axios from "axios";
import Post from "~/components/Post";

export default {
  components: {
    Post
  },
  async asyncData({ params }) {
    let { data } = await axios.get(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid"
    );
    let items = data.items.map(item => {
      item.slug = item.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
      return item;
    });
    return { posts: items };
  }
};
</script>

<style>
.posts {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>
