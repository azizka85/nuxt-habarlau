<template>
  <div>
    <DefaultSearchBar @showMenu="sidebarVisible = true" />
    <b-sidebar no-header backdrop shadow v-model="sidebarVisible">
      <DefaultMenuBar />
    </b-sidebar>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    sidebarVisible: false
  })
})
</script>
