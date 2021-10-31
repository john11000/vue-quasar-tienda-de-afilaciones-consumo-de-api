<template>
  <div class=''>
    <q-rating
      v-model="model"
      max="5"
      size="1.5em"
      color="yellow"
      icon="star_border"
      icon-selected="star"
      icon-half="star_half"
      readonly
    />
   
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref(Math.floor(Math.random() * (6 - 4.5)) + 3.5)
    }
  },
  
}
</script>