import { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { StatsPage } from '../Pages'
import '../sass/NavBar.scss'
import { PokemonContext } from '../Context/PokemonContext'

export const NavBar = () => {

  const {} = useContext(PokemonContext)

  return (
    <div className='navbar-container'>
      <header className='container'>
        <Link to='/' className='logo'>
          <img
            src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
            alt='Logo Pokedex'
          />
        </Link>
        <Link to='/Stats' element={<StatsPage />} className='navbar-stats'>
          Stats
        </Link>
      </header>
      <Outlet />
    </div>
  )
}
