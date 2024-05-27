import { useEffect } from 'react';
import gsap from 'gsap';
import './App.css';
import babyBabe from './assets/babyBabe.jpg';
import babe1 from './assets/1.png'
import babe2 from './assets/2.jpg'
import babe3 from './assets/3.png'
import babe4 from './assets/4.jpg'
import babe5 from './assets/5.jpg'
import babe6 from './assets/6.jpg'
import babe7 from './assets/7.png'
import babe8 from './assets/8.png'
import CustomCursor from './CustomCursor';

function App() {
  useEffect(() => {
    const menuItems = document.querySelectorAll('.menu__item');

    gsap.timeline()
      .set('.menu', { autoAlpha: 1 })
      .from('.menu__item-innertext', {
        delay: 1,
        duration: 0.85,
        xPercent: 25,
        yPercent: 125,
        stagger: 0.095,
        skewY: gsap.utils.wrap([-8, 8]),
        ease: 'expo.out',
      })
      .set('.menu', { pointerEvents: 'all' });

    gsap.defaults({
      duration: 0.55,
      ease: 'expo.out',
    });

    menuItems.forEach(item => {
      // Changes start here
      const imageWrapper = item.querySelector('.menu__item-image_wrapper');
      const imageWrapperBounds = imageWrapper.getBoundingClientRect();
      let itemBounds = item.getBoundingClientRect();
      // Changes end here

      const onMouseEnter = () => {
        gsap.set(imageWrapper, {
          scale: 0.8,
          xPercent: 25,
          yPercent: 50,
          rotation: -15,
        });
        gsap.to(imageWrapper, {
          opacity: 1,
          scale: 1,
          yPercent: 0,
          rotation: 0,
        });
      };

      const onMouseLeave = () => {
        gsap.to(imageWrapper, {
          opacity: 0,
          yPercent: -50,
          xPercent: 25,
          scale: 0.8,
          rotation: -15,
        });
      };

      const onMouseMove = ({ clientX: x, clientY: y }) => {
        let yOffset = itemBounds.top / imageWrapperBounds.height;
        yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
        gsap.to(imageWrapper, {
          duration: 1.25,
          x: x - itemBounds.left - imageWrapperBounds.width / 2,
          y: y - itemBounds.top - imageWrapperBounds.height / 2 - yOffset,
        });
      };

      item.addEventListener('mouseenter', onMouseEnter);
      item.addEventListener('mouseleave', onMouseLeave);
      item.addEventListener('mousemove', onMouseMove);

      window.addEventListener('resize', () => {
        itemBounds = item.getBoundingClientRect();
      });
    });
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="container">
        <nav className="menu">
          <div className="menu__item">
            <div className="menu__item-image_wrapper">
              <div className="menu__item-image_inner">
                <img src={babyBabe} alt="BabyBabe" className='menu__item-image' />
              </div>
            </div>
            <span className='menu__item-text font-glusp'>
              <span className='menu__item-innertext'>happy</span>
            </span>
          </div>
          <div className="menu__item">
            <div className="menu__item-image_wrapper">
              <div className="menu__item-image_inner">
                <img src={babe1} alt="MortonBabe" className='menu__item-image' />
              </div>
            </div>
            <span className='menu__item-text font-glusp'>
              <span className='menu__item-innertext'>birthday</span>
            </span>
          </div>
          <div className="menu__item">
            <div className="menu__item-image_wrapper">
              <div className="menu__item-image_inner">
                <img src={babe2} alt="Mor6Babe" className='menu__item-image' />
              </div>
            </div>
            <span className='menu__item-text font-glusp'>
              <span className='menu__item-innertext'>naka</span>
            </span>
          </div>
          <div className="menu__item">
            <div className="menu__item-image_wrapper">
              <div className="menu__item-image_inner">
                <img src={babe3} alt="BabyBabe" className='menu__item-image' />
              </div>
            </div>
            <span className='menu__item-text font-glusp'>
              <span className='menu__item-innertext'>nong</span>
            </span>
          </div>
          <div className="menu__item">
            <div className="menu__item-image_wrapper">
              <div className="menu__item-image_inner">
                <img src={babe4} alt="BabyBabe" className='menu__item-image' />
              </div>
            </div>
            <span className='menu__item-text font-glusp'>
              <span className='menu__item-innertext'>noey</span>
            </span>
          </div>
          <div className="menu__item">
            <div className="menu__item-image_wrapper">
              <div className="menu__item-image_inner">
                <img src={babe5} alt="BabyBabe" className='menu__item-image' />
              </div>
            </div>
            <span className='menu__item-text font-glusp'>
              <span className='menu__item-innertext'>khong</span>
            </span>
          </div>
          <div className="menu__item">
            <div className="menu__item-image_wrapper">
              <div className="menu__item-image_inner">
                <img src={babe6} alt="BabyBabe" className='menu__item-image' />
              </div>
            </div>
            <span className='menu__item-text font-glusp'>
              <span className='menu__item-innertext'>p noey</span>
            </span>
          </div>
          <div className="menu__item">
            <div className="menu__item-image_wrapper">
              <div className="menu__item-image_inner">
                <img src={babe8} alt="BabyBabe" className='menu__item-image' />
              </div>
            </div>
            <span className='menu__item-text font-glusp'>
              <span className='menu__item-innertext'>love you</span>
            </span>
          </div>
          <div className="menu__item">
            <div className="menu__item-image_wrapper">
              <div className="menu__item-image_inner">
                <img src={babe7} alt="BabyBabe" className='menu__item-image' />
              </div>
            </div>
            <span className='menu__item-text font-glusp'>
              <span className='menu__item-innertext'>babe</span>
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
