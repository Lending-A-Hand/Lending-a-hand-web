<template>
  <div class="w-full md:w-1/2 poolbox m-4 bg-white rounded-2xl">
    <div class="m-2 h-28  flex rounded-2xl" style="background-color:#FFE153">
      <div class="w-1/4  grid place-items-center">
        <img class="w-32" src="picture/dog.svg" />
      </div>
      <div class="w-1/2 grid place-items-center">
        <div class="text-center">
          <span class="text-14px">Bags earned</span><br />
          <span class="font-bold text-14px">{{ Dog_bagsEarned }}</span
          ><br />
          <span class="text-14px">From {{ Dog_usdEarned }} USD</span>
        </div>
      </div>
      <div class="w-1/4 grid place-items-center p-2">
        <img class="w-24" src="picture/dogfood.svg" />
      </div>
    </div>
    <div class="flex m-2">
      <div class="w-1/6 min-w-48px">
        <div
          class="grid place-items-center p-2"
          style="background-color:#FFE153"
        >
          <img src="picture/dogicon.svg" />
        </div>
      </div>
      <div class="w-2/3 mx-2 text-center">
        <span class="text-12px font-bold">Bags of pet food pellets</span><br />
        <span class="text-10px mr-2">{{ Dog_supporters }}</span>
        <span class="text-10px">supportors</span>
      </div>
      <div class="w-1/6 min-w-48px">
        <div class=" grid place-items-center">
          <img src="picture/usdc.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Dog_bagsEarned: "4,772",
      Dog_usdEarned: "95,440",
      Dog_supporters: "214"
    };
  }
};
</script>

<style></style>
