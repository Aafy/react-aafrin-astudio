import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <NavLink to="/">Home</NavLink> /&nbsp;
      <NavLink to="/users">Users</NavLink>
      /&nbsp;<NavLink to="/products">Products</NavLink>
    </>
  );
}

export default Nav;
