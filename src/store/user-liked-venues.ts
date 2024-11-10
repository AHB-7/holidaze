import { create } from "zustand";

type UserLikedVenuesState = {
    likedVenues: string[];
    likeVenue: (venueId: string) => void;
    unlikeVenue: (venueId: string) => void;
};

export const useLikedVenues = create<UserLikedVenuesState>((set) => ({
    likedVenues: [],

    likeVenue: (venueId) =>
        set((state) => ({
            likedVenues: [...state.likedVenues, venueId],
        })),

    unlikeVenue: (venueId) =>
        set((state) => ({
            likedVenues: state.likedVenues.filter((id) => id !== venueId),
        })),
}));
