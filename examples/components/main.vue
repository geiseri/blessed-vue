<template>
  <screen ref="screen" :smartCSR="true" :keys="true" :mouse="true">
    <component :is="activeComponent" align="center" valign="middle" top="center" left="center" width="50%" height="50%" />
    <listbar :items="items" :keys="true" :mouse="true" top="100%-1" :left="0" :height="1" width="100%" />
  </screen>
</template>

<script>

import Page1 from './page1.vue'
import Page2 from './page2.vue'

export default {
  name: 'main-window',
  components: {
    Page1,
    Page2
  },
  data: () => {
    return {
      activeComponent: 'Page1',
      items: [
        { keys: ['f1'], text: 'Page1', callback: () => {this.activeComponent = 'Page1'}},
        { keys: ['f2'], text: 'Page2', callback: () => {this.activeComponent = 'Page2'}}
      ]
    }
  },
  mounted () {
    this.$refs.screen.key(['C-c'], () => {
      process.exit(0)
    })
  }
}
</script>
