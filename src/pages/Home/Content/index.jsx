import React from 'react'
import classNames from 'classnames/bind'
import styles from './Content.module.scss'
import { Link } from 'react-router-dom'
import Games from '../Content/Games'
import play from '~/assets/images/play.png'
import zks from '~/assets/images/zks.png'
import run from '~/assets/images/run.png'
import discord from '~/assets/images/discord.svg'
import tele from '~/assets/images/tele.svg'
import twitter from '~/assets/images/twiter.svg'

const cx = classNames.bind(styles)
const Content = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('technology')}>
        <div className={cx('technology-text')}>
          <h2 className={cx('technology-text-heading')}>Technology</h2>
          <p className={cx('technology-text-content')}>
            Do not waste your time and effort building your Web3 game on infrastructures that are not good enough!
          </p>
          <p className={cx('technology-text-content')}>
            A Web3 game will never boom or last until it is built on an excellent infrastructure and we know for sure
            that kSyncis Layer 3 is an excellent one.
          </p>
          <p className={cx('technology-text-label')}>
            OXOA is a Layer-3 built on zkSync is ZK Stack Framework which enables
          </p>
          <p className={cx('technology-text-item')}>
            <img className={cx('technology-text-item__img')} src={play} alt='btn'></img>
            Massive scalability
          </p>
          <p className={cx('technology-text-item')}>
            <img className={cx('technology-text-item__img')} src={play} alt='btn'></img>
            Instant transaction speed (Yes, it is instant)
          </p>
          <p className={cx('technology-text-item')}>
            <img className={cx('technology-text-item__img')} src={play} alt='btn'></img>
            Zero transaction fees (Yes, it is gasless too)
          </p>
          <p className={cx('technology-text-content')}>
            Along with the evolution of the zkSync ecosystem, you - the game developer - will have the ability to
            unleash a new era of immersive, efficient, and truly engaging Web3 games.
          </p>
          <p className={cx('technology-text-content')}>
            Get ready to craft unparalleled gaming experiences on the Ethereum blockchain!
          </p>
        </div>
        <div className={cx('technology-right')}>
          <img className={cx('technology-right__image')} src={zks} alt='technology'></img>
        </div>
      </div>
      <div className={cx('run')}>
        <div className={cx('run-right')}>
          <h2 className={cx('run-right-heading')}>RUN A OX-NODE</h2>
          <p className={cx('technology-text-content')}>
            Participate as a network node operator who runs OX-Nodes to earn rewards from the OXOA network.
          </p>
          <p className={cx('technology-text-content')}>
            The OX-Node serves as an observational point overseeing the OXOA rollup protocol. If there is a proposal of
            an inaccurate block, it triggers an alarm, allowing others to step in. This effectively addresses the
            verifier is dilemma.
          </p>
        </div>
        <div className={cx('run-left')}>
          <img src={run} alt='run img' className={cx('run-left--img')}></img>
        </div>
      </div>
      <div className={cx('download', 'run')}>
        <div className={cx('download-box')}>
          <div className={cx('download-box-content')}>
            <div className={cx('download-box-content__item')}>
              <h3 className={cx('box-content__item-heading')}>Contribute and earn Enormous Reward</h3>
              <p className={cx('box-content__item-text')}>
                Early contributors in the role of OX-Nodes Operators will receive substantial rewards when the token
                project is launched.
              </p>
            </div>
            <Link className={cx('download-box-link')}>Download Client</Link>
          </div>
          <div className={cx('download-box-footer')}>
            <Link
              to={'https://whitepaper.oxoa.games/oxoa-blockchain/be-a-ox-node-operator'}
              className={cx('download-box-footer__link')}
            >
              Read more about Node Operator Program Here
            </Link>
            <p className={cx('download-box-footer__text')}>
              *Nodes can be run on laptops, desktops, or even on cloud instances.
            </p>
          </div>
        </div>
      </div>
      <div className={cx('join')}>
        <h2 className={cx('join-heading')}>Join our community</h2>
        <p className={cx('join-title')}>Join the most potential gaming squad in the zkSync ecosystem!</p>
        <p className={cx('join-text')}>
          As a community member, you have the chance to participate in node operations, earn rewards, and vote on
          governance proposals. Become early contributors and earn enormous rewards!
        </p>
        <Link to={'https://discord.com/invite/oxoanetwork'} className={cx('join-link')}>
          EARN COMMUNITY REWARDS
        </Link>
        <div className={cx('join-icon')}>
          <Link to={'https://oxoa.games/https://x.com/oxoa_network'} className={cx('join-icon-link')}>
            <img className={cx('join-icon-link__img')} src={twitter} alt='icon'></img>
          </Link>
          <Link to={'https://oxoa.games/https://discord.gg/oxoanetworkk'} className={cx('join-icon-link')}>
            <img className={cx('join-icon-link__img')} src={discord} alt='icon'></img>
          </Link>
          <Link to={'https://oxoa.games/https://t.me/OXOANetwork'} className={cx('join-icon-link')}>
            <img className={cx('join-icon-link__img')} src={tele} alt='icon'></img>
          </Link>
        </div>
      </div>
      <div className={cx('games')}>
        <Games />
      </div>
    </div>
  )
}

export default Content
