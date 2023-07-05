import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import TicketingPage from "../TicketingPage/TicketingPage";
import Exhibition from "../Exhibition/Exhibition";
import HomePage from "../HomePage/HomePage";
import MapPage from "../MapPage/MapPage";
import ItineraryPage from "../ItineraryPage/ItineraryPage";
import ExhibitionDetails from "../Exhibition/ExhibitionDetails";
import Subscription from "../../components/Footer/Subscription";
import Footer from "../../components/Footer/Footer";
import ItinerarySelectPage from "../ItineraryPage/ItinerarySelectPage";
import { Navigate } from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";
import PrivacyStatement from "../PrivacyStatement/PrivacyStatement";
import TermsOfUse from "../TermsOfUse/TermsOfUse";
import TourPage from "../Tour/TourPage";
import ItineraryPageTwo from "../ItineraryPage/ItineraryPageTwo";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours" element={<TourPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/exhibition/:id" element={<ExhibitionDetails />} />
          <Route path="/ticketing" element={<TicketingPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyStatement />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />

          <Route
            path="/itinerary"
            element={
              user ? (
                <ItineraryPageTwo user={user} />
              ) : (
                <Navigate to="/auth" replace />
              )
            }
          />
          <Route
            path="/itinerary/select"
            element={
              user ? <ItinerarySelectPage /> : <Navigate to="/auth" replace />
            }
          />
          <Route
            path="/auth"
            element={<AuthPage setUser={setUser} user={user} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </>

      <Footer />
    </main>
  );
}

//comment here to test branch
