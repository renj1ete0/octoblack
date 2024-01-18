<script setup>
import { mapStores} from 'pinia'
import { useCounterStore } from '@/stores/counter'
import { useModuleStore } from '@/stores/module'
import ModuleSelectionField from '@/components/ModSelectionField.vue';

</script>

<template>
  <main>
    <div class="container">
      <br>
      <h1>Module Similarity Report</h1>
      <h2>XXX YYY ZZZ</h2>

      <br>
      Number of Modules: {{ counter }}
      <!-- <input v-model="counter" class="form-control" type="number" @keyup="updatecounter"> -->
      <br>
      <li v-for="(modules, area) in moduleStore.moduleBasket" :key="area">{{ area }}  {{ modules }} </li>
      <!-- <ModuleSelectionField v-for="i in counter" :key="i" :ModuleNumber="i">  </ModuleSelectionField> -->
      <br>
      <!-- <button type="button" class="btn btn-success" @click="submit">Submit</button> -->
    </div>
  </main>
</template>

<script>

export default {
  data() {
    return {
      counter: 5,
      selModules: [],
    }
  },
  mounted() {
    this.moduleStore.moduleBasket
  },
  computed: {
    // note we are not passing an array, just one store after the other
    // each store will be accessible as its id + 'Store'
    ...mapStores(useCounterStore, useModuleStore)

  },
  methods: {
    submit() {
      console.log(this.counter)
      for (let i = 0; i < this.counter; i++) {
        let modName = "Module" + (i + 1)
        let elem = document.getElementById(modName) // Need to include checks for null (not valid selected value before processing)
        this.selModules.push(elem)
      }
      console.log(this.selModules) // Select modules in list format
      this.$router.push('/modsimilarity')
    },
    updatecounter() {
      this.counterStore.count = this.counter
    }
  }
  
}
</script>