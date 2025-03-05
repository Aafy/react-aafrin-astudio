import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="pageNavigation">
      <NavLink to="/">Home</NavLink> /&nbsp;
      <NavLink to="/users">Users</NavLink>
      /&nbsp;<NavLink to="/products">Products</NavLink>
    </div>
  );
}

export default Nav;
