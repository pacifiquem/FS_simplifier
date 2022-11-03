<script lang="ts">
import CopyrightComponent from "./copyright.vue";
export default {
  name: "AboutComponent",
  components: {
    CopyrightComponent: CopyrightComponent,
  },
};
</script>

<template>
  <div
    class="w-[100%] h-[100%] bg-[#f7f7f7] flex flex-row justify-center items-center"
  >
    <div class="h-[80%] w-[70%] shadow bg-[#feffff] mt-[-4.5rem] p-14">
      <div>
        <img
          src="../assets/images.png"
          alt="FS.simplifier image"
          class="float-right w-[40%] h-[70%] mr-8"
        />
        <h1 class="float-left font-medium text-5xl text-textColor mt-14 ml-14">
          More Information <br />
          About FS.simplifier
        </h1>
      </div>
      <div class="text-xl text-textColor ml-14">
        <p class="clear-left text-start mt-[26vh]">
          FS.simplifier is an online solution to many problems we face while
          sharing files. Especially In order to reduce cloud storage pricing.
          You can upload file to FS.simplifier, protect it with password, and
          start to share generated link instead of file . This FS.simplifier was
          developed by Pacifique Murangwa who is a fullstack developer based in
          Rwanda, It was inspired by the idea he got when he was trying to send
          files by using Slack in free trial, since he failed due to limited
          Storage he developed this tool. Reference
          <a
            href="https://github.com/pacifiquem/FS_simplifier"
            class="text-[#0000ffda]"
            >FS.simplifier's Github Repo .</a
          >
        </p>
      </div>
    </div>
  </div>
  <CopyrightComponent />
</template>

<style scoped></style>
