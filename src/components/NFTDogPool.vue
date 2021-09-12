<template>
  <div class="content flex">
    <div class="flex mb-6">
      <img class="w-16" :src="`${BASE_URI}/picture/arrow.svg`" v-on:click="goToPool('dog')"/>
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
              <span class="text-18px font-semibold">Description:</span>
            </div>
            <textarea
              rows="2"
              class="ml-3 text-18px font-semibold mr-3  border-2 rounded-md border-gray-500 p-1"
              v-model="providerDescription"
            />
          </li>
          <div class="h-3 my-3" style="border-bottom:1px solid #000"></div>
          <li class="flex">
            <div class="w-24">
              <span class="text-18px font-semibold">Image URL:</span>
            </div>
            <input
              class="ml-3 text-18px font-semibold mr-3  border-2 rounded-md border-gray-500 p-1"
              v-model="imageURL"
            />
          </li>
          <div class="h-3 my-3" style="border-bottom:1px solid #000"></div>
        </ul>
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
      title: "Back to Dog Pool~~~~~~~~~~~~",
      previewImage: null,
      BASE_URI: location.origin,
      providerName: "",
      providerAddress: "Connect to wallet",
      providerNFTName: "",
      providerDescription: "This is a cute dog",
      imageURL: "",
      NFTs: [],
    };
  },
  name: "NFTPoolPage",
  async mounted() {
    const tokens = await window.NftPool.getPoolToken(window.rToken.address);
    for (let i = 0; i < tokens.length; i++) {
      const url = await window.ERC721.tokenURI(tokens[i]);
      const obj = await (await fetch(url)).json();
      this.NFTs.push({
        img: obj.image,
        tokenID: tokens[i],
      });
    }
    this.providerAddress = window.accounts[0];
  },
  methods: {
    async submit() {
      const res = await this.axios.post(
        "https://api.jsonbin.io/v3/b",
        {
          description: this.providerDescription,
          image: this.imageURL,
          name: this.providerNFTName,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key": "$2b$10$MxyDmiGD7nWGB9Qi7amIsOTD0jOL18F4Us6QVw5rJ4pURRpv6BVN6",
            "X-Bin-Private": false,
          },
        }
      )
      const id = res.data.metadata.id;
      const metadata = "https://api.jsonbin.io/b/" + id;

      await window.NftPool.poolMintToken("cfxtest:acbn3mt84c4yf1kw8n28n9kvaswb20wvy6zarr8xn2", metadata)
        .sendTransaction({
          from: window.accounts[0]
        });
    },

    goToPool(poolName) {
      this.$router.push({ path: `/pool/${poolName}` });
    }

  }
};
</script>

<style></style>
