<script setup>
import { useModuleStore } from '@/stores/module'
const store = useModuleStore()

defineProps(['ModuleNumber'])
</script>

<template>
    <div class="row">
        <label for="exampleInputEmail1" class="form-label">Module {{ ModuleNumber }}</label>
        <div class="col-11">
            <select id="inputState" class="form-select">
                <option selected>Choose a module...</option>
                <option v-for="module in store.uniqueModuleList" :key="module['Course Code']">{{ module['Course Code'] }} {{ module['Course Title'] }}</option>
            </select>            
        </div>
        <div class="col-1 text-center pb-3">
            <button type="button" class="btn btn-danger">Remove</button>
        </div>
        <!--div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div-->
    </div>

</template>
