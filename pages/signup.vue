<template>
  <div class="auth-container">
    <b-card title="Sign Up">
      <b-form>
        <b-form-group label="User Name">
          <b-form-input type="text" placeholder="User Name" required />
        </b-form-group>
        <b-form-group label="Email">
          <b-form-input type="email" placeholder="Email" required />
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input type="password" placeholder="Password" required />
        </b-form-group>
        <b-form-group label="Photo">
          <b-form-input type="text" placeholder="http://" required />
        </b-form-group>
        <div style="text-align: right">
          <b-link 
            to="/signin"
            class="text-decoration-none"
          >
            Sign In
          </b-link>
        </div>
        <div style="text-align: right; margin: 0.5rem 0">
          <b-button variant="primary">Sign Up</b-button>
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
      title: 'Sign Up'
    }
  }  
})
</script>
