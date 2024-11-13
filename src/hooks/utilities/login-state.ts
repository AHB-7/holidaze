import { create } from "zustand";
import { persist, PersistStorage, StorageValue } from "zustand/middleware";

type User = {
    name: string;
    email: string;
    bio: string | null;
    avatar: {
        url: string;
        alt: string;
    };
    banner: {
        url: string;
        alt: string;
    };
};

type UserState = {
    user: User | null;
    accessToken: string | null;
    login: (userData: User, token: string) => void;
    logout: () => void;
};

const customStorage: PersistStorage<UserState> = {
    getItem: (name) => {
        const value = localStorage.getItem(name);
        return value ? (JSON.parse(value) as StorageValue<UserState>) : null;
    },
    setItem: (name, value) => {
        localStorage.setItem(name, JSON.stringify(value));
    },
    removeItem: (name) => {
        localStorage.removeItem(name);
    },
};

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,
            login: (userData, token) =>
                set({ user: userData, accessToken: token }),
            logout: () => set({ user: null, accessToken: null }),
        }),
        {
            name: "user-storage",
            storage: customStorage,
            partialize: (state) => ({
                user: state.user,
                accessToken: state.accessToken,
                login: () => {},
                logout: () => {},
            }),
        }
    )
);
