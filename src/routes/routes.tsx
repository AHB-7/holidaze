import { Route, Routes } from "react-router-dom";
import { AllVenues } from "../pages/venues";
import { SingleVenues } from "../components/home/single-venues";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<AllVenues />} />{" "}
            <Route path="/venues/:venueId" element={<SingleVenues />} />
        </Routes>
    );
}
