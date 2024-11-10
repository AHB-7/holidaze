import { Route, Routes } from "react-router-dom";
import { Venues } from "../pages/venues";
import { SingleVenues } from "../components/home/single-venues";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Venues />} />{" "}
            <Route path="/venues/:venueId" element={<SingleVenues />} />
        </Routes>
    );
}
