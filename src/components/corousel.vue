<template>
  <div class="q-pa-lg  bg-dark">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
       control-color="black"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide loading="lazy" :name="1"  img-src="http://soyanderson.com/old/img/imgSlider/android.jpeg" />
      <q-carousel-slide loading="lazy" :name="2" img-src="http://soyanderson.com/old/img/imgSlider/catb25.jpeg" />
      <q-carousel-slide loading="lazy" :name="3" img-src="http://soyanderson.com/old/img/imgSlider/celulares.jpeg" />
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>