<template>
  <div class="PoolInfo content">
    <h1>123</h1>
    <DogPoolInfo v-if="currentPool == 'dog'" />
  </div>
</template>

<script>
import DogPoolInfo from "@/components/DogPoolInfo.vue";
export default {
  data() {
    return {
      currentPool: this.$route.params.pool
    };
  },
  name: "PoolInfo",
  components: {
    DogPoolInfo
  },
  mounted() {
    if (this.$route.params.pool != "dog") {
      console.log(this.$route.params.pool);
      this.$router.push({ path: `/pool` });
    }
  }
};
</script>

<style></style>
