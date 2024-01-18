<script setup>
import { mapStores} from 'pinia'
import { useModuleStore } from '@/stores/module'
const store = useModuleStore()

defineProps(['ModuleNumber'])
</script>

<template>
    <div class="row">
        <label for="exampleInputEmail1" class="form-label">Module {{ ModuleNumber }}</label>
        <div class="col-2">
            <select :id="'Module' + ModuleNumber" class="form-select" @change="updateModName">
                <option selected>Select Module Code</option>
                <option v-for="(module, modcode) in store.uniqueModuleDict" :key="modcode">{{ modcode }}</option>
            </select>            
        </div>
        <div class="col-9">
            <select :id="'Module' + ModuleNumber + 'Name'" class="form-select" @change="updateModCode">
                <option selected>Select a module...</option>
                <option v-for="(module, modcode) in store.uniqueModuleDict" :key="modcode">{{ module }}</option>
            </select>
        </div>
        <div class="col-1 text-center pb-3">
            <button type="button" class="btn btn-danger">Remove</button>
        </div>
        <!--div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div-->
    </div>

</template>

<script>

export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  computed: {
    // note we are not passing an array, just one store after the other
    // each store will be accessible as its id + 'Store'
    ...mapStores(useModuleStore)

  },
  methods: {
    updateModCode(event){
        let elemupdate = event.target.id.slice(0, -4)
        for (let modcode in this.moduleStore.uniqueModuleDict){
            if (this.moduleStore.uniqueModuleDict[modcode] == event.target.value){
                document.getElementById(elemupdate).value = modcode
            }
        }
    },
    updateModName(event){
        let elemupdate = event.target.id + 'Name'
        document.getElementById(elemupdate).value = this.moduleStore.uniqueModuleDict[event.target.value]
    }
  }
  
}
</script>

