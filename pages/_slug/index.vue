<template>
  <section class="posts">
    <PostDetail :post="post"/>
  </section>
</template>

<script>
import axios from "axios";
import PostDetail from "~/components/PostDetail";

export default {
  components: {
    PostDetail
  },
  async asyncData({ params }) {
    let { data } = await axios.get(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid"
    );
    let post = data.items.find(item => {
      let slug = item.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
      return slug == params.slug;
    });
    return { post: post };
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