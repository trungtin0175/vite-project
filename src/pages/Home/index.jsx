import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import routes from '~/constants/route'

const cx = classNames.bind(styles)
const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button className={cx('btn')} onClick={() => navigate(routes.Login)}>
        Click me!
      </button>
    </div>
  )
}

export default Home
