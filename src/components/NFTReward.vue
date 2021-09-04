<template>
  <div
    class="NFTReward m-6 w-full flex rounded-2xl"
    style="background-color:#FFE153"
  >
    <div class="w-1/3 m-6 bg-white text-center rounded-2xl">
      <div class="mt-2 h-16">
        <span class="font-extrabold text-24px">NFT Reward</span>
        <div class="relative h-6">
          <span class="font-extrabold text-16px"
            >{{ thresholdNow }}/{{ thresholdTarget }}</span
          ><br />
          <img
            class="absolute right-6 bottom-0"
            :src="`${BASE_URI}/picture/gift.svg`"
          />
        </div>
      </div>
      <div class="Progressbar m-3 mx-8">
        <div class="Progressbar__value"></div>
        <progress :value="thresholdNow" :max="thresholdTarget"></progress>
      </div>
      <div class="inline-flex place-items-center">
        <div
          class="m-4 cursor-pointer w-32 rounded-2xl grid place-content-center py-2"
          style="background-color:#FF7676"
          v-on:click="goToNFTPool(poolName)"
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
    <div class="w-1/3 m-6 bg-white text-center rounded-2xl">
      <div class="mt-2 pt-3 h-16">
        <span class="font-extrabold text-24px">{{ stakeFor }}</span>
      </div>

      <div class=" mx-8 p-3 flex items-center border-2 border-black rounded-xl">
        <input
          inputmode="decimal"
          autocomplete="off"
          type="text"
          pattern="^[0-9]*[.,]?[0-9]*$"
          placeholder="0.0"
          min="0"
          minlength="1"
          maxlength="40"
          spellcheck="false"
          class="w-4/5 font-bold outline-none border-none overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary  text-xl bg-transparent"
        />
        <div class=" w-1/5">
          <span class="text-right">DAI</span>
        </div>
      </div>
      <div class="inline-flex place-items-center">
        <div
          class="m-4 cursor-pointer w-32 rounded-2xl grid place-content-center bg-gray-500 py-2"
          v-on:click="clickWithdraw()"
        >
          <span class="font-semibold text-20px">Withdraw</span>
        </div>
        <div
          class="m-4 cursor-pointer w-32 rounded-2xl grid place-content-center py-2"
          style="background-color:#76BDFF"
          v-on:click="clickDeposit()"
        >
          <span class="font-semibold text-20px">Deposit</span>
        </div>
      </div>
    </div>
    <div class="w-1/3 m-6 bg-white rounded-2xl text-center">
      <div class="mt-2">
        <span class="font-extrabold text-24px">Your impact</span>
      </div>
      <div class="flex mt-2 mx-6">
        <span class="w-3/5 items-center flex text-16px font-bold">
          Your Deposit</span
        >
        <span
          class="w-1/5  place-items-center text-right text-24px font-bold"
          >{{ YourDeposit }}</span
        >
        <span class="w-1/5 text-18px font-bold grid place-items-center"
          >DAI</span
        >
      </div>
      <div class="mx-3 h-3 " style="border-bottom:1px solid #000"></div>
      <div class="flex mt-2 mx-6">
        <span class="w-3/5 items-center flex text-16px font-bold">
          {{ currentlyEarnedText }}</span
        >
        <span
          class="w-1/5  place-items-center text-right text-24px font-bold"
          >{{ currentlyEarnedAmount }}</span
        >
        <span class="w-1/5 text-18px font-bold grid place-items-center">{{
          currentlyEarnedUnit
        }}</span>
      </div>
      <div class="mx-3 h-3 " style="border-bottom:1px solid #000"></div>
      <div class="flex mt-2 mx-6">
        <span class="w-3/5 items-center flex text-16px font-bold">
          {{ annualEarnedText }}</span
        >
        <span
          class="w-1/5  place-items-center text-right text-24px font-bold"
          >{{ annualEarnedAmount }}</span
        >
        <span class="w-1/5 text-18px font-bold grid place-items-center">{{
          annualEarnedUnit
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BASE_URI: location.origin,
      poolName: "dog",
      thresholdTarget: 100,
      thresholdNow: 60,
      YourDeposit: 1000,
      currentlyEarnedText: "Currently Earned",
      currentlyEarnedAmount: 50,
      currentlyEarnedUnit: "Bags",
      annualEarnedText: "Annual Bags of Food",
      annualEarnedAmount: 200,
      annualEarnedUnit: "Bags",
      stakeFor: "Stake for Pets"
    };
  },
  mounted() {
    const progressValue = document.querySelector(".Progressbar__value");
    const progress = document.querySelector("progress");
    progressValue.style.width = `${this.thresholdNow}%`;
    progress.value = this.thresholdNow;
  },
  methods: {
    goToNFTPool(poolName) {
      this.$router.push({ path: `/nftpool/${poolName}` });
    }
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
