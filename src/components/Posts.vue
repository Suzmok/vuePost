<template>
  <div class="add_post_block">
    <h1>Add post</h1>
    <input v-model="userName" type="text" placeholder="User name" />
    <input v-model="title" type="text" placeholder="Post title" />
    <input v-model="description" type="text" placeholder="Description" />
    <button @click="createPost">Add post</button>
  </div>
  <div class="posts_flex">
    <div class="posts_block" v-for="post in allPosts" :key="post.id">
      <div class="posts_block_top">
        <div class="post_text">
          <p>
            <strong>{{ post.title }}</strong>
          </p>
          <p>{{ post.description }}</p>
        </div>
        <div class="post_date">
          <p>
            {{
              `date: ${post.date.getDate()}/${
                post.date.getMonth() + 1
              }/${post.date.getFullYear()}`
            }}
          </p>
          <p>{{ `creator: ${post.userName}` }}</p>
        </div>
      </div>

      <div class="moreinfo_btns">
        <button @click="deletePost(post.id)">Delete</button>
        <router-link class="routto_info" :to="`/moreinfo/${post.id}`"
          >More info</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      userName: "",
      title: "",
      description: "",
    };
  },
  computed: {
    ...mapGetters(["allPosts"]),
  },
  methods: {
    createPost() {
      this.$store.commit("updatePosts", {
        id: new Date(),
        userName: this.userName,
        title: this.title,
        description: this.description,
        date: new Date(),
      });
      this.userName = "";
      this.title = "";
      this.description = "";
    },
    deletePost(id) {
      this.$store.commit("deletePost", id);
    },
  },
};
</script>

<style scoped>
.posts_flex {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
}
.add_post_block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
}
.add_post_block input {
  border: 1px solid teal;
  border-radius: 3px;
  padding: 12px;
}
.add_post_block button {
  border: 1px solid teal;
  border-radius: 3px;
  padding: 12px;
  background-color: black;
  color: white;
}
.posts_block {
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 12px;
}
.posts_block_top {
  border: 1px solid teal;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 12px;
}
.post_text {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.post_date {
  display: flex;
  justify-content: space-between;
}
.moreinfo_btns {
  display: flex;
  justify-content: space-between;
}
.moreinfo_btns button {
  border-radius: 3px;
  border: 1px solid teal;
  padding: 10px 12px;
  background: none;
}
.routto_info {
  border-radius: 3px;
  border: 1px solid teal;
  padding: 10px 12px;
  text-decoration: none;
  color: black;
}
</style>
