import css from './Header.module.scss'

const Header = () => {
  return (
    <header className={css.header}>
      <div className='header__inner'>
        <nav className='header__nav nav-header'>
          <ul className='nav-header__list'>
            <li className='nav-header__item'>Products</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
