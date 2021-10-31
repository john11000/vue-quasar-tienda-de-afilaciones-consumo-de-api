<template>
  <div class=" row items-start ">
    <q-card class="my-card q-ma-sm " >
      <q-img :src="prop.img" :ratio="4 / 3" width="20" loading="lazy" />

      <q-card-section style="height:250px; overflow:hidden;">
        
        <div class="text-overline text-h1 text-positive">{{ prop.price }} </div>
        <ratingVue :val='4' />
        <div class="text-h6 q-mt-sm q-mb-xs" >{{ prop.name }}</div>

        <div class="text-caption text-grey">
       {{ prop.description }}

        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="positive" class="btn text-center q-ma-auto" label="buy" @click="linkear(prop.url)" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
          disabled
        />
      </q-card-actions>

      <q-slide-transition class="d-hidden">
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
          
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>
<script>
import { ref } from "vue";
import ratingVue from './rating.vue';

export default {
  methods :{
linkear : function (url) {
  open(url)
}
  },
  setup() {
    return {
      expanded: ref(false),
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  props: ["prop"],
  components:{
      ratingVue,
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
