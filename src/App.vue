<template>
  <div class="content">
    <Title />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
export default {
  components: {
    Title
  }
};
</script>
<style>
.content {
  margin: 0px auto;
  max-width: min(1440px, 100% - 40px);
  width: 100%;
  flex-wrap: wrap;
}
</style>
