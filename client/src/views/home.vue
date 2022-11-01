<script lang="ts">
import NavBar from "../components/nav.vue";
import FormComponent from "../components/form-component.vue";
import CopyRight from "../components/copyright.vue";

export default {
  name: "HomePage",
  components: {
    NavBar: NavBar,
    FormComponent: FormComponent,
    CopyRight: CopyRight,
  },
};
</script>

<template>
  <NavBar />
  <div class="bg-[#f7f7f7] relative">
    <FormComponent />
    <CopyRight />
  </div>
</template>

<style scoped></style>
