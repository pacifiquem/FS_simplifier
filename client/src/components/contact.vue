<script lang="ts">
import CopyrightComponent from "./copyright.vue";
export default {
  name: "ContactComponent",
  components: {
    CopyrightComponent: CopyrightComponent,
  },
};
</script>

<template>
  <div class="h-[90vh] w-[100vw] flex flex-col justify-center items-center">
    <div class="h-[70%] w-[35%] shadow bg-[#feffff] mt-[-4.5rem]">
      <form
        action="#"
        method="POST"
        class="w-[100%] h-[100%] p-6 flex flex-col items-center"
      >
        <h2 class="text-[#232323db] text-3xl font-medium">Contact Us</h2>
        <div class="ml-1 w-[85%] h-[12%] mt-8 mb-6">
          <input
            type="password"
            class="w-[100%] h-[100%] outline-[.5px] border-[#2a2a2b78] border-solid border-[1px] rounded"
            name="message"
            id="MessageInput"
            placeholder="Enter Your Names"
          />
        </div>
        <div class="ml-1 w-[85%] h-[40%]">
          <textarea
            class="w-[100%] h-[100%] outline-[.5px] border-[#2a2a2b78] border-solid border-[1px] rounded resize-none"
          >
          </textarea>
        </div>
        <button
          type="submit"
          class="bg-[#3232e8ec] w-[85%] h-[12%] text-white text-[1rem] rounded mt-7 active:scale[98%] hover:cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
  <CopyrightComponent />
</template>

<style scoped></style>
