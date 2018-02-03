<template>
  <screen ref="screen" :smartCSR="true" :keys="true" :mouse="true">
    <component :is="activeComponent" align="center" valign="middle" top="center" left="center" width="50%" height="50%" />
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
      activeComponent: 'Page1'
    }
  },
  mounted () {
    this.$refs.screen.key(['C-c'], () => {
      process.exit(0)
    })
    this.$refs.screen.key(['f1'], () => {this.activeComponent = 'Page1'})
    this.$refs.screen.key(['f2'], () => {this.activeComponent = 'Page2'})
  }
}
</script>
