import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Container from 'components/Atoms/Container/Container'
import HeaderStyles from 'components/Organisms/Header/Header.module.css'

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'Contact Us', path: '/contact' },
  ]

  return (
    <header className={`${HeaderStyles.header} ${isSticky ? HeaderStyles.sticky : ''}`}>
      <Container className={HeaderStyles.headerWrapper} testId="header">
        <Link to="/" className={HeaderStyles.logoArea}>
          <div className={HeaderStyles.logo}>
            <span className={HeaderStyles.potatoIcon}>🥔</span>
            <span className={HeaderStyles.companyName}>Premium Potato Imports</span>
          </div>
        </Link>

        <button 
          className={HeaderStyles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${HeaderStyles.nav} ${isMenuOpen ? HeaderStyles.navOpen : ''}`}>
          <ul className={HeaderStyles.navList}>
            {menuItems.map((item) => (
              <li key={item.path} className={HeaderStyles.navItem}>
                <Link 
                  to={item.path}
                  className={`${HeaderStyles.navLink} ${location.pathname === item.path ? HeaderStyles.active : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/quote" className={HeaderStyles.quoteButton} onClick={() => setIsMenuOpen(false)}>
            Request Quote
          </Link>
        </nav>
      </Container>
    </header>
  )
}

export default Header
