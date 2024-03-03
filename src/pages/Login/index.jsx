import React from 'react'
import routes, { publicRoutes } from '~/constants/route'
import { Link } from 'react-router-dom'
import { setAll, setUserName } from '~/store/userSlice'
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch()
  dispatch(setUserName('Tin'))
  const userName = useSelector((state) => state.user.userName)
  console.log(userName)
  return <Link to={routes.Home}>Login</Link>
}

export default Login
