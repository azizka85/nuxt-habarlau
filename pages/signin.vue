<template>
  <div class="auth-container">
    <b-card title="Sign In">
      <b-form @submit.prevent="login"> 
        <b-form-group label="Email">
          <b-form-input type="email" placeholder="Email" required v-model="email" />
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input type="password" placeholder="Password" required v-model="password" />
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
          <b-button variant="primary" type="submit">Sign In</b-button>
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
  data() {
    return {
      email: '',
      password: ''
    }
  },
  head() {
    return {
      title: 'Sign In'
    }
  },
  methods: {
    async login() {      
      try {
        await this.$auth.loginWith('local', {data: {
          email: this.email,
          password: this.password
        }})           

        this.$router.push('/')
      } catch(err) {
        console.log(err)        
      }
    }
  } 
})
</script>
