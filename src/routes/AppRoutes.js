import { Home, Detail } from 'pages'

const appRoutes = [
  {
    name: 'Home',
    component: Home,
    exact: true,
    path: '/'
  },
  {
    name: 'Detail',
    component: Detail,
    exact: true,
    path: '/detail'
  }
]

export default appRoutes
