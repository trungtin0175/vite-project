import React from 'react'
import classNames from 'classnames/bind'
import styles from './Games.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import game4 from '~/assets/images/game4.jpg'
import game0 from '~/assets/images/game0.jpg'
import game1 from '~/assets/images/game1.jpg'
import game5 from '~/assets/images/game5.jpg'
import avatarprodcut from '~/assets/images/avatarprodcut.png'

const cx = classNames.bind(styles)
const Games = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000
    responsive: [
      {
        breakpoint: 1024, // Lớn nhất là 1024px
        settings: {
          slidesToShow: 2, // Khi màn hình từ 768px đến 1024px, slidesToShow là 2
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // Nhỏ nhất là 768px (thiết lập này cho các kích thước nhỏ hơn 768px)
        settings: {
          slidesToShow: 2, // Giả sử bạn muốn chỉ hiển thị 1 slide trên các thiết bị nhỏ hơn
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('game-top')}>
        <h2 className={cx('game-top-heading')}>Games</h2>
        <p className={cx('game-top-text')}>
          Play games developed on the OXOA Network to claim limited NFTs and win substantial rewards!
        </p>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <Slider {...settings} className={cx('slider-list')}>
          <div className={cx('slider-item', 'slider-item-translate')} id='slider_item'>
            <div className={cx('slider-item-wrapper')}>
              <div className={cx('slider-item-flex')}>
                <div className={cx('slider-item-left')}>
                  <img className={cx('slider-item-left__img')} src={game4} alt='img'></img>
                  <div className={cx('slider-item-right')}>
                    <div className={cx('slider-item-right__wrapper')}>
                      <h3 className='slider-item-right__heading'>Monster Battle Rush</h3>
                      <p className={cx('slider-item-right__text')}>
                        Monster Battle Rush is a game set in the fictional realm of Ookeenga with captivating gameplay.
                        Run, avoid dangerous traps, save your soldiers, and gather strong goodies along the way to face
                        the boss adversary at the end of the runway.
                      </p>
                      <p className={cx('slider-item-right__author')}>Game studio Owner</p>
                      <div className={cx('slider-item-right__studio')}>
                        <img className={cx('item-right__studio-img')} src={avatarprodcut} alt='logo'></img>
                        <p className={cx('item-right__studio-name')}>Inno Games Studio</p>
                      </div>
                      <div className={cx('slider-item-right__genre')}>
                        <p className={cx('item-right__studio-left')}>Genre</p>
                        <p className={cx('item-right__studio-right')}>Action, Casual </p>
                      </div>
                      <div className={cx('slider-item-right__genre')}>
                        <p className={cx('item-right__studio-left')}>Launching</p>
                        <p className={cx('item-right__studio-right')}>COMING SOON</p>
                      </div>
                    </div>
                    <p className={cx('slider-item-right__text-none')}>
                      Monster Battle Rush is a game set in the fictional realm of Ookeenga with captivating gameplay.
                      Run, avoid dangerous traps, save your soldiers, and gather strong goodies along the way to face
                      the boss adversary at the end of the runway.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('slider-item', 'slider-item-translate')}>
            <div className={cx('slider-item-wrapper')}>
              <div className={cx('slider-item-flex')}>
                <div className={cx('slider-item-left')}>
                  <img className={cx('slider-item-left__img')} src={game0} alt='img'></img>
                  <div className={cx('slider-item-right')}>
                    <div className={cx('slider-item-right__wrapper')}>
                      <h3 className='slider-item-right__heading'>MineSweeper Battles</h3>
                      <p className={cx('slider-item-right__text')}>
                        Minesweeper is a popular strategy game in which players must find buried mines on a grid without
                        detonating any. Minesweeper can be played at many degrees of difficulty, from beginner to
                        expert. It is an excellent game for honing your logic and strategic thinking abilities, and it
                        can be a lot of fun once you get the hang of it.
                      </p>
                      <p className={cx('slider-item-right__author')}>Game studio Owner</p>
                      <div className={cx('slider-item-right__studio')}>
                        <img className={cx('item-right__studio-img')} src={avatarprodcut} alt='logo'></img>
                        <p className={cx('item-right__studio-name')}>Inno Games Studio</p>
                      </div>
                      <div className={cx('slider-item-right__genre')}>
                        <p className={cx('item-right__studio-left')}>Genre</p>
                        <p className={cx('item-right__studio-right')}>Puzzle </p>
                      </div>
                      <div className={cx('slider-item-right__genre')}>
                        <p className={cx('item-right__studio-left')}>Launching</p>
                        <p className={cx('item-right__studio-right')}>live</p>
                      </div>
                    </div>
                    <p className={cx('slider-item-right__text-none')}>
                      Minesweeper is a popular strategy game in which players must find buried mines on a grid without
                      detonating any. Minesweeper can be played at many degrees of difficulty, from beginner to expert.
                      It is an excellent game for honing your logic and strategic thinking abilities, and it can be a
                      lot of fun once you get the hang of it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('slider-item', 'slider-item-translate')}>
            <div className={cx('slider-item-wrapper')}>
              <div className={cx('slider-item-flex')}>
                <div className={cx('slider-item-left')}>
                  <img className={cx('slider-item-left__img')} src={game5} alt='img'></img>
                  <div className={cx('slider-item-right')}>
                    <div className={cx('slider-item-right__wrapper')}>
                      <h3 className='slider-item-right__heading'>Sweet Candy Story</h3>
                      <p className={cx('slider-item-right__text')}>
                        Let is go on a candy-making expedition. The world is most delicious. Collect ingredients and
                        manufacture sweets to fulfill Sara is desire!
                      </p>
                      <p className={cx('slider-item-right__author')}>Game studio Owner</p>
                      <div className={cx('slider-item-right__studio')}>
                        <img className={cx('item-right__studio-img')} src={avatarprodcut} alt='logo'></img>
                        <p className={cx('item-right__studio-name')}>Inno Games Studio</p>
                      </div>
                      <div className={cx('slider-item-right__genre')}>
                        <p className={cx('item-right__studio-left')}>Genre</p>
                        <p className={cx('item-right__studio-right')}>Action, Casual </p>
                      </div>
                      <div className={cx('slider-item-right__genre')}>
                        <p className={cx('item-right__studio-left')}>Launching</p>
                        <p className={cx('item-right__studio-right')}>COMING SOON</p>
                      </div>
                    </div>
                    <p className={cx('slider-item-right__text-none')}>
                      Let is go on a candy-making expedition. The world is most delicious. Collect ingredients and
                      manufacture sweets to fulfill Sara is desire!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('slider-item', 'slider-item-translate')}>
            <div className={cx('slider-item-wrapper')}>
              <div className={cx('slider-item-flex')}>
                <div className={cx('slider-item-left')}>
                  <img className={cx('slider-item-left__img')} src={game1} alt='img'></img>
                  <div className={cx('slider-item-right')}>
                    <div className={cx('slider-item-right__wrapper')}>
                      <h3 className='slider-item-right__heading'>Aura in the Dream World</h3>
                      <p className={cx('slider-item-right__text')}>
                        Aura in the Dream World follows a beautiful young fairy girl on her journey through a magical
                        world. In contrast to other serene lands, she must tackle the challenging traps along the
                        journey. Control her carefully to solve challenges to ensure her survival in Dream World. Use
                        your brilliant mind to begin assisting Aura on her journey.
                      </p>
                      <p className={cx('slider-item-right__author')}>Game studio Owner</p>
                      <div className={cx('slider-item-right__studio')}>
                        <img className={cx('item-right__studio-img')} src={avatarprodcut} alt='logo'></img>
                        <p className={cx('item-right__studio-name')}>Inno Games Studio</p>
                      </div>
                      <div className={cx('slider-item-right__genre')}>
                        <p className={cx('item-right__studio-left')}>Genre</p>
                        <p className={cx('item-right__studio-right')}>Action, Casual </p>
                      </div>
                      <div className={cx('slider-item-right__genre')}>
                        <p className={cx('item-right__studio-left')}>Launching</p>
                        <p className={cx('item-right__studio-right')}>COMING SOON</p>
                      </div>
                    </div>
                    <p className={cx('slider-item-right__text-none')}>
                      Aura in the Dream World follows a beautiful young fairy girl on her journey through a magical
                      world. In contrast to other serene lands, she must tackle the challenging traps along the journey.
                      Control her carefully to solve challenges to ensure her survival in Dream World. Use your
                      brilliant mind to begin assisting Aura on her journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Games
