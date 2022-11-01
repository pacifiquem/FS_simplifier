<script lang="ts">
export default {
  name: "NavBar",
};
</script>

<template>
  <div
    class="flex flex-row gap-[2%] items-center py-2 bg-[#feffff] shadow-md w-[100vw] h-[10vh] text-[#292929e3]"
  >
    <img src="../assets/logo.png" alt="FS.simplifier LOGO" class="ml-[7.5%]" />
    <div class="flex flex-row gap-12 p-4 text-[1.1rem]">
      <button class="hover:text-[#3232e8ec] hover:text-[1.11rem]">Usage</button>
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
</template>

<style scoped></style>
