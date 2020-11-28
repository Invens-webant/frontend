<template>
  <div class="container">
    <Table/>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from "@/components/offersList/Table.vue";

export default {
  name: "Home",
  components: {
    Table
  }
};
</script>

<style scoped>
</style>