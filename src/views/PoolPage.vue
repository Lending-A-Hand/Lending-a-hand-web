<template>
  <div class="content">
    <h1 class="mx-8 my-3">Choose your beneficiary</h1>
    <div class="flex">
      <DogComponent />
      <DogComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DogComponent from "@/components/DogComponent.vue";

export default {
  name: "Home",
  components: {
    DogComponent
  }
};
</script>
<style scoped></style>
