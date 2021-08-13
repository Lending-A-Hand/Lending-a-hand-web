<template>
  <div class="PoolInfo content">
    <DogPoolInfo v-if="currentPool == 'dog'" />
    <NFTReward />
  </div>
</template>

<script>
import DogPoolInfo from "@/components/DogPoolInfo.vue";
import NFTReward from "@/components/NFTReward.vue";

export default {
  data() {
    return {
      currentPool: this.$route.params.pool
    };
  },
  name: "PoolInfo",
  components: {
    DogPoolInfo,
    NFTReward
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
