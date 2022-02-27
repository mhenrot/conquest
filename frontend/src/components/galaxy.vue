<template>
  <div class="co-galaxy">
    <div v-for="h in gHeight"
         class="co-galaxy--line"
         :key="h"
    >
      <div v-for="w in gWidth"
           class="co-galaxy--cell"
           :key="h+'-'+w"
      >
        <planet v-if="isPlanet(w - 1, h - 1)"
                :name="getPlanet(w - 1, h - 1).name"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Planet } from '@/interfaces/planet';
import { defineComponent, PropType } from 'vue';
import planet from './planet.vue';

export default defineComponent({
  components: { planet },
  name: 'Galaxy',
  props: {
    gWidth: {
      type: Number,
      required: true
    },
    gHeight: {
      type: Number,
      required: true
    },
    planets: {
      type: Array as PropType<Planet[]>,
      required: true
    }
  },
  setup(props) {
    const publicMethods = {
      isPlanet: (x: number, y: number) => {
        return props.planets.some((planet: Planet) => planet.x === x && planet.y === y);
      },
      getPlanet: (x: number, y: number) => {
        return props.planets.find((planet: Planet) => planet.x === x && planet.y === y);
      }
    };

    return {
      ...publicMethods
    };
  }
});
</script>

<style scoped lang="scss">
$width: 31px;

.co-galaxy--line {
  margin-bottom: round($width / 3 + 1);
  display: flex;
  gap: 1px;

  &:nth-child(2n) {
    margin-left: round($width / 2);
  }
}
.co-galaxy--cell {
  justify-content: center;
  align-content: center;
  position: relative;
  display: flex;

  &,
  &::before,
  &::after {
    background: #b0b0b0;
    height: round(($width + $width / 10) / 2);
    width: $width;
    content: '';
  }

  &::before,
  &::after {
    position: absolute;
    left: 0;
  }
  &::before {
    transform: rotate(-60deg);
  }
  &::after {
    transform: rotate(60deg);
  }
}
</style>
