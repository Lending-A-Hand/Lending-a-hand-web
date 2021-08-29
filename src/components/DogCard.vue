<template>
  <div class="DogCard w-full md:w-1/2 poolbox m-6 bg-white rounded-2xl">
    <div class="m-4 h-72  flex rounded-2xl" style="background-color:#FFE153">
      <div class="w-1/4  grid place-items-center">
        <img class="w-40" :src="`${BASE_URI}/picture/dog.svg`" />
      </div>
      <div class="w-1/2 grid place-items-center">
        <div class="text-center">
          <span class="text-32px">Bags earned</span><br />
          <span class="font-bold text-40px">{{ Dog_bagsEarned }}</span
          ><br />
          <span class="text-32px">From {{ Dog_usdEarned }} USD</span>
        </div>
      </div>
      <div class="w-1/4 grid place-items-center p-2">
        <img class="w-32" :src="`${BASE_URI}/picture/dogfood.svg`" />
      </div>
    </div>
    <div class="flex m-4">
      <div class="w-1/6">
        <div
          class="min-w-72px max-w-90px grid place-items-center rounded-2xl"
          style="background-color:#FFE153;aspect-ratio: 1 / 1; "
        >
          <img class="min-w-60px" :src="`${BASE_URI}/picture/dogicon.svg`" />
        </div>
      </div>
      <div class="w-2/3 mx-2 text-center pt-3">
        <span class="text-24px font-bold">Bags of pet food pellets</span><br />
        <span class="text-24px mr-2">{{ Dog_supporters }}</span>
        <span class="text-24px">supportors</span>
      </div>
      <div class="w-1/6 min-w-48px grid place-items-center">
        <img class="min-w-72px" :src="`${BASE_URI}/picture/usdc.svg`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BASE_URI: location.origin,
      Dog_bagsEarned: "0",
      Dog_usdEarned: "0",
      Dog_supporters: "0"
    };
  },
  methods: {

  },
  async mounted() {
    const hatStats = await window.rToken.getHatStats(1);
    this.Dog_supporters = hatStats[0];
    this.Dog_usdEarned = parseInt(hatStats[1].toString()) / 10**18;
  }
};
</script>

<style></style>
