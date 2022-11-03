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
    <div class="h-[80%] w-[70%] shadow bg-[#feffff] mt-[-4.5rem] p-8">
      <h1 class="text-center text-4xl font-medium text-textColor">
        FS.simplifier Usage Guide
      </h1>
      <div
        class="flex flex-row justify-center items-center gap-[3%] w-[100%] h-[85%] mt-8"
      >
        <div class="w-[30%] h-[90%] bg-[#00000065]">
          <div
            class="w-[100%] h-[50%] bg-white border-solid border-[#00000034] border-[0.5px]"
          ></div>
          <div class="w-[100%] h-[50%] shadow-md"></div>
        </div>
        <div class="w-[30%] h-[90%] bg-[#00000072]">
          <div
            class="w-[100%] h-[50%] bg-white border-solid border-[#00000034] border-[0.5px]"
          ></div>
          <div class="w-[100%] h-[50%] shadow-md"></div>
        </div>
        <div class="w-[30%] h-[90%] bg-[#00000061]">
          <div
            class="w-[100%] h-[50%] bg-white border-solid border-[#00000034] border-[0.5px]"
          ></div>
          <div class="w-[100%] h-[50%] shadow-md"></div>
        </div>
      </div>
    </div>
  </div>
  <CopyrightComponent />
</template>

<style scoped></style>
