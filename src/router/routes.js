
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/belleza',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/belleza.vue') }
    ]
  },
  {
    path: '/bebidas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/bebidas.vue') }
    ]
  },
  {
    path: '/coche',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/coche.vue') }
    ]
  },
  {
    path: '/deporte',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deporte.vue') }
    ]
  },
  {
    path: '/electronica',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/electronica.vue') }
    ]
  },
  {
    path: '/hogar',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/hogar.vue') }
    ]
  },
  {
    path: '/iluminacion',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/iluminacion.vue') }
    ]
  },
  {
    path: '/informatica',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/informatica.vue') }
    ]
  },
  {
    path: '/joyerias',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/joyerias.vue') }
    ]
  },
  {
    path: '/juegos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/juegos.vue') }
    ]
  },
  {
    path: '/libros',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/libros.vue') }
    ]
  },
  {
    path: '/mascotas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mascotas.vue') }
    ]
  },
  {
    path: '/musica',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/musica.vue') }
    ]
  },
  {
    path: '/ropa',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ropa.vue') }
    ]
  },
  {
    path: '/software',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/software.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
