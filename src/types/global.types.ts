export type Accommodation = {
    id: string;
    name: string;
    description: string;
    media: {
        url: string;
        alt: string;
    }[];
    price: number;
    maxGuests: number;
    rating: number;
    created: string;
    updated: string;
    meta: {
        wifi: boolean;
        parking: boolean;
        breakfast: boolean;
        pets: boolean;
    };
    location: {
        address: string;
        city: string;
        zip: string;
        country: string;
        continent: string;
        lat: number;
        lng: number;
    };
    _count: {
        bookings: number;
    };
};
export type SingleVenue = {
    id: string;
    name: string;
    description: string;
    media: {
        url: string;
        alt: string;
    }[];
    price: number;
    maxGuests: number;
    rating: number;
    created: string;
    updated: string;
    meta: {
        wifi: boolean;
        parking: boolean;
        breakfast: boolean;
        pets: boolean;
    };
    location: {
        address: string;
        city: string;
        zip: string;
        country: string;
        continent: string;
        lat: number;
        lng: number;
    };
    owner: {
        name: string;
        email: string;
        avatar: string;
    };
    bookings: {
        id: string;
        dateFrom: string;
        dateTo: string;
        guests: number;
        created: string;
        updated: string;
    }[];
};

export interface StarsProps {
    rating: number;
}

export interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}
