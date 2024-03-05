import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classNames from 'classnames/bind'
import styles from './Slider.module.scss'
import c from '~/assets/images/c.png'
import crytoin from '~/assets/images/cryto-in.png'
import dao from '~/assets/images/dao.png'
import givaway from '~/assets/images/givaway.png'
import hold from '~/assets/images/dao.png'
import inno from '~/assets/images/inno.png'
import midle from '~/assets/images/midle.png'
import questn from '~/assets/images/questn.png'
import taskon from '~/assets/images/taskon.png'

const cx = classNames.bind(styles)
const SliderSimple = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Lớn nhất là 1024px
        settings: {
          slidesToShow: 3, // Khi màn hình từ 768px đến 1024px, slidesToShow là 2
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 0, // Nhỏ nhất là 768px (thiết lập này cho các kích thước nhỏ hơn 768px)
        settings: {
          slidesToShow: 3, // Giả sử bạn muốn chỉ hiển thị 1 slide trên các thiết bị nhỏ hơn
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className={cx('wrapper')}>
      <Slider {...settings}>
        <div className={cx('slick')}>
          <div className={cx('slider')}>
            <img src={dao} alt='slider' className={cx('slider-img')}></img>
          </div>
        </div>
        <div className={cx('slick')}>
          <div className={cx('slider')}>
            <img src={inno} alt='slider' className={cx('slider-img')}></img>
          </div>
        </div>
        <div className={cx('slick')}>
          <div className={cx('slider')}>
            <img src={midle} alt='slider' className={cx('slider-img')}></img>
          </div>
        </div>
        <div className={cx('slick')}>
          <div className={cx('slider')}>
            <img src={hold} alt='slider' className={cx('slider-img')}></img>
          </div>
        </div>
        <div className={cx('slick')}>
          <div className={cx('slider')}>
            <img src={c} alt='slider' className={cx('slider-img')}></img>
          </div>
        </div>
        <div className={cx('slick')}>
          <div className={cx('slider')}>
            <img src={givaway} alt='slider' className={cx('slider-img')}></img>
          </div>
        </div>
        <div className={cx('slick')}>
          <div className={cx('slider')}>
            <img src={questn} alt='slider' className={cx('slider-img')}></img>
          </div>
        </div>
        <div className={cx('slick')}>
          <div className={cx('slider')}>
            <img src={taskon} alt='slider' className={cx('slider-img')}></img>
          </div>
        </div>
        <div className={cx('slick')}>
          <div className={cx('slider')}>
            <img src={crytoin} alt='slider' className={cx('slider-img')}></img>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default SliderSimple
