<template>
    <div style="margin-top: 20px">
        <model-obj src="@/assets/tree.obj"></model-obj>
        <!-- <img src="@/assets/tree.obj"/> -->
    </div>
</template>
<script>
import { ModelObj } from 'vue-3d-model';
export default {
  name: 'Model',
  components: { ModelObj }
}
</script>
