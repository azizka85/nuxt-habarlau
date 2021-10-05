<template>
  <div class="menu">
    <div class="menu-profile">
      <b-link to="/settings">
        <b-avatar variant="light" size="lg" class="menu-avatar" />
      </b-link>
      <b-link to="/signin" class="menu-profile-item">Sign In/Up</b-link>
    </div>
    <div class="menu-items">
      <b-list-group>        
        <b-list-group-item to="/">
          <b-icon-search class="menu-item-icon" />
          &nbsp;
          Search Answers
        </b-list-group-item>
        <b-list-group-item to="/favorite">
          <b-icon-heart class="menu-item-icon" />
          &nbsp;
          Favorite
        </b-list-group-item>
        <b-list-group-item to="/settings">
          <b-icon-gear class="menu-item-icon" />
          &nbsp;
          Settings
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BIconSearch, BIconHeart, BIconGear } from 'bootstrap-vue'

export default Vue.extend({
  components: {
    BIconSearch, BIconHeart, BIconGear
  }
})
</script>
