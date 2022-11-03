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
        <div
          class="w-[30%] h-[90%] rounded shadow hover:shadow-lg hover:cursor-pointer"
        >
          <div
            class="w-[100%] h-[50%] border-solid border-[#0000001c] border-[0.5px]"
          >
            <img
              src="../assets/UsagePassword.jpg"
              alt="Password Usage Image"
              style="width: 100%; height: 100%"
            />
          </div>
          <div class="w-[100%] h-[50%] shadow-md">
            <div
              class="w-[13%] h-[20%] rounded-[50%] bg-[#3232e8ec] flex justify-center items-center relative top-4 ml-4"
            >
              <p class="text-xl text-center font-semibold text-white">1</p>
            </div>
            <p class="text-start text-textColor text-xl px-4 pt-8">
              Add password which will protect your file from non-authorized
              downloads .
            </p>
          </div>
        </div>
        <div
          class="w-[30%] h-[90%] rounded shadow hover:shadow-lg hover:cursor-pointer"
        >
          <div
            class="w-[100%] h-[50%] bg-white border-solid border-[#0000001c] border-[0.5px]"
          >
            <img
              src="../assets/UsageFiles.jpg"
              alt="Files Usage Image"
              style="width: 100%; height: 100%"
            />
          </div>
          <div class="w-[100%] h-[50%] shadow-md">
            <div
              class="w-[13%] h-[20%] rounded-[50%] bg-[#3232e8ec] flex justify-center items-center relative top-4 ml-4"
            >
              <p class="text-xl text-center font-semibold text-white">2</p>
            </div>
            <p class="text-start text-textColor text-xl px-4 pt-8">
              Upload a file you want to share to FS.simplifier .
            </p>
          </div>
        </div>
        <div
          class="w-[30%] h-[90%] rounded shadow hover:shadow-lg hover:cursor-pointer"
        >
          <div
            class="w-[100%] h-[50%] bg-white border-solid border-[#0000001c] border-[0.5px] flex justify-center items-center"
          >
            <img
              src="../assets/UsageLinks.png"
              alt="Links Usage Image"
              style="width: 50%; height: 70%"
            />
          </div>
          <div class="w-[100%] h-[50%] shadow-md">
            <div
              class="w-[13%] h-[20%] rounded-[50%] bg-[#3232e8ec] flex justify-center items-center relative top-4 ml-4"
            >
              <p class="text-xl text-center font-semibold text-white">3</p>
            </div>
            <p class="text-start text-textColor text-xl px-4 pt-8">
              Now start sharing generated link along with password to anyone you
              want .
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CopyrightComponent />
</template>

<style scoped></style>
