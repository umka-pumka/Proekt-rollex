import { NavLink } from "react-router-dom";
import { headerMenu } from "../../../constants";
import "../header.css"
const NavMenu = () => {
  return (
    <div className="headerMenu">
      {headerMenu.map((page) => (
        <NavLink key={page.name} to={page.path} className="link">
          {page.name}
        </NavLink>
      ))}
    </div>
  )
}

export default NavMenu