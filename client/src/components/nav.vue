<script lang="ts">
import UsageComponent from "./Usage.vue";
import contactVue from "./contact.vue";
import downloadcounterVue from "./downloadcounter.vue";
import aboutVue from "./about.vue";
export default {
  name: "NavBar",
  components: {
    UsageComponent: UsageComponent,
    contactVue: contactVue,
    downloadcounterVue: downloadcounterVue,
    aboutVue: aboutVue,
  },
  data: function () {
    return {
      usage: "notDisplayed",
      about: "notDisplayed",
      contact: "notDisplayed",
      downloadcounter: "notDisplayed",
      below: "above",
    };
  },
  methods: {
    toogleDisplays(componentName: string) {
      switch (componentName) {
        case "usage":
          if (this.usage === "notDisplayed") {
            this.usage = "displayed";
          } else {
            this.usage = "notDisplayed";
          }
          break;

        case "about":
          if (this.about === "notDisplayed") {
            this.about = "displayed";
          } else {
            this.about = "notDisplayed";
          }
          break;
        case "contact":
          if (this.contact === "notDisplayed") {
            this.contact = "displayed";
          } else {
            this.contact = "notDisplayed";
          }
          break;
        case "downloadcounter":
          if (this.downloadcounter === "notDisplayed") {
            this.downloadcounter = "displayed";
          } else {
            this.downloadcounter = "notDisplayed";
          }
          break;
      }
    },

    imagesToogleUsage() {
      this.usage = "notDisplayed";
      this.contact = "notDisplayed";
      this.about = "notDisplayed";
      this.downloadcounter = "notDisplayed";
    },
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
        v-on:click="toogleDisplays('usage')"
      >
        Usage
      </button>
      <button
        class="hover:text-[#3232e8ec] hover:text-[1.11rem]"
        v-on:click="toogleDisplays('about')"
      >
        About
      </button>
      <button
        class="hover:text-[#3232e8ec] hover:text-[1.11rem]"
        v-on:click="toogleDisplays('contact')"
      >
        Contact
      </button>
      <button
        class="hover:text-[#3232e8ec] hover:text-[1.11rem]"
        v-on:click="toogleDisplays('downloadcounter')"
      >
        Download Counter
      </button>
    </div>
    <button
      class="bg-[#3232e8ec] text-white ml-[30%] rounded h-[55%] w-[7%] active:scale-[98%]"
    >
      Donate
    </button>
  </div>
  <div :class="usage">
    <UsageComponent />
  </div>
  <div :class="about">
    <aboutVue />
  </div>
  <div :class="contact">
    <contactVue />
  </div>
  <div :class="downloadcounter">
    <downloadcounterVue />
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
