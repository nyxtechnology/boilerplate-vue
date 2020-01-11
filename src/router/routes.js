export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "page-home" */ '@pages/Home')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "page-not-found" */ '@pages/NotFound'),
    props: true
  }
]
