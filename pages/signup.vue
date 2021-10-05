<template>
  <div class="auth-container">
    <b-card title="Sign Up">
      <b-form @submit.prevent="create">
        <b-form-group label="User Name">
          <b-form-input type="text" placeholder="User Name" required v-model="name" />
        </b-form-group>
        <b-form-group label="Email">
          <b-form-input type="email" placeholder="Email" required v-model="email" />
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input type="password" placeholder="Password" required v-model="password" />
        </b-form-group>
        <b-form-group label="Photo">
          <b-form-input type="text" placeholder="http://" v-model="photo" />
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
          <b-button variant="primary" type="submit">Sign Up</b-button>
          <b-button to="/">Cancel</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createUser } from '~/utils/api-user'

export default Vue.extend({
  auth: false,
  layout: 'default',
  data() {
    return {
      email: '',
      password: '',
      name: '',
      photo: ''
    }
  },
  head() {
    return {
      title: 'Sign Up'
    }
  },
  methods: {
    async create() {
      try {
        const response = await createUser(this.name, this.email, this.password, this.photo)
        
        await this.$auth.loginWith('local', {data: {
          email: this.email,
          password: this.password
        }})

        this.$router.push('/')
      } catch(err) {
        console.log(err);        
      }
    }
  } 
})
</script>
