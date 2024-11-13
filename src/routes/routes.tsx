import { Route, Routes } from "react-router-dom";
import { AllVenues } from "../pages/venues";
import { SingleVenues } from "../components/home/single-venues";
import { Profile } from "../components/profile/profile";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<AllVenues />} />{" "}
            <Route path="/venues/:venueId" element={<SingleVenues />} />
            <Route path="/profiles/:profilename" element={<Profile />} />
        </Routes>
    );
}
