<template>
  <h1>Créer une nouvelle partie</h1>
  <form>
    <p>
      <label>
        Largeur
        <input
          :title="inputWidth"
          v-model="inputWidth"
          type="range"
          min="10"
          max="50"
        >
      </label>
    </p>
    <p>
      <label>
        Longueur
        <input
          :title="inputHeight"
          v-model="inputHeight"
          type="range"
          min="10"
          max="50"
        >
      </label>
    </p>
    <p>
      <label>
        Nombre de planètes
        <input
          :title="nbPlanets"
          v-model="nbPlanets"
          type="range"
          min="10"
          :max="inputWidth * inputHeight"
        >
      </label>
    </p>
    <p>
      <label>
        Nom du joueur
        <input
          v-model="playerName"
          type="text"
        >
      </label>
    </p>
    <p>
      <button type="button"
              @click="regen"
      >
        Regénérer
      </button>
      <button type="button"
              @click="launch"
      >
        Lancer
      </button>
    </p>
  </form>

  <galaxy class="co-galaxy-preview"
          :g-width="boardWidth"
          :g-height="boardHeight"
          :planets="planets"
  />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { ref, Ref } from 'vue';
import galaxy from '@/components/galaxy.vue';
import PlanetModel from '@/models/planet.model';
import router from '@/router';

export default defineComponent({
  components: { galaxy },
  name: 'NewGame',
  setup() {
    const playerName: Ref<string> = ref(localStorage.getItem('playerName') || '');
    const planets: Ref<PlanetModel[]> = ref([]);
    const nbPlanets: Ref<number> = ref(10);
    const boardWidth: Ref<number> = ref(10);
    const boardHeight: Ref<number> = ref(10);
    const inputWidth: Ref<number> = ref(10);
    const inputHeight: Ref<number> = ref(10);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const unavailableCell = (x: number, y:number) => {
      return planets.value.some((planet: PlanetModel) => planet.x === x && planet.y === y);
    };

    const publicMethods = {
      regen: () => {
        planets.value = [];
        boardWidth.value = +inputWidth.value;
        boardHeight.value = +inputHeight.value;
        for (let i = 0; i < nbPlanets.value; i++) {
          let x: number;
          let y: number;
          do {
            x = Math.floor(Math.random() * boardWidth.value);
            y = Math.floor(Math.random() * boardHeight.value);
          } while (unavailableCell(x, y));

          planets.value.push(new PlanetModel({
            name: alphabet.charAt(i).toUpperCase(),
            x,
            y
          }));
        }

        console.log(planets);
      },
      launch: () => {
        localStorage.setItem('playerName', playerName.value);
        router.push({ name: 'Start' });
      }
    };

    return {
      playerName,
      nbPlanets,
      boardWidth,
      boardHeight,
      inputWidth,
      inputHeight,
      planets,
      ...publicMethods
    };
  }
});
</script>

<style scoped lang="scss">
.co-galaxy-preview {
  margin-top: 50px;
}
</style>
