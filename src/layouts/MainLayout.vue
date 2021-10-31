<template>
  <q-layout view="hHh Lpr lFf">
   
    <q-header elevated class="q-py-sm bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          class="text-black"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title
          class="col-11 q-mx-auto col-sm-4"
          style="margin-right: 0"
        >
          <q-input
            standout
            v-model="ph"
            placeholder="Click here to search something"
            class="bg-white text-center"
            @keyup="filtrar"
          >
            <template v-slot:append>
              <q-icon v-if="ph === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="
                  ph = '';
                  busqueda_datos = [];
                "
              />
            </template>
            <div
              class="
                busqueda
                fixed
                bg-white
                overflow-auto
                z-max
                col-11
                q-mx-auto
                col-sm-4
              "
              style="top: 70px; right: 0px; max-height: 300px"
            >
              <div
                v-for="(resultados, index) in busqueda_datos.slice(0, 10)"
                :key="index"
                class="item-hover overflow-hidden "
                @click="link(resultados.url)"
              >
                <div class="item-texto" >{{ resultados.name }}</div>
              </div>
            </div>
          </q-input>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <hr />

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Categorias</q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          target="_self"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
    
      <router-view />
    
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import axios from "axios";

const linksList = [
  {
    title: "Inicio",
    caption: "quasar.dev",
    icon: "school",
    link: "#/",
  },
  {
    title: "Alimentación y bebidas",
    caption: "quasar.dev",
    icon: "liquor",
    link: "#/bebidas",
  },
  {
    title: "Belleza",
    caption: "quasar.dev",
    icon: "face",
    link: "#/belleza",
  },
  {
    title: " Coche y Moto",
    caption: "quasar.dev",
    icon: "pedal_bike",
    link: "#/Coche",
  },

  {
    title: "Deportes y aire libre",
    caption: "quasar.dev",
    icon: "pool",
    link: "#/deporte",
  },

  {
    title: "Electrónica",
    caption: "quasar.dev",
    icon: "computer",
    link: "#/electronica",
  },

  {
    title: "Hogar y cocina",
    caption: "quasar.dev",
    icon: "kitchen",
    link: "#/hogar",
  },
  {
    title: "Iluminación",
    caption: "quasar.dev",
    icon: "emoji_objects",
    link: "#/iluminacion",
  },
  {
    title: "Informática",
    caption: "quasar.dev",
    icon: "settings_ethernet",
    link: "#/informatica",
  },
  {
    title: "Instrumentos musicales",
    caption: "quasar.dev",
    icon: "music_note",
    link: "#/musica",
  },
  {
    title: "Juguetes y juegos",
    caption: "quasar.dev",
    icon: "smart_toy",
    link: "#/juegos",
  },
  {
    title: "Joyerías",
    caption: "quasar.dev",
    icon: "fitbit",
    link: "#/joyerias",
  },
  {
    title: "Libros",
    caption: "quasar.dev",
    icon: "menu_book",
    link: "#/libros",
  },
  {
    title: "Productos para mascotas",
    caption: "quasar.dev",
    icon: "pets",
    link: "#/mascotas",
  },
  {
    title: "Ropa y accesorios",
    caption: "quasar.dev",
    icon: "checkroom",
    link: "#/ropa",
  },
  {
    title: "Software",
    caption: "quasar.dev",
    icon: "data_object",
    link: "#/software",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },
  beforeCreate: async function () {
    const res = await axios.get("api/productos.json");
    this.busqueda = res.data.productosTotal;
  },
  methods: {
    link :  function (l) {
        window.open(l)
    },
    filtrar: function () {
      if (this.ph == "") {
       this.busqueda_datos = []
      } else {
        this.busqueda_datos = this.busqueda;
        this.busqueda_datos = this.busqueda_datos.filter((b) =>
          b.name.toLowerCase().includes(this.ph.toLowerCase())
        )
      }
    },
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      searchModel: "",
      busqueda_datos: [],
      busqueda: [],
      ph: ref(""),
      dense: ref(false),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.item-hover {
  padding: 15px;
}
.item-hover:hover {
  background: #000000;
  color:rgb(255, 255, 255);
  
}
.item-texto{
  width: 150%;

height: 100%;
}
.item-texto:hover{
  position: relative;

  animation: textM 5s;

}
.busqueda::-webkit-scrollbar {
  background: #ffffff;
  width: 3px;
  height: 3px;

}


.busqueda::-webkit-scrollbar-thumb {
    background: rgb(34, 33, 33);
    border-radius: 4px;
}

/* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
.busqueda::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* Cambiamos el fondo cuando esté en active */
.busqueda::-webkit-scrollbar-thumb:active {
    background-color: #161111;
}


@keyframes textM {
    0%   {left: 0%;}
    50%  {left: -30%;}
    100% {left: 0%;}
}

</style>
