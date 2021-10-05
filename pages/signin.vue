<template>
  <div class="auth-container">
    <b-card title="Sign In">
      <b-form>
        <b-form-group label="Email">
          <b-form-input type="email" placeholder="Email" required />
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input type="password" placeholder="Password" required />
        </b-form-group>
        <div style="text-align: right">
          <b-link 
            to="/signup"
            class="text-decoration-none"
          >
            Sign Up
          </b-link>
        </div>
        <div style="text-align: right; margin: 0.5rem 0">
          <b-button variant="primary">Sign In</b-button>
          <b-button to="/">Cancel</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  auth: false,
  layout: 'default',
  head() {
    return {
      title: 'Sign In'
    }
  } 
})
</script>
