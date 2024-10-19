import { useEffect, useState } from "react";
import { VenueCard } from "../styles/home/cards";
import { VenuesContainer } from "../styles/home/container";

type Accommodation = {
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

export function Home() {
    const [posts, setPosts] = useState<Accommodation[]>([]);

    useEffect(() => {
        async function getData() {
            const url = "https://v2.api.noroff.dev/holidaze/venues";
            const response = await fetch(url);
            const json = await response.json();
            const data = json.data;
            setPosts(data);
        }
        getData();
    }, []);

    return (
        <VenuesContainer>
            {posts.map((post) => (
                <VenueCard key={post.id}>
                    <h2>{post.name}</h2>
                    {/* <p>{post.description}</p> */}
                    {post.media.length > 0 && (
                        <img
                            src={post.media[0].url}
                            loading="lazy"
                            alt={post.media[0].alt}
                        />
                    )}
                    <p>{post.price}</p>
                    <p>{post.maxGuests}</p>
                    <p>{post.rating}</p>
                    {post.meta.wifi && <p>Wifi</p>}
                    {post.meta.parking && <p>Parking</p>}
                    {post.meta.breakfast && <p>Breakfast</p>}
                    {post.meta.pets && <p>Pets</p>}
                </VenueCard>
            ))}
        </VenuesContainer>
    );
}
