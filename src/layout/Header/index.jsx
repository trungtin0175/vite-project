import React from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import logo from '~/assets/images/logo.svg'
import discord from '~/assets/images/discord.svg'
import tele from '~/assets/images/tele.svg'
import twitter from '~/assets/images/twiter.svg'
import '~/component/GridStyles'

// https://oxoa.games/images/logo.svg
const cx = classNames.bind(styles)
const Header = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-header')}>
        <header className={cx('header')}>
          <div className={cx('header-container')}>
            <div className={cx('header-logo')}>
              <a className={cx('header-logo-link')} href='/'>
                <img className={cx('header-logo-img')} src={logo} alt='logo'></img>
              </a>
            </div>
            <div className={cx('header-item')}>
              <Link
                target='_blank'
                className={cx('header-item-center')}
                to={'https://whitepaper.oxoa.games/oxoa-blockchain/what-why-and-how'}
              >
                Docs
              </Link>
              <Link target='_blank' className={cx('header-item-center')} to={'https://oxoa.games/games'}>
                Games
              </Link>
              <Link target='_blank' className={cx('header-item-center')} to={'https://oxoa.games/mission'}>
                Mission
              </Link>
              <Link
                target='_blank'
                className={cx('header-item-center')}
                to={'https://d5n8qbi5i9o.sg.larksuite.com/share/base/form/shrlgBEdDTXlFSVpgzxXaYLq3zc'}
              >
                Contact
              </Link>
              <Link target='_blank' className={cx('header-item-center__Link')} to={'https://twitter.com/oxoa_network'}>
                <img className={cx('header-item-center__img')} src={twitter}></img>
              </Link>
              <Link
                target='_blank'
                className={cx('header-item-center__Link')}
                to={'https://discord.com/invite/oxoanetwork'}
              >
                <img className={cx('header-item-center__img')} src={discord}></img>
              </Link>
              <Link target='_blank' className={cx('header-item-center__Link')} to={'https://t.me/OXOANetwork'}>
                <img className={cx('header-item-center__img')} src={tele}></img>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header
