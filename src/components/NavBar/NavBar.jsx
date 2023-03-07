import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/posts">Memories</Link>
      &nbsp; | &nbsp;
      <Link to="/posts/new">Post a memory</Link>
      &nbsp; | &nbsp;<span>Welcome,{user.name}</span>
      {/* &nbsp; | &nbsp;<span>Welcome,{user && user.name}</span> if you want to show navbar before logging in */}
      {/* add the line above and move the navbar location in app.js */}
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}

export default NavBar;
