// Styles
import css from './Intro.module.scss'

const Intro = () => {
  return (
    <>
      <div className={css.intro}>
        <div className={css.intro__inner}>
          <div className='intro-slider'>
            <div className={`${css.controlsIntroSlider} _container`}>
              <div className={css.dotsControlsIntroSlider}>
                <ul className={css.dotsControlsIntroSlider__list}>
                  <li className={css.dotsControlsIntroSlider__item}>
                    <span />
                  </li>
                  <li className={css.dotsControlsIntroSlider__item}>
                    <span />
                  </li>
                  <li className={css.dotsControlsIntroSlider__item}>
                    <span />
                  </li>
                  <li className={css.dotsControlsIntroSlider__item}>
                    <span />
                  </li>
                </ul>
              </div>
              <div className={css.arrowsControlsIntroSlider}>
                <button
                  className={`${css.arrowsControlsIntroSlider__btn} ${css.arrowsControlsIntroSlider__btnLeft}`}
                  type='button'
                >
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M14.9999 4.99999L7.99988 12L14.9999 19'
                      stroke='#E89F71'
                      strokeWidth='1.8'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
                <button
                  className={`${css.arrowsControlsIntroSlider__btn} ${css.arrowsControlsIntroSlider__btnRight}`}
                  type='button'
                >
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M9.00012 4.99999L16.0001 12L9.00012 19'
                      stroke='#E89F71'
                      strokeWidth='1.8'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
