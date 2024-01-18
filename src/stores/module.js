import { computed } from 'vue'
import { defineStore } from 'pinia'

import ModuleCsv from './ModuleList.csv'

export const useModuleStore = defineStore('module', () => {
  const moduleList = ModuleCsv
  const uniqueModuleDict = computed(() => {
    let uniqueList = []
    let uniqueDict = {}
    moduleList.forEach((module) => {
      if (!uniqueList.includes(module['Course Code'])) {
        uniqueList.push(module['Course Code'])
        uniqueDict[module['Course Code']] = module['Course Title']
      }
    })
    return uniqueDict
  })

  const moduleBasket = computed(() => {
    let moduleBasket = {}
    moduleList.forEach((module) => {
      if (module['Course Areas'] in moduleBasket) {
        moduleBasket[module['Course Areas']].push(module['Course Code'])
      } else {
        moduleBasket[module['Course Areas']] = [module['Course Code']]
      }
    })
    console.log(moduleBasket)
    return moduleBasket    
  })
  // function increment() {
  //   count.value++
  // }
  // function decrement() {
  //   count.value--
  // }

  return { moduleList, uniqueModuleDict, moduleBasket }
})
