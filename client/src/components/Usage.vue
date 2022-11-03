<script lang="ts">
import CopyrightComponent from "./copyright.vue";
export default {
  name: "UsageComponent",
  components: {
    CopyrightComponent: CopyrightComponent,
  },
};
</script>

<template>
  <div
    class="w-[100%] h-[100%] bg-[#f7f7f7] flex flex-row justify-center items-center"
  >
    <div class="h-[80%] w-[70%] shadow bg-[#feffff] mt-[-4.5rem]"></div>
  </div>
  <CopyrightComponent />
</template>

<style scoped></style>
