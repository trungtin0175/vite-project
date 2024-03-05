import React from 'react'
import './index.css'
import img1 from '~/assets/images/bag.png'
import { Link } from 'react-router-dom'
import discord from '~/assets/images/discord.svg'
import tele from '~/assets/images/tele.svg'
import twitter from '~/assets/images/twiter.svg'
const Footer = () => {
  return (
    <div className='bg-background '>
      <div className='bg-linear'>
        <div className='container rounded border border-primary  bg-gradian-box'>
          <div className='d-flex justify-content-between align-items-center '>
            <div className='test-start mb-4'>
              <h2>Let's talk business!</h2>
              <div className='rounded border'>
                <div className='d-flex p-3 justify-content-around align-items-center'>
                  <div>
                    <h4 className='text-decoration-none fw-bold m-0'>E-Mail</h4>
                  </div>
                  <div id='text-footer'>
                    <Link className='text-decoration-none fw-bold' to='#'>
                      contact@oxoa.games
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <img className='ms-auto me-0' src={img1}></img>
            <div className='bg-linear'></div>
          </div>
        </div>
        <div className='container bottom-footer '>
          <div className='d-flex justify-content-center align-items-center'>
            <h3>Join in</h3>
            <img src={twitter}></img>
            <img src={tele}></img>
            <img src={discord}></img>
          </div>

          <div>©2024 OXOA. All rights reserved</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
