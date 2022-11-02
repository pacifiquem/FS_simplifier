<script lang="ts">
import UsageComponent from "./Usage.vue";
export default {
  name: "NavBar",
  components: {
    UsageComponent: UsageComponent,
  },
  data: function () {
    return {
      lina: "notDisplayed",
      below: "above",
    };
  },
  methods: {
    toogleUsage() {
      if (this.lina === "notDisplayed") {
        this.lina = "displayed";
      } else {
        this.lina = "notDisplayed";
      }
    },
    imagesToogleUsage() {
      this.lina = "notDisplayed";
    }
  },
};
</script>

<template>
  <div
    class="flex flex-row gap-[2%] items-center py-2 bg-[#feffff] shadow-md w-[100vw] h-[10vh] text-[#292929e3]"
  >
    <img
      src="../assets/logo.png"
      alt="FS.simplifier LOGO"
      class="ml-[7.5%] hover:cursor-pointer"
      v-on:click="imagesToogleUsage"
    />
    <div class="flex flex-row gap-12 p-4 text-[1.1rem]">
      <button
        class="hover:text-[#3232e8ec] hover:text-[1.11rem]"
        v-on:click="toogleUsage"
      >
        Usage
      </button>
      <button class="hover:text-[#3232e8ec] hover:text-[1.11rem]">About</button>
      <button class="hover:text-[#3232e8ec] hover:text-[1.11rem]">
        Contact
      </button>
      <button class="hover:text-[#3232e8ec] hover:text-[1.11rem]">
        Download Counter
      </button>
    </div>
    <button
      class="bg-[#3232e8ec] text-white ml-[30%] rounded h-[55%] w-[7%] active:scale-[98%]"
    >
      Donate
    </button>
  </div>
  <div :class="lina">
    <UsageComponent />
  </div>
</template>

<style scoped>
.displayed {
  display: block;
  position: absolute;
  height: 90vh;
  width: 100vw;
  z-index: 1;
}
.notDisplayed {
  display: none;
}
</style>
