<template>
  <div
    class="NFTReward m-6 w-full flex rounded-2xl"
    style="background-color:#FFE153"
  >
    <div class="w-1/3 m-6 bg-white text-center rounded-2xl">
      <span class="font-extrabold text-24px">NFT Reward</span><br />
      <div class="relative">
        <span class="font-extrabold text-16px"
          >{{ thresholdNow }}/{{ thresholdTarget }}</span
        ><br />
        <img
          class="absolute right-6 bottom-0"
          :src="`${BASE_URI}/picture/gift.svg`"
        />
      </div>
      <div class="Progressbar m-3">
        <div class="Progressbar__value"></div>
        <progress :value="thresholdNow" :max="thresholdTarget"></progress>
      </div>
      <div class="inline-flex place-items-center">
        <div
          class="m-4 cursor-pointer w-32 rounded-2xl grid place-content-center py-2"
          style="background-color:#FF7676"
          v-on:click="clickExplore()"
        >
          <span class="font-semibold text-20px">Explore</span>
        </div>
        <div
          class="m-4 cursor-pointer w-32 rounded-2xl grid place-content-center bg-gray-500 py-2"
          v-on:click="clickClaim()"
        >
          <span class="font-semibold text-20px">Claim</span>
        </div>
      </div>
    </div>
    <div class="w-1/3 m-6 bg-white rounded-2xl"></div>
    <div class="w-1/3 m-6 bg-white rounded-2xl"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BASE_URI: location.origin,
      thresholdTarget: 100,
      thresholdNow: 60
    };
  },
  mounted() {
    const progressValue = document.querySelector(".Progressbar__value");
    const progress = document.querySelector("progress");
    progressValue.style.width = `${this.thresholdNow}%`;
    progress.value = this.thresholdNow;
  }
};
</script>

<style scoped>
.Progressbar {
  position: relative;
  height: 32px;
  border-radius: 1000px;
  background-color: #484848;
  clip-path: inset(0 0 0 0 round 1000px);
}

.Progressbar__value {
  height: 32px;
  transition: width 0.4s ease-in-out;
  border-radius: 1000px 0 0 1000px;
  background-color: #00ff85;
  will-change: width;
}

.Progressbar > progress {
  opacity: 0;
  width: 1px;
  height: 1px;
  position: absolute;
  pointer-events: none;
}
</style>
