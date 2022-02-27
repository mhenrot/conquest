<template>
  <galaxy />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';

export default defineComponent({
  name: 'Start',
  setup() {
    onBeforeMount(() => {
      console.log('strat');
    });
  }
});
</script>

<style scoped lang="scss">
</style>
