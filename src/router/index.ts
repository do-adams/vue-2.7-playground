import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import ScriptSetup from '@/components/script-setup/HelloWorld.vue'
import CompositionApi from '@/components/composition-api/HelloWorld.vue'
import OptionsApi from '@/components/options-api/HelloWorld.vue'
import ClassApi from '@/components/class-api/HelloWorld.vue'
import ColorPicker from '@/components/css/ColorPicker.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/script-setup',
  },
  {
    path: '/script-setup',
    name: 'Setup',
    component: ScriptSetup,
  },
  {
    path: '/composition-api',
    name: 'Composition',
    component: CompositionApi,
  },
  {
    path: '/options-api',
    name: 'Options',
    component: OptionsApi,
  },
  {
    path: '/class-api',
    name: 'Class',
    component: ClassApi,
  },
  {
    path: '/css-v-bind',
    name: 'Color',
    component: ColorPicker,
  },
]

const router = new VueRouter({
  routes,
})

export default router
