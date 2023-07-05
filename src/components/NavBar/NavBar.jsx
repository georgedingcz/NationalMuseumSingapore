import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  function renderNavLinks() {
    if (user && user.itinerary.length > 0) {
      return (
        <>
          <Link to="/itinerary/select">My Itinerary</Link>&nbsp; | &nbsp;
        </>
      );
    } else {
      return (
        <>
          <Link to="/itinerary">New Itinerary</Link>&nbsp; | &nbsp;
        </>
      );
    }
  }

  return (
    <nav>
      <Link to="/">Home</Link>&nbsp; | &nbsp;
      <Link to="/tours">Tours</Link>&nbsp; | &nbsp;
      <Link to="/ticketing">Ticketing</Link>&nbsp; | &nbsp;
      <Link to="/exhibition">Exhibition</Link>&nbsp; | &nbsp;
      {renderNavLinks()}
      {user ? (
        <>
          <span>Welcome, {user.name}!</span>&nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </>
      ) : (
        <Link to="/auth">Log In</Link>
      )}
    </nav>
  );
}
