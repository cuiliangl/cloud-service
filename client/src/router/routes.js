/**
 * @file routes
 * @author cuiliang
 * @since 2020.01.14
 */

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('views/Home'),
    meta: {
      title: '新浪云服'
    }
  }
]
