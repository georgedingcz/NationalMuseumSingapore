import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import TicketingPage from "../TicketingPage/TicketingPage";
import CheckOutPage from "../TicketingPage/CheckOutPage";
import Exhibition from "../Exhibition/Exhibition";
import HomePage from "../HomePage/HomePage";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/ticketing" element={<TicketingPage />} />
            <Route path="/check-out" element={<CheckOutPage />} />
            <Route path="/exhibition" element={<Exhibition />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route
            path="/auth"
            element={<AuthPage setUser={setUser} user={user} />}
          ></Route>
        </Routes>
      )}
    </main>
  );
}
