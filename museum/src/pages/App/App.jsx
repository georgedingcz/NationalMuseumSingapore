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
import ItineraryCard from "../../components/Card/ItineraryCard/ItineraryCard";
import MapPage from "../MapPage/MapPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/exhibition" element={<Exhibition />} />{" "}
        <Route path="/ticketing" element={<TicketingPage />} />
        <Route path="/check-out" element={<CheckOutPage />} />
      </Routes>
      {user ? (
        <>
          <Routes>
            {/* <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} /> */}
            <Route path="/itinerary" element={<ItineraryCard />} />
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
