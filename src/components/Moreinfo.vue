<template>
  <div class="moreinfo_block">
    <div class="moreinfo_box">
        <div>
            <router-link class="mI_btnstyle" to="/">Back</router-link>
        </div>
      
      <div class="mI_content" v-for="el in post">
        <div class="mI_top">
          <input v-if="editing" v-model="el.title" />
          <p v-else><strong>{{ el.title }}</strong></p>
          <p>
            {{
              `date: ${el.date.getDate()}/${
                el.date.getMonth() + 1
              }/${el.date.getFullYear()}`
            }}
          </p>
        </div>

        <input v-if="editing" v-model="el.description" />
        <p v-else>{{ el.description }}</p>
        <p>{{ "creator: " + el.userName }}</p>
        <div class="mI_btns">
          <button class="mI_btnstyle" v-if="!editing" @click="editing = true">Edit post</button>
          <button class="mI_btnstyle" v-else="!editing" @click="editing = false">Save post</button>
          <button class="mI_btnstyle" @click="deletePost">Delete post</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["allPosts"]),
    post() {
      const postId = this.$route.params.id;
      return this.allPosts.filter((post) => post.id.toString() === postId);
    },
    deletePost(id) {
      const postId = this.$route.params.id;
      this.$store.commit("deletePost", postId);
      this.$router.push("/");
    },
  },

  data() {
    return {
      editing: false,
    };
  },
};
</script>

<style scoped>
.moreinfo_block {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.moreinfo_box{
    width: 50%;
    font-size: 40px;
    display: flex;
    flex-direction: column; 
    gap: 30px;
    border: 1px solid teal;
    padding: 20px 22px;
    
}
.mI_top{
    display: flex;
    justify-content: space-between;
}
.mI_btns{
    display: flex;
    justify-content: space-between;
}
.mI_btnstyle{
  border-radius: 3px;
  border: 1px solid teal;
  padding: 10px 12px;
  background: none;
  text-decoration: none;
  color:black;
  font-size: 30px;
}
.mI_content{
    display: flex;
    flex-direction: column;
    gap: 25px;
}
</style>
