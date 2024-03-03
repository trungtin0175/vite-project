import DefaultLayout from '~/layout/DefaultLayout'
import Home from '~/pages/Home'
import Login from '~/pages/Login'
const routes = {
  Home: '/',
  Login: '/login',
  Register: '/register'
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
  }
]
export const privateRoutes = []
export default routes
