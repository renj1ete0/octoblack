<script setup>
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
import ModuleSelectionField from '@/components/ModuleSelectionField.vue';
</script>

<template>
  <main>
    <div class="container">
      <br>
      <h1>Module Selection</h1>
      <h2>Select list of modules in basket</h2>

      <br>
      Number of Modules
      <input v-model="store.count" class="form-control" type="number">
      <br>
    
      <ModuleSelectionField v-for="i in store.count" :key="i" :ModuleNumber="i">  </ModuleSelectionField>
      <br>
      <button type="button" class="btn btn-success">Submit</button>
    </div>
  </main>
</template>

