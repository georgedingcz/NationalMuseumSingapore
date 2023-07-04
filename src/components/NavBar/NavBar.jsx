import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  // Add the following function
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <nav>
      <Link to="/">Home</Link>&nbsp; | &nbsp;
      <Link to="/tours">Tours</Link>&nbsp; | &nbsp;
      <Link to="/ticketing">Ticketing</Link>&nbsp; | &nbsp;
      <Link to="/exhibition">Exhibition</Link>&nbsp; | &nbsp;
      <Link to="/itinerary">Itinerary</Link>&nbsp; | &nbsp;
      {user ? (
        <>
          <span>Welcome, {user.name}!</span>&nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </>
      ) : null}
      {!user && <Link to="/auth">Log In</Link>}
    </nav>
  );
}
