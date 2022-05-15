import estilos from './NavBar.module.scss';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className={estilos.Link} style={{display:'grid', gridTemplateColumns: '1fr 1fr'}}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/restaurantes">Restaurantes</Link>
          </li>
        </ul>
        <ul style={{display:'flex', justifyContent:'flex-end' }}>
          <li>
            <Link to="/admin" style={{ color: 'red', textAlign: 'right', fontSize: '1rem'}}>Área do Admin</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar