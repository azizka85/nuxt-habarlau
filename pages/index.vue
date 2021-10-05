<template>
  <main>
    <div class="title">
      <h5 class="text-primary">Ads</h5>
      &nbsp;
      <b-button variant="primary" size="sm" @click="refresh">
        <b-icon-arrow-clockwise />
      </b-button>
    </div>   
    <h6>Total: 123</h6>     
    <template v-if="adsCount > 0">
      <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="4" cols-xl="4" class="mt-1 mb-1">
        <b-col v-for="ad in ads" :key="ad.id" class="mt-1 mb-1">
          <div class="card">
            <div class="card-title">
              <b-link class="card-title-content">
                {{ ad.title }}
              </b-link>
              <div>                
                <b-icon 
                  :icon="ad.favorite ? 'heart-fill' : 'heart'" 
                  class="card-title-icon"
                  :class="{stroke: !ad.favorite, fill: ad.favorite}"
                />
              </div>
            </div>
            <div class="description">
              {{ ad.description }}
            </div>
            <p class="date-time">
              Created: {{ new Date(ad.createdAt).toLocaleString() }}
            </p>
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

export default Vue.extend<PageIndexData, PageIndexMethods, PageIndexComputed>({
  layout: 'main',
  transition: 'fade',
  data(): PageIndexData {
    return {
      ads: [{
        id: 1,
        title: 'Ad #1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad harum dolorum quos numquam soluta, quia voluptatum sapiente molestiae totam mollitia! Modi nostrum dolorem sed aspernatur dicta, architecto sequi saepe laboriosam?',
        favorite: true,
        createdAt: Date.now()
      }, {
        id: 2,
        title: 'Ad #2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad harum dolorum quos numquam soluta, quia voluptatum sapiente molestiae totam mollitia! Modi nostrum dolorem sed aspernatur dicta, architecto sequi saepe laboriosam?',
        favorite: false,
        createdAt: Date.now()
      }] 
    }
  },
  computed: {
    adsCount() {
      return this.ads.length
    }
  },
  components: {
    BIcon, BIconArrowClockwise, BIconHeart, BIconHeartFill
  }
})
</script>
