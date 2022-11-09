<script lang="ts">
export default {
  name: "FormComponent",
  data: function () {
    const data: {
      activeClass: boolean;
      SelectedFileName?: string;
      fileToogle: boolean;
    } = {
      activeClass: false,
      SelectedFileName: "",
      fileToogle: false,
    };

    return data;
  },
  methods: {
    fileEnteredDropZone() {
      this.activeClass = !this.activeClass;
    },
    dropHander(e: DragEvent) {
      this.SelectedFileName = e.dataTransfer?.files[0].name;
      this.fileToogle = !this.fileToogle;
      this.activeClass = !this.activeClass;
    },
    selectFileHandler() {
      if(this.$refs?.value != "") {
        this.SelectedFileName = "file Selected";
        this.fileToogle = !this.fileToogle;
        this.activeClass = !this.activeClass;
      }else {
        return;
      }
    }
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
        <h2 class="text-[#232323db] text-3xl font-medium">Upload File</h2>
        <div class="ml-1 w-[85%] h-[12%] mt-8 mb-6">
          <input
            type="password"
            class="w-[100%] h-[100%] outline-[.5px] border-[#2a2a2b78] border-solid border-[1px] rounded px-8"
            name="password"
            id="passwordInput"
            placeholder="Enter Password"
          />
        </div>
        <div
          class="ml-1 w-[85%] h-[40%] border-[#2a2a2b78] border-dashed border-2 rounded"
        >
          <div
            class="w-[100%] h-[100%]"
            :class="{ dropActive: activeClass }"
            @dragenter.prevent="fileEnteredDropZone"
            @dragleave.prevent="fileEnteredDropZone"
            @dragover.prevent
            @drop.prevent="dropHander"
          >
            <div
              class="flex flex-col justify-center items-center h-[100%] w-[100%]"
              :class="{
                showFileUpload: !fileToogle,
                showFileUpload2: fileToogle,
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="35"
                fill="gray"
                class="bi bi-cloud-upload"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                />
              </svg>
              <span class="text-[1rem] text-textColor mt-2"
                >Drag & Drop File Here</span
              >
              <span class="text-[1rem] text-textColor">Or</span>
              <label
                for="File"
                class="text-[1rem] text-[#3232e8ec] font-semibold hover:cursor-pointer"
                @click="selectFileHandler"
                >Browse File</label
              >
              <input type="file" name="file" id="File" class="hidden" />
            </div>
            <div
              class="flex flex-col justify-center items-center h-[100%] w-[100%]"
              :class="{
                showFileUpload2: !fileToogle,
                showFileUpload: fileToogle,
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="35"
                fill="gray"
                class="bi bi-file-earmark-arrow-down"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"
                />
                <path
                  d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"
                />
              </svg>
              <p class="text-[1.2rem] text-textColor mt-2">
                Selected File Name:
              </p>
              <span class="text-[1rem] text-textColor mt-1">{{
                SelectedFileName
              }}</span>
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="bg-[#3232e8ec] w-[85%] h-[12%] text-white text-[1rem] rounded mt-7 active:scale[98%] hover:cursor-pointer"
        >
          Upload
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.dropActive {
  background-color: rgba(213, 229, 255, 0.748);
}

.showFileUpload {
  display: flex;
}

.showFileUpload2 {
  display: none;
}
</style>
