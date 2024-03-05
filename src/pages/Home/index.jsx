import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import routes from '~/constants/route'
import Slider from './Slider'
import SliderSimple from './Slider'
import Content from './Content'
import bg1 from '~/assets/images/bg1.png'
import bg2 from '~/assets/images/bg2.png'
import '~/component/GridStyles'

const cx = classNames.bind(styles)
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className={cx('wrapper')}>
      <div className={cx('bg-before')}>
        <img src={bg1} alt='bg'></img>
      </div>
      <div className={cx('bg-banner')}>
        <img className={cx('bg-banner')} src={bg2} alt='bg'></img>
      </div>
      <div className={cx('bg-banner')}>
        <div className={cx('container')}>
          <h1 className={cx('heading-text')}>The first Layer-3 Gaming Blockchain on zkSync</h1>
          <h3 className={cx('title-text')}>
            Are you a Web3 Indie-game Developer or Gamer? If so, then OXOA is perfect for YOU!
          </h3>
          <p className={cx('body-text')}>
            Built on the zkSync, OXOA is a Layer-3 blockchain dedicated to gaming. OXOA extends beyond a common
            blockchain as OXOA’s community members can participate in node operations to earn rewards and vote for
            future governance proposals. OXOA operates independently but is interconnected by a network of hyperbridges,
            enabling the fastest and most reliable interoperability with zero transaction fee.
          </p>
          <div className={cx('footer-text')}>
            <Link
              className={cx('footer-text-link', 'footer-text-btn')}
              to={'https://github.com/Oxoa-Networks/OX-Node'}
              target='_blank'
            >
              Download Client
            </Link>
            <Link className={cx('footer-text-link', 'footer-text-btn')} to={'https://node.oxoa.games/'} target='_blank'>
              Purchase OX-KEY
            </Link>
          </div>
        </div>
        <div className={cx('slider')}>
          <SliderSimple />
        </div>
        <div className={'content'}>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default Home
