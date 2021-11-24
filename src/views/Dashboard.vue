<script>
import { mapState } from "vuex"
export default {
  name: "Dashboard",
  computed: {
    ...mapState(["posts"]),
  },
}
</script>

<template>
  <div class="container">
    <h1>Dashboard</h1>
    <p>This is the dashboard view!</p>
    <h2>Posts</h2>
    <ol class="posts">
      <li v-for="post in posts" :key="post.id" class="post">
        <p v-if="post.title"><b>Title:</b> {{ post.title }}</p>
        <p v-if="post.content"><b>Content:</b> {{ post.content }}</p>
        <p v-if="post.creator.username">
          <b>Creator:</b> {{ post.creator.username }}
        </p>
        <p v-if="post.likes"><b>Like:</b> {{ post.likes.length }}</p>
        <p v-if="post.dislikes"><b>Dislike:</b> {{ post.dislikes.length }}</p>
        <h2 v-if="post.comments.length > 0">Comments</h2>
        <ul class="comments">
          <li
            v-for="comment in post.comments"
            :key="comment.id"
            class="comment"
          >
            <p v-if="comment.content"><b>Comment:</b> {{ comment.content }}</p>
            <p v-if="comment.username">
              <b>Creator:</b> {{ comment.creator.username }}
            </p>
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 30px;

  .posts {
    padding: 0;
    &:not(:last-child) {
      margin-bottom: 30px;
    }

    .post {
      border: 1px solid #ccc;
      margin-bottom: 1rem;
    }
  }
}
</style>
