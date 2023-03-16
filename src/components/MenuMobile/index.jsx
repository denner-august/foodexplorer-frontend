import { FiX, FiSearch } from 'react-icons/fi'
import { Container } from './styles'

import { Input } from '../Input'
import { Footer } from '../Footer'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

  const isAdmin = true

  return (
    <Container isVisible={menuIsVisible}>
      <header className='header'>
        <FiX size={32} onClick={() => setMenuIsVisible(false)} />
        <p>Menu</p>
      </header>

      <main>
        <Input icon={FiSearch} placeholder='Search for dishes or ingredients' />
        <div className='btns'>
          <Link to='/favorites'>My favorites</Link>
          {isAdmin ? <Link to='/new'>New dish</Link> : <Link to='/profile'>Profile</Link>}
          <button className='logout'>Logout</button>
        </div>
      </main>

      <Footer />
    </Container>
  )
}
