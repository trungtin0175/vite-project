import React from 'react'
import PropTypes from 'prop-types'
import Header from '~/layout/Header'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import Footer from '../Footer'

const cx = classNames.bind(styles)
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className={cx('header')}>
        <Header />
      </div>
      <div className={cx('container')}>{children}</div>
      <div className={cx('footer')}>
        <Footer />
      </div>
    </div>
  )
}

DefaultLayout.propTypes = { children: PropTypes.node.isRequired }
export default DefaultLayout
