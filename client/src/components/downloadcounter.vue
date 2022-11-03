<script lang="ts">
import CopyrightComponent from "./copyright.vue";
export default {
  name: "DownloadCounterComponent",
  components: {
    CopyrightComponent: CopyrightComponent,
  },
};
</script>

<template>
  <div
    class="w-[100%] h-[100%] bg-[#f7f7f7] flex flex-row justify-center items-center"
  >
    <div class="h-[50%] w-[45%] shadow bg-[#feffff] mt-[-4.5rem]">
      <form
        action="#"
        method="POST"
        class="w-[100%] h-[70%] p-6 flex flex-col items-center"
      >
        <h2 class="text-[#232323db] text-3xl font-medium">Download Counter</h2>
        <div class="ml-1 w-[85%] h-[35%] mt-12 mb-6 flex flex-row">
          <input
            type="password"
            class="w-[70%] h-[100%] outline-[.5px] border-[#2a2a2b78] border-solid border-[1px]"
            name="password"
            id="passwordInput"
            placeholder="Enter Password"
          />
          <button
            type="submit"
            class="bg-[#3232e8ec] w-[30%] h-[100%] text-white text-[1.2rem] active:scale[98%] hover:cursor-pointer"
          >
            Check
          </button>
        </div>
      </form>
      <h2 class="text-[#232323db] text-2xl ml-20">
        Download Counts : &nbsp; &nbsp; --
      </h2>
    </div>
  </div>
  <CopyrightComponent />
</template>

<style scoped></style>
