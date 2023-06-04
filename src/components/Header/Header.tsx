import './Header.css'
import NavLinks from '../NavLinks/NavLinks'
import MyMovies from '../MyMovies/MyMovies'

function Header() {
  return (
    <header className='d-flex'>
        <h1>MovieDB</h1>
        <div className='d-flex'>
            <NavLinks />
            <MyMovies />
        </div>
    </header>
  )
}

export default Header