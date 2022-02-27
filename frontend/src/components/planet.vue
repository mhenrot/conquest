<template>
  <div class="co-planet"
       :class="'co-planet__' + planets[type].toLowerCase() "
  >{{ name }}</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

enum planets {
  Venus = 1,
  Moon,
  Mars
}

export default defineComponent({
  name: 'Planet',
  props: {
    type: {
      type: Number,
      default: () => Math.floor(Math.random() * 3) + 1
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return {
      planets
    };
  }
});
</script>

<style scoped lang="scss">
.co-planet {
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  display: flex;
  z-index: 10;
  height: 100%;
  width: 60%;

  &.co-planet__venus {
    background: linear-gradient(135deg, rgba(0,87,255,1) 0%, rgba(0,255,230,1) 100%);
  }

  &.co-planet__moon {
    background: linear-gradient(135deg, rgba(158,158,158,1) 0%, rgba(72,72,72,1) 100%);
  }

  &.co-planet__mars {
    background: linear-gradient(135deg, rgba(255,93,0,1) 0%, rgba(255,161,0,1) 100%);
  }
}
</style>
