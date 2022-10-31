<script lang="ts">
export default {
  name: "NavBar",
};
</script>

<template>
  <div
    class="flex flex-row gap-[38%] px-16 py-2 bg-[#feffff] shadow-md w-[100vw]"
  >
    <img src="../assets/logo.png" alt="FS.simplifier LOGO" class="w-40" />
    <div class="flex flex-row gap-8 p-4 text-xl">
      <button class="hover:underline">Usage</button>
      <button class="hover:underline">Download Counter</button>
      <button class="hover:underline">Contact</button>
      <button class="hover:underline">About</button>
      <button class="ml-20 bg-[#1D1CE5] px-4 py-[0.38rem] rounded">
        Donate
      </button>
    </div>
  </div>
</template>

<style scoped></style>
