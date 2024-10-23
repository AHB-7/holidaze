import { useEffect, useState } from "react";
import {
    MetaContainer,
    NoMeta,
    PriseAndGuests,
    VenueCard,
    WithMeta,
} from "../styles/venues/cards";
import { VenuesContainer } from "../styles/venues/container";
import { RiWifiFill, RiWifiOffFill } from "react-icons/ri";
import { LuParkingSquare, LuParkingSquareOff } from "react-icons/lu";
import {
    MdFoodBank,
    MdNoFood,
    MdOutlinePeopleAlt,
    MdOutlinePets,
} from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { Stars } from "../components/global/global-comp";

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

export function Venues() {
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
                    <PriseAndGuests>
                        <div>
                            <p>{post.price}</p>
                            <ImPriceTags />
                        </div>
                        <div>
                            <p>{post.maxGuests}</p>
                            <MdOutlinePeopleAlt />
                        </div>
                    </PriseAndGuests>
                    <Stars rating={post.rating} />
                    <MetaContainer>
                        {post.meta.wifi ? (
                            <WithMeta>
                                <RiWifiFill />
                            </WithMeta>
                        ) : (
                            <NoMeta>
                                <RiWifiOffFill />
                            </NoMeta>
                        )}
                        {post.meta.parking ? (
                            <WithMeta>
                                <LuParkingSquare />
                            </WithMeta>
                        ) : (
                            <NoMeta>
                                <LuParkingSquareOff />
                            </NoMeta>
                        )}
                        {post.meta.breakfast ? (
                            <WithMeta>
                                <MdFoodBank />
                            </WithMeta>
                        ) : (
                            <NoMeta>
                                <MdNoFood />
                            </NoMeta>
                        )}
                        {post.meta.pets ? (
                            <WithMeta>
                                <MdOutlinePets />
                            </WithMeta>
                        ) : (
                            <NoMeta>
                                <MdOutlinePets />
                            </NoMeta>
                        )}
                    </MetaContainer>
                </VenueCard>
            ))}
        </VenuesContainer>
    );
}
