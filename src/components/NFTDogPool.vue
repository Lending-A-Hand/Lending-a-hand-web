<template>
  <div class="content flex">
    <div class="flex mb-6">
      <img class="w-16" :src="`${BASE_URI}/picture/arrow.svg`" />
      <img class="ml-3 w-16" :src="`${BASE_URI}/picture/dogicon.svg`" />
      <h1 class="ml-6 text-32px font-semibold grid items-center">
        {{ title }}
      </h1>
    </div>
    <div style="width:912px;">
      <span class="ml-12 text-24px font-semibold">NFT POOL</span>
      <div class="flex flex-wrap mt-3">
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
    <div class="ml-3" style="max-width:400px">
      <span class="text-24px font-semibold">Provide Content</span>
      <div class="mt-5 bg-white">
        <div class="ml-6 py-4 ">
          <span class="text-20px font-semibold">Provider</span>
        </div>
        <ul class="mx-3">
          <li class="flex">
            <div class="w-24">
              <span class="w-32 text-18px font-semibold">Name:</span>
            </div>
            <input
              class="ml-3 text-18px font-semibold mr-3  border-2 rounded-md border-gray-500 p-1"
              v-model="providerName"
            />
          </li>
          <div class="h-3 my-3" style="border-bottom:1px solid #000"></div>
          <li class="flex">
            <div class="w-24">
              <span class="text-18px font-semibold">Address:</span>
            </div>
            <span class="ml-3 text-18px font-semibold mr-3  truncate">
              {{ providerAddress }}
            </span>
          </li>
          <div class="h-3 my-3" style="border-bottom:1px solid #000"></div>
          <li class="flex">
            <div class="w-24">
              <span class="text-18px font-semibold">NFTName:</span>
            </div>
            <input
              class="ml-3 text-18px font-semibold mr-3  border-2 rounded-md border-gray-500 p-1"
              v-model="providerNFTName"
            />
          </li>
          <div class="h-3 my-3" style="border-bottom:1px solid #000"></div>
          <li class="flex">
            <div class="w-24">
              <span class="text-18px font-semibold">TokenID:</span>
            </div>
            <span class="ml-3 text-18px font-semibold mr-3 ">
              {{ providerTokenID }}
            </span>
          </li>
          <div class="h-3 my-3" style="border-bottom:1px solid #000"></div>
          <li class="flex">
            <div class="w-24">
              <span class="text-18px font-semibold">Discription:</span>
            </div>
            <textarea
              rows="2"
              class="ml-3 text-18px font-semibold mr-3  border-2 rounded-md border-gray-500 p-1"
              v-model="providerDiscription"
            />
          </li>
          <div class="h-3 my-3" style="border-bottom:1px solid #000"></div>
        </ul>
        <div class="m-3">
          <div class="grid place-items-center">
            <img :src="previewImage" class="uploading-image mt-3" />
            <input type="file" accept="image/*" @change="uploadImage" />
          </div>
        </div>
        <div class="text-center pb-6">
          <button
            v-on:click="submit()"
            class="cursor-pointer w-32 bg-gray-300 rounded-2xl "
          >
            <span class="font-semibold text-20px">Submit</span>
          </button>
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
      previewImage: null,
      BASE_URI: location.origin,
      providerName: "Jack",
      providerAddress: "D7CNqkRG8LWxxxxxxxxxxxxxxxxozDJLRGLBSo6BNVxB",
      providerNFTName: "WOW",
      providerTokenID: 344,
      providerDiscription: "This is a cute dog",
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
  mounted() {
    this.providerAddress = `${this.providerAddress.substring(0, 15)}...`;
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
    }
  }
};
</script>

<style></style>
