import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import ModuleCsv from './ModuleList.csv'

export const useModuleStore = defineStore('module', () => {
  const moduleList = ModuleCsv
  const uniqueModuleList = computed(() => {
    let uniqueList = []
    let uniqueDict = []
    moduleList.forEach((module) => {
      if (!uniqueList.includes(module['Course Code'])) {
        uniqueList.push(module['Course Code'])
        uniqueDict.push(module)
      }
    })
    return uniqueDict
  })
  // function increment() {
  //   count.value++
  // }
  // function decrement() {
  //   count.value--
  // }

  return { moduleList, uniqueModuleList }
})
