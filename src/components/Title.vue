<template>
  <div class="title flex m-6">
    <img :src="`${BASE_URI}/picture/logo.svg`" />
    <div
      class="m-4 cursor-pointer w-32 bg-gray-300 rounded-2xl grid place-content-center"
      v-on:click="clickPools()"
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
export default {
  data() {
    return {
      BASE_URI: location.origin
    };
  },
  methods: {
    clickPools() {}
  }
};
</script>

<style></style>
