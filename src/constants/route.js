import DefaultLayout from '~/layout/DefaultLayout'
import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Games from '~/pages/Games'
import Mission from '~/pages/Mission'
const routes = {
  Home: '/',
  Login: '/login',
  Register: '/register',
  Games: '/games',
  Mission: '/mission'
}
export const publicRoutes = [
  {
    path: routes.Home,
    component: Home,
    layout: DefaultLayout
  },
  {
    path: routes.Login,
    component: Login,
    layout: DefaultLayout
  },
  {
    path: routes.Games,
    component: Games,
    layout: DefaultLayout
  },
  {
    path: routes.Mission,
    component: Mission,
    layout: DefaultLayout
  }
]
export const privateRoutes = []
export default routes
