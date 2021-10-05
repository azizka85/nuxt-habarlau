<template>
  <main>
    <div class="title">
      <h5 class="text-primary">Users</h5>
      &nbsp;
      <b-button variant="primary" size="sm" @click="refresh">
        <b-icon-arrow-clockwise />
      </b-button>
    </div>   
    <h6>Total: {{ usersCount }}</h6>     
    <template v-if="usersCount > 0">
      <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="4" cols-xl="4" class="mt-1 mb-1">
        <b-col v-for="user in users" :key="user.id" class="mt-1 mb-1">
          <div class="card">
            <div class="card-title">
              <b-link class="card-title-content">
                {{ user.name }}
              </b-link>
              <div>                
                <b-icon 
                  :icon="user.id % 2 > 0 ? 'heart-fill' : 'heart'" 
                  class="card-title-icon"
                  :class="{stroke: !(user.id % 2 > 0), fill: user.id % 2 > 0}"
                />
              </div>
            </div>
            <div class="description">
              <p>
                Email: {{ user.email }}
              </p>
              <p>
                Photo: {{ user.photo }}
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </template>
  </main>  
</template>

<script lang="ts">
import { PageIndexComputed, PageIndexData, PageIndexMethods } from '../types/PageIndex'
import Vue from 'vue'
import { BIcon, BIconArrowClockwise, BIconHeart, BIconHeartFill } from 'bootstrap-vue'
import { allUsers } from '~/utils/api-user'
import User from '../types/User'

export default Vue.extend<PageIndexData, PageIndexMethods, PageIndexComputed>({
  layout: 'main',
  transition: 'fade',
  async asyncData(_) {
    let users: User[] = []
    try {
      const response = await allUsers()
      users = await response.json() 
    } catch(err) {
      console.log(err);      
    }
    return {
      users
    }
  },
  methods: {
    refresh() {
      this.$nuxt.refresh()
    }
  },
  computed: {
    usersCount() {
      return this.users.length
    }
  },
  components: {
    BIcon, BIconArrowClockwise, BIconHeart, BIconHeartFill
  }
})
</script>
