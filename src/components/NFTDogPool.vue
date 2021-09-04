<template>
  <div class="content">
    <div class="flex">
      <img class="w-16" :src="`${BASE_URI}/picture/arrow.svg`" />
      <img class="ml-3 w-16" :src="`${BASE_URI}/picture/dogicon.svg`" />
      <span class="ml-6 text-32px font-semibold grid items-center">{{
        title
      }}</span>
    </div>
    <div class="w-4/5 ">
      <div class="flex flex-wrap">
        <div
          class="bg-white rounded-2xl p-6 m-2"
          v-for="items in NFTs"
          :key="items.tokenID"
        >
          <div class="bg-black rounded-xl">
            <img style="width:240px" :src="items.img" />
            <div class="w-full flex ">
              <div
                class="w-2/5 bg-gray-300 m-2 px-2 py-3  rounded-xl text-center"
              >
                <span class="font-semibold text-18px">TokenID</span>
                <br />
                <span>{{ items.tokenID }}</span>
              </div>
              <div
                class="w-3/5 bg-gray-300 m-2 px-2 py-3 rounded-xl text-center"
              >
                <span class="font-semibold text-18px">Provider</span>

                <br />

                <span class="truncate ">{{ items.provider }}</span>
              </div>
            </div>
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
      title: "Bags of pet food pellets",
      BASE_URI: location.origin,
      NFTs: [
        {
          img: `${location.origin}/picture/dogpic.svg`,
          tokenID: "323",
          provider: "D7CNqxxxx...."
        },
        {
          img: `${location.origin}/picture/dogpic.svg`,
          tokenID: "324",
          provider: "D7CNqxxxx"
        },
        {
          img: `${location.origin}/picture/dogpic.svg`,
          tokenID: "325",
          provider: "D7CNqxxxx"
        },
        {
          img: `${location.origin}/picture/dogpic.svg`,
          tokenID: "326",
          provider: "D7CNqxxxx"
        },
        {
          img: `${location.origin}/picture/dogpic.svg`,
          tokenID: "327",
          provider: "D7CNqxxxx"
        },
        {
          img: `${location.origin}/picture/dogpic.svg`,
          tokenID: "328",
          provider: "D7CNqxxxx"
        }
      ]
    };
  },
  name: "NFTPoolPage",
  mounted() {}
};
</script>

<style></style>
