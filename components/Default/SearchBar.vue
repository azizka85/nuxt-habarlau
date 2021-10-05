<template>
  <div class="search-bar-wrapper">
    <div class="search-bar">
      <b-icon-list class="search-bar-menu-icon" @click="showMenu" />
      <div class="search-bar-area">
        <input 
          type="text" 
          :placeholder="Search" 
          class="search-bar-area-input"
        >
        <b-icon-search class="search-bar-area-icon" />
      </div>
      <b-icon-x class="search-bar-menu-icon" />
      <b-icon-filter class="search-bar-menu-icon" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BIconList, BIconSearch, BIconX, BIconFilter } from 'bootstrap-vue'

export default Vue.extend({
  methods: {
    showMenu() {
      this.$emit('showMenu')
    }
  },
  components: {
    BIconList, BIconSearch, BIconX, BIconFilter
  }
})
</script>
