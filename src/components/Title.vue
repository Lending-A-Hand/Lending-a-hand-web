<template>
  <div class="title flex m-6">
    <img
      :src="`${BASE_URI}/picture/logo.svg`"
      v-on:click="$router.push({ path: '/' })"
    />
    <div
      class="m-4 cursor-pointer w-32 bg-gray-300 rounded-2xl grid place-content-center"
      v-on:click="$router.push({ path: `/pool` })"
    >
      <span class="font-semibold text-20px">Pools</span>
    </div>
    <div
      class="m-4 cursor-pointer w-32 bg-gray-300 rounded-2xl grid place-content-center"
      v-on:click="clickEvents()"
    >
      <span class="font-semibold text-20px">Events</span>
    </div>
    <div
      class="m-4 cursor-pointer w-32 bg-gray-300 rounded-2xl grid place-content-center"
      v-on:click="clickDocs()"
    >
      <span class="font-semibold text-20px">Docs</span>
    </div>
    <div class="flex ml-auto">
      <div
        class="m-4 cursor-pointer w-32 bg-gray-300 rounded-2xl grid place-content-center"
        v-on:click="clickNetwork()"
      >
        <span class="font-semibold text-20px">network</span>
      </div>
      <div
        class="m-4 cursor-pointer w-32 bg-gray-300 rounded-2xl grid place-content-center"
        v-on:click="clickConnect()"
      >
        <span class="font-semibold text-20px">connect</span>
      </div>
      <div
        class="m-4 cursor-pointer w-32 bg-gray-300 rounded-2xl grid place-content-center"
        v-on:click="clickLang()"
      >
        <span class="font-semibold text-20px">lang</span>
      </div>
    </div>
  </div>
  <div
    class="w-full h-3 mb-6 mx-auto "
    style="border-bottom:1px solid #000"
  ></div>
</template>

<script>
import {Conflux} from "js-conflux-sdk";
import rTokenABI from "../abi/RToken.json";
import USDTABI from "../abi/USDT.json";

export default {
  data() {
    return {
      BASE_URI: location.origin
    };
  },
  methods: {
    clickPools() {},

    clickConnect: async () => {
      window.accounts = await window.conflux.enable();
      const cfx = new Conflux({networkId: 1});
      cfx.provider = window.conflux;
      window.cfx = cfx;

      window.rToken = cfx.Contract({
        abi: rTokenABI,
        address: "cfxtest:acbn3mt84c4yf1kw8n28n9kvaswb20wvy6zarr8xn2",
      })
      window.USDT = cfx.Contract({
        abi: USDTABI,
        address: "cfxtest:acd7wfr80hvee4b1mawa3e8g7ky348n7cawzubzmuw",
      })
      // window.nftPool = cfx.Contract({ abi: , address: })
    }
  }
};
</script>

<style></style>
