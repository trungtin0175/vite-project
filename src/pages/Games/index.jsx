import React from 'react'

import './index.css'

//img
import img1 from '../../assets/images/game-h1.png'
import img3 from '../../assets/images/avatar-prodcut.png'
import minesweeper from '../../assets/images/minesweeper.jpg'
import sweet from '../../assets/images/sweet.jpg'
import aura from '../../assets/images/aura.jpg'
import brick from '../../assets/images/brick.jpg'
import mito from '../../assets/images/mito.jpg'
import monsster from '../../assets/images/monsster.jpg'

const Game = () => {
  return (
    <div id='root'>
      <div className=''>
        <div className='relative container'>
          <div style={{ paddingBottom: '80px' }} className='d-flex'>
            <div className='flex-1 mb-8 py-10 text-start pb-5'>
              <h1 className='text_gradian inline-flex'>Games</h1>
              <p className=' pb-5 text_p'>
                Become early contributors, play games developed on the OXOA Network, claim limited NFTs, receive roles
                for Early Contributors, and stand a chance to win substantial rewards.
              </p>
            </div>
            <div className='flex-1'>
              <img className='img-auto img-auto' src={img1} alt=''></img>
            </div>
          </div>
          <div className='container-fl px-5'>
            <div className='px-2 mb-4'>
              <div className='d-flex bg-games-gradient rounded p-5 border border-primary sm:flex h-full relative bacground_group'>
                <div className='me-5 sm:mr-8 mb-4 xl:mb-0'>
                  <img className='rounded-3 img-auto' src={minesweeper}></img>
                </div>
                <div className='text-start group cursor-pointer overflow-hidden relative'>
                  <div>
                    <h3 className='text_gradian'>MineSweeper Battles</h3>
                    <p className='mb-5 text_p'>
                      Minesweeper is a popular strategy game in which players must find buried mines on a grid without
                      detonating any. Minesweeper can be played at many degrees of difficulty, from beginner to expert.
                      It's an excellent game for honing your logic and strategic thinking abilities, and it can be a lot
                      of fun once you get the hang of it.
                    </p>
                    <div className='title-game align-items-center '>
                      <p className='mr-4 mb-3 mb-sm-0 flex-shrink-0 text text_p'>Game studio Owner</p>
                      <div className='title-game align-items-center p-3'>
                        <img className=' rounded-circle mt-auto img-auto img-auto' src={img3} alt='Avatar'></img>
                        <p className='m-0 px-2 custom-font-weight'>Inno Games Studio</p>
                      </div>
                    </div>
                    <div style={{ width: '220px' }} className='title-game align-items-center justify-content-between '>
                      <p className='d-inline-flex bd-highlight text text_p'>Genre</p>
                      <div className=' align-items-center'>
                        <p className=' d-inline-flex p-2 bd-highlight custom-font-weight'>Puzzle</p>
                      </div>
                    </div>
                    <div style={{ width: '190px' }} className='d-flex align-items-center justify-content-between '>
                      <p className='d-inline-flex bd-highlight text text_p'>Launching</p>
                      <div className=' align-items-center'>
                        <p className=' d-inline-flex bd-highlight custom-font-weight'>LIVE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-2 mb-4'>
              <div className='d-flex bg-games-gradient rounded p-5 border border-primary sm:flex h-full relative bacground_group'>
                <div className='me-5 sm:mr-8 mb-4 xl:mb-0'>
                  <img className='rounded-3 img-auto' src={sweet}></img>
                </div>
                <div className='text-start group cursor-pointer overflow-hidden relative'>
                  <div>
                    <h3 className='text_gradian'>Sweet Candy Story</h3>
                    <p className='mb-5 text_p'>
                      Let's go on a candy-making expedition. The world's most delicious. Collect ingredients and
                      manufacture sweets to fulfill Sara's desire!
                    </p>
                    <div className='d-flex align-items-center '>
                      <p className='mr-4 mb-3 mb-sm-0 flex-shrink-0 text text_p'>Game studio Owner</p>
                      <div className='d-flex align-items-center p-3'>
                        <img className=' rounded-circle mt-auto img-auto' src={img3} alt='Avatar'></img>
                        <p className='m-0 px-2 custom-font-weight'>Inno Games Studio</p>
                      </div>
                    </div>
                    <div style={{ width: '220px' }} className='d-flex align-items-center justify-content-between '>
                      <p className='d-inline-flex bd-highlight text text_p'>Genre</p>
                      <div className=' align-items-center'>
                        <p className=' d-inline-flex p-2 bd-highlight custom-font-weight'>Puzzle</p>
                      </div>
                    </div>
                    <div style={{ width: '35%' }} className='d-flex align-items-center justify-content-between '>
                      <p className='d-inline-flex bd-highlight text text_p'>Launching</p>
                      <div className=' align-items-center'>
                        <p className=' d-inline-flex bd-highlight custom-font-weight'>COMING SOON</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-2 mb-4'>
              <div className='d-flex bg-games-gradient rounded p-5 border border-primary sm:flex h-full relative bacground_group'>
                <div className='me-5 sm:mr-8 mb-4 xl:mb-0'>
                  <img className='rounded-3 img-auto' src={aura}></img>
                </div>
                <div className='text-start group cursor-pointer overflow-hidden relative'>
                  <div>
                    <h3 className='text_gradian'>Aura in the Dream World</h3>
                    <p className='mb-5 text_p'>
                      Aura in the Dream World follows a beautiful young fairy girl on her journey through a magical
                      world. In contrast to other serene lands, she must tackle the challenging traps along the journey.
                      Control her carefully to solve challenges to ensure her survival in Dream World. Use your
                      brilliant mind to begin assisting Aura on her journey.
                    </p>
                    <div className='d-flex align-items-center '>
                      <p className='mr-4 mb-3 mb-sm-0 flex-shrink-0 text text_p'>Game studio Owner</p>
                      <div className='d-flex align-items-center p-3'>
                        <img className=' img-auto rounded-circle mt-auto' src={img3} alt='Avatar'></img>
                        <p className='m-0 px-2 custom-font-weight'>Inno Games Studio</p>
                      </div>
                    </div>
                    <div style={{ width: '220px' }} className='d-flex align-items-center justify-content-between '>
                      <p className='d-inline-flex bd-highlight text text_p'>Genre</p>
                      <div className=' align-items-center'>
                        <p className=' d-inline-flex p-2 bd-highlight custom-font-weight'>Puzzle</p>
                      </div>
                    </div>
                    <div style={{ width: '35%' }} className='d-flex align-items-center justify-content-between '>
                      <p className='d-inline-flex bd-highlight text text_p'>Launching</p>
                      <div className=' align-items-center'>
                        <p className=' d-inline-flex bd-highlight custom-font-weight'>COMING SOON</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-2 mb-4'>
              <div className='d-flex bg-games-gradient rounded p-5 border border-primary sm:flex h-full relative bacground_group'>
                <div className='me-5 sm:mr-8 mb-4 xl:mb-0'>
                  <img className='rounded-3 img-auto' src={brick}></img>
                </div>
                <div className='text-start group cursor-pointer overflow-hidden relative'>
                  <div>
                    <h3 className='text_gradian'>Brick Breaker</h3>
                    <p className='mb-5 text_p'>
                      Brick Breaker is a classic and enjoyable brick game. All you have to do is sit down, relax, and
                      launch Brick Breaker. The game provides both entertainment and challenges. To smash the bricks,
                      swipe and shot the balls. To achieve the greatest score and pass the levels, you must break as
                      many bricks as possible. They also provide you with other items along the road to assist you in
                      clearing all of the bricks.
                    </p>
                    <div className='d-flex align-items-center '>
                      <p className='mr-4 mb-3 mb-sm-0 flex-shrink-0 text text_p'>Game studio Owner</p>
                      <div className='d-flex align-items-center p-3'>
                        <img className=' rounded-circle mt-auto img-auto' src={img3} alt='Avatar'></img>
                        <p className='m-0 px-2 custom-font-weight'>Inno Games Studio</p>
                      </div>
                    </div>
                    <div style={{ width: '220px' }} className='title-game align-items-center justify-content-between '>
                      <p className='d-inline-flex bd-highlight text text_p'>Genre</p>
                      <div className=' align-items-center'>
                        <p className=' d-inline-flex p-2 bd-highlight custom-font-weight'>Puzzle</p>
                      </div>
                    </div>
                    <div style={{ width: '35%' }} className='d-flex align-items-center justify-content-between '>
                      <p className='d-inline-flex bd-highlight text text_p'>Launching</p>
                      <div className=' align-items-center'>
                        <p className=' d-inline-flex bd-highlight custom-font-weight'>COMING SOON</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-2 mb-4'>
              <div className='d-flex bg-games-gradient rounded p-5 border border-primary sm:flex h-full relative bacground_group'>
                <div className='me-5 sm:mr-8 mb-4 xl:mb-0'>
                  <img className='rounded-3 img-auto' src={mito}></img>
                </div>
                <div className='text-start group cursor-pointer overflow-hidden relative'>
                  <div>
                    <h3 className='text_gradian'>Mito Rescue: Pull the pins</h3>
                    <p className='mb-5 text_p'>
                      In Mito Rescue: Pull the Pin, you will play as a charming monster character, join the adventure,
                      find a safe way to pull the pin, rescue your monster pals, and learn how to loot the treasure.
                    </p>
                    <div className='d-flex align-items-center '>
                      <p className='mr-4 mb-3 mb-sm-0 flex-shrink-0 text text_p'>Game studio Owner</p>
                      <div className='d-flex align-items-center p-3'>
                        <img className=' rounded-circle mt-auto img-auto' src={img3} alt='Avatar'></img>
                        <p className='m-0 px-2 custom-font-weight'>Inno Games Studio</p>
                      </div>
                    </div>
                    <div style={{ width: '220px' }} className='d-flex align-items-center justify-content-between '>
                      <p className='d-inline-flex bd-highlight text text_p'>Genre</p>
                      <div className=' align-items-center'>
                        <p className=' d-inline-flex p-2 bd-highlight custom-font-weight'>Puzzle</p>
                      </div>
                    </div>
                    <div style={{ width: '35%' }} className='d-flex align-items-center justify-content-between '>
                      <p className='d-inline-flex bd-highlight text text_p'>Launching</p>
                      <div className=' align-items-center'>
                        <p className=' d-inline-flex bd-highlight custom-font-weight'>COMING SOON</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-2 mb-4'>
              <div className='d-flex bg-games-gradient rounded p-5 border border-primary sm:flex h-full relative bacground_group'>
                <div className='me-5 sm:mr-8 mb-4 xl:mb-0'>
                  <img className='rounded-3 img-auto' src={monsster}></img>
                </div>
                <div className='text-start group cursor-pointer overflow-hidden relative'>
                  <div>
                    <h3 className='text_gradian'>Monster Battle Rush</h3>
                    <p className='mb-5 text_p'>
                      Monster Battle Rush is a game set in the fictional realm of Ookeenga with captivating gameplay.
                      Run, avoid dangerous traps, save your soldiers, and gather strong goodies along the way to face
                      the boss adversary at the end of the runway.
                    </p>
                    <div className='d-flex align-items-center '>
                      <p className='mr-4 mb-3 mb-sm-0 flex-shrink-0 text text_p'>Game studio Owner</p>
                      <div className='d-flex align-items-center p-3'>
                        <img className=' rounded-circle mt-auto img-auto' src={img3} alt='Avatar'></img>
                        <p className='m-0 px-2 custom-font-weight'>Inno Games Studio</p>
                      </div>
                    </div>
                    <div style={{ width: '220px' }} className='d-flex align-items-center justify-content-between '>
                      <p className='d-inline-flex bd-highlight text text_p'>Genre</p>
                      <div className=' align-items-center'>
                        <p className=' d-inline-flex p-2 bd-highlight custom-font-weight'>Puzzle</p>
                      </div>
                    </div>
                    <div style={{ width: '35%' }} className='d-flex align-items-center justify-content-between '>
                      <p className='d-inline-flex bd-highlight text text_p'>Launching</p>
                      <div className=' align-items-center'>
                        <p className=' d-inline-flex bd-highlight custom-font-weight'>COMING SOON</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game
