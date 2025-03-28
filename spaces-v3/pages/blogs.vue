<script setup lang="ts">
import groq from "groq";

const query = groq`*[_type == "post"]{
    _id,
  title,
  "author": author->name,
  "body": body[].children[].text
}`;

const { data: posts } = await useSanityQuery(query);
</script>

<template>
  <main>
    <section v-for="post in posts" :key="post._id">
      <h1 class="text-lg italic font-bold">Title: {{ post.title }}</h1>
      <p>Author: {{ post.author }}</p>
      <p>Post: {{ post.body.join(" ") }}</p>
    </section>
  </main>
</template>
