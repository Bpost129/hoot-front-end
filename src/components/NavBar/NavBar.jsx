// npm modules
import { NavLink } from 'react-router-dom'

// assets
import logo from '../../assets/branding/logo.svg'

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/auth/login">LOG IN</NavLink></li>
      <li><NavLink to="/auth/signup">SIGN UP</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to="/blogs">BLOGS</NavLink></li>
      <li><NavLink to="/blogs/new">NEW BLOG</NavLink></li>
      <li><NavLink to="/auth/logout" onClick={handleLogout}>LOG OUT</NavLink></li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      <NavLink to="/"><img src={logo} alt="A cute owl" /></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar