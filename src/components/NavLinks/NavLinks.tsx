import { NavLink } from "react-router-dom"
import "./NavLinks.css"

function NavLinks() {
  return (
    <ul className="NavLinks-ul d-flex">
        <NavLink to={"/"}><li>movies</li></NavLink>
        <NavLink to={"/about"}><li>about</li></NavLink>
        <NavLink to={"/contact"}><li>contact</li></NavLink>
    </ul>
  )
}

export default NavLinks
