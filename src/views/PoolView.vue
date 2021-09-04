<template>
  <div class="PoolPage content">
    <h1 class="mx-8 my-3 font-bold text-24px">Choose your beneficiary</h1>
    <div class="flex">
      <DogCard v-on:click="goToPool('dog')" />
      <DogCard />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DogCard from "@/components/DogCard.vue";

export default {
  name: "PoolPage",
  components: {
    DogCard
  },
  methods: {
    goToPool(pool) {
      this.$router.push({ path: `/pool/${pool}` });
    }
  }
};
</script>
<style scoped></style>
