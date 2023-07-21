 
import { createStore } from 'vuex'
const store = createStore({
    modules: {
      post: {
        state: {
          posts: [],
        },
        mutations: {
          updatePosts(state, post) {
            state.posts.push(post);
          },
          deletePost(state,id){
            state.posts = state.posts.filter(el => el.id != id)
          }, 
        },
        getters: {
          allPosts(state) {
            return state.posts;
          },
        },
      },
    },
  });
  
export default store;   