<template>
  <div class="DogInfo m-6 w-full">
    <div class="h-96 flex">
      <div class="w-2/5 mx-6">
        <div class="flex m-3">
          <div class="w-1/6">
            <div
              class="min-w-72px max-w-90px grid place-items-center rounded-2xl"
              style="background-color:#FFE153;aspect-ratio: 1 / 1; "
            >
              <img
                class="min-w-60px"
                :src="`${BASE_URI}/picture/dogicon.svg`"
              />
            </div>
          </div>
          <span class="ml-6 text-32px font-bold grid place-items-center">{{
            title
          }}</span>
        </div>
        <div class="m-3">
          <span class="text-24px ">
            {{ introduction }}
          </span>
        </div>
        <div class="flex">
          <div>
            <div class="flex m-3">
              <img :src="`${BASE_URI}/picture/twitter.svg`" />
              <span
                class="ml-3 font-semibold text-16px grid place-items-center"
                >{{ twitterLink }}</span
              >
            </div>
            <div class="flex m-3">
              <img :src="`${BASE_URI}/picture/web.svg`" />
              <span
                class="ml-3 font-semibold text-16px grid place-items-center"
                >{{ websiteLink }}</span
              >
            </div>
          </div>
          <img class="ml-auto" :src="`${BASE_URI}/picture/footprint.svg`" />
        </div>
      </div>
      <div class="w-1/8"></div>
      <div class="w-2/5 ">
        <div class="my-3 border-8 border-black rounded-2xl bg-white flex p-6">
          <div class="w-3/5  grid place-items-center">
            <div>
              <span class="font-extrabold text-32px">Total Staked</span><br />
              <span class="font-medium text-32px">{{ totalStaked }} USDT</span>
            </div>
          </div>
          <div class="w-2/5">
            <img
              class="min-w-120px"
              :src="`${BASE_URI}/picture/stakeDAI.svg`"
            />
          </div>
        </div>

        <div class="my-3 border-8 border-black rounded-2xl bg-white flex p-6">
          <div class="w-3/5  grid place-items-center">
            <div>
              <span class="font-extrabold text-32px">Total Earned</span><br />
              <span class="font-medium text-32px">{{ totalEarned }} USDT</span>
            </div>
          </div>
          <div class="w-2/5">
            <img class="min-w-120px" :src="`${BASE_URI}/picture/dogfood.svg`" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BASE_URI: location.origin,
      title: "Bags of pet food pellets",
      introduction:
        "Animal shelter in Taiwan needs your help! Generate interest to supply food for stray food and more. If you’re generated interest exceed XXX USD, You’ll get a free NFT from nft pool!",
      totalStaked: 4129889,
      totalEarned: 0,
      twitterLink: "https://123123",
      websiteLink: "https://123123"
    };
  },

  async mounted() {
    const hatStats = await window.rToken.getHatStats(1);
    this.totalStaked = parseInt(hatStats[1].toString()) / 10**18;
  }
};
</script>

<style></style>
