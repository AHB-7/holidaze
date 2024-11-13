import { create } from "zustand";

type UserState = {
    user: { name: string; email: string } | null;
    accessToken: string | null;
    login: (userData: { name: string; email: string }, token: string) => void;
    logout: () => void;
};

export const useUserStore = create<UserState>((set) => ({
    user: null,
    accessToken: null,
    login: (userData, token) => set({ user: userData, accessToken: token }),
    logout: () => set({ user: null, accessToken: null }),
}));
