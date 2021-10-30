// Modules
import React, {MouseEventHandler, useEffect, useState} from 'react'
import {IIntroSliders} from '../interfaces'
import Image from 'next/image'
import useSWR from 'swr'
import {useWindowDimensions} from '../customHooks'

// Styles
import css from './Intro.module.scss'

// Media
import Slide1 from '../../public/images/slide1.jpg'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Intro = () => {
  // Data
  const {data, error} = useSWR('http://localhost:3000/api/introSlider', fetcher)
  const sliders: IIntroSliders[] = data ?? false

  // State
  const [sliderCounter, setSliderCounter] = useState<number>(0)
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [startNewTransform, setStartNewTransform] = useState<number>(0)

  // Variables
  const faultMargin: number = 32
  const randomOffset: number = 300

  const handleSlideLeft = (): void => {
    setSliderCounter((prev) => (prev === 0 ? sliders.length - 1 : prev - 1))
  }

  const handleSlideRight = (): void => {
    setSliderCounter((prev) =>
      prev === sliders.length - 1 ? 0 : prev + 1
    )
  }

  const handleDotClick = (id: number): void => {
    const currentElement = sliders.filter(fsSlide => fsSlide.id === id)
    setSliderCounter(() => sliders.indexOf(currentElement[0]))
  }

  const handleListMouseDown: MouseEventHandler = (event): void => {
    setStartNewTransform(() => event.clientX)
  }

  // const handleListMouseMove = (event: MouseEvent): void => {
  //   if (isDragging) {
  //     const startPoint = event.clientX
  //   }
  // }

  const handleListMouseUp: MouseEventHandler = (event): void => {
    const endClientX = event.clientX
    if ((endClientX + 300) < startNewTransform) handleSlideRight()
    if (endClientX > (startNewTransform + 300)) handleSlideLeft()
  }

  useEffect(() => {
    setWindowWidth(() => window.innerWidth)
  }, [])

  return (
    <>
      <div className={css.intro}>
        <div className={css.intro__inner}>
          <div className="intro-slider">
            <div className={`${css.controlsIntroSlider} _container`}>
              <div className={css.dotsControlsIntroSlider}>
                <ul className={css.dotsControlsIntroSlider__list}>
                  {sliders &&
                  sliders.map((slide) => (
                    <li
                      key={slide.id}
                      className={`${css.dotsControlsIntroSlider__item}${slide.id === sliders[sliderCounter].id ? ` ${css.activeDot}` : ''}`}
                      onClick={() => handleDotClick(slide.id)}
                    >
                      <span/>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={css.arrowsControlsIntroSlider}>
                <button
                  className={`${css.arrowsControlsIntroSlider__btn} ${css.arrowsControlsIntroSlider__btnLeft}`}
                  type="button"
                  onClick={handleSlideLeft}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M14.9999 4.99999L7.99988 12L14.9999 19"
                      stroke="#E89F71"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className={`${css.arrowsControlsIntroSlider__btn} ${css.arrowsControlsIntroSlider__btnRight}`}
                  type="button"
                  onClick={handleSlideRight}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9.00012 4.99999L16.0001 12L9.00012 19"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className={css.introSlidersContainer}>
              <ul
                className={css.introSlidersContainer__list}
                style={{transform: `translateX(${sliderCounter === sliders.length - 1 ? -(Slide1.width + faultMargin) * sliders.length + windowWidth - 17 : -((Slide1.width + faultMargin) - randomOffset) * sliderCounter}px)`}}
                onMouseDown={handleListMouseDown}
                // onMouseMove={handleListMouseMove}
                onMouseUp={handleListMouseUp}
              >
                {sliders &&
                sliders.map((slide) => (
                  <li
                    key={slide.id}
                    className={`${css.introSlidersContainer__item}${slide.id === sliders[sliderCounter].id ? ` ${css.activeSlide}` : ''}`}
                  >
                    <Image
                      src={Slide1}
                      alt={`Slide ${slide.id}`}
                      layout="fixed"
                      draggable={false}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
