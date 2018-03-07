<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
        <li class="breadcrumb-item active">Kategori</li>
        <li class="breadcrumb-item active" aria-current="page">{{ kategori }}</li>
      </ol>
    </nav>
    <section class="posts">
      <Post v-for="post in posts" :key="post.guid" :post="post" />
    </section>
  </div>
  
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
    let items = data.items
      .filter(item => {
        for (const categories of item.categories) {
          if (categories == params.name) {
            return true;
          }
        }
        return false;
      })
      .map(item => {
        item.slug = item.title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "");
        return item;
      });
    let kategori = params.name
      .replace(/-/g, " ")
      .toLowerCase()
      .replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
      });
    return { posts: items, kategori: kategori };
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

nav {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
}

.breadcrumb {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  /* margin-bottom: 1rem; */
  margin: 0;
  list-style: none;
  background-color: #e9ecef;
  border-radius: 0.25rem;
  /* min-width: 100%; */
  /* max-width: 900px; */
}

.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  color: #6c757d;
  content: "/";
}

.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: underline;
}

.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: none;
}

.breadcrumb-item.active {
  color: #6c757d;
}
</style>
