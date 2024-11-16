export type User = {
    name: string;
    email: string;
    bio?: string;
    avatar?: { url: string; alt: string };
    banner?: { url: string; alt: string };
    venueManager?: boolean;
};

export type ApiResponse = {
    data: User;
    accessToken: string;
};

export type RegisterFormData = {
    email: string;
    password: string;
    name: string;
    bio?: string;
    avatarUrl?: string;
    avatarAlt?: string;
    bannerUrl?: string;
    bannerAlt?: string;
};
export type UserLogin = {
    name: string;
    email: string;
};

export type ApiResponseLogin = {
    data: UserLogin;
    accessToken: string;
};

// Type for Form Data
export type LoginFormData = {
    email: string;
    password: string;
};
