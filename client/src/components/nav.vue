<script lang="ts">
export default {
  name: "NavBar",
};
</script>

<template>
  <div
    class="flex flex-row gap-[3%] items-center py-2 bg-[#feffff] shadow-md w-[100vw] h-[10vh] text-[#292929e3]"
  >
    <img src="../assets/logo.png" alt="FS.simplifier LOGO" class="ml-[7.5%]" />
    <div class="flex flex-row gap-12 p-4 text-[1.1rem]">
      <button class="hover:text-[#3232e8ec] hover:text-[1.13rem]">
        Download Counter
      </button>
      <button class="hover:text-[#3232e8ec] hover:text-[1.13rem]">Usage</button>
      <button class="hover:text-[#3232e8ec] hover:text-[1.13rem]">
        Contact
      </button>
      <button class="hover:text-[#3232e8ec] hover:text-[1.13rem]">About</button>
    </div>
    <button class="bg-[#3232e8ec] ml-[30%] rounded h-[60%] w-[7%]">
      Donate
    </button>
  </div>
</template>

<style scoped></style>
