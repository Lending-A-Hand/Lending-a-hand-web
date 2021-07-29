<template>
  <div class="home">
    <h1 class="my-12 text-2xl font-bold">
      Lending a hand
    </h1>
    <NFTBanner />
  </div>
</template>

<script>
// @ is an alias to /src
import NFTBanner from "@/components/NFTBanner.vue";

export default {
  name: "Home",
  components: {
    NFTBanner
  }
};
</script>
<style scoped>
.home {
  margin: 0px auto;
  max-width: min(1280px, 100% - 40px);
  width: 100%;
  flex-wrap: wrap;
}
</style>
