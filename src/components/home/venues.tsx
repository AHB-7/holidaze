import { useEffect } from "react";
import {
    VenueCard,
    VenueInfoContainer,
    VenueImageContainer,
    VenueMetaContainer,
    VenueMeta,
    VenueBookingsButton,
} from "../../styles/venues/cards";
import { VenuesContainer } from "../../styles/venues/container";
import { FaHeart, FaWifi } from "react-icons/fa6";
import { Stars } from "../../components/global/rating";
import {
    MdLocalParking,
    MdOutlineEmojiFoodBeverage,
    MdOutlinePets,
} from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { Accommodation } from "../../types/global.types";
import { useLikedVenues } from "../../store/user-liked-venues";
import useFetch from "../../hooks/use-fetch";
import { Link } from "react-router-dom";

export function Venues() {
    // Use hooks at the top level, always in the same order
    const likedVenues = useLikedVenues((state) => state.likedVenues);
    const likeVenue = useLikedVenues((state) => state.likeVenue);
    const unlikeVenue = useLikedVenues((state) => state.unlikeVenue);

    // Use the fetch hook to retrieve venues
    const {
        data: responseData,
        loading,
        error,
        fetchData,
    } = useFetch<{ data: Accommodation[] }>(
        "https://v2.api.noroff.dev/holidaze/venues?sortOrder=desc&sort=created"
    );

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const posts = responseData?.data;

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <div>Error fetching venues. Please try again later.</div>;
    }

    if (!posts || posts.length === 0) {
        return <p>No venues available.</p>;
    }

    // Helper function for toggling likes
    const toggleLike = (venueId: string) => {
        if (likedVenues.includes(venueId)) {
            unlikeVenue(venueId);
        } else {
            likeVenue(venueId);
        }
    };

    return (
        <VenuesContainer>
            {posts.map((post) => {
                const isLiked = likedVenues.includes(post.id);
                return (
                    <VenueCard key={post.id}>
                        <VenueInfoContainer>
                            <h2>{post.name}</h2>
                            <FaHeart
                                onClick={() => toggleLike(post.id)}
                                fill={isLiked ? "red" : "grey"}
                            />
                        </VenueInfoContainer>
                        <VenueImageContainer>
                            <Link
                                to={`/venues/${post.id}?_owner=true&_bookings=true`}
                            >
                                <img
                                    src={
                                        post.media.length > 0
                                            ? post.media[0].url
                                            : "placeholder-image-url.jpg" // Fallback if no image is available
                                    }
                                    alt={
                                        post.media.length > 0
                                            ? post.media[0].alt
                                            : "Image not available"
                                    }
                                />
                            </Link>
                            <Stars rating={post.rating} />
                        </VenueImageContainer>
                        <VenueInfoContainer>
                            <p>Price</p>
                            <p>{post.price} NOK</p>
                        </VenueInfoContainer>
                        <VenueMetaContainer>
                            <VenueMeta>
                                {post.meta?.wifi ? (
                                    <FaWifi />
                                ) : (
                                    <FaWifi fill="lightgrey" />
                                )}
                            </VenueMeta>
                            <VenueMeta>
                                {post.meta?.pets ? (
                                    <MdOutlinePets />
                                ) : (
                                    <MdOutlinePets fill="lightgrey" />
                                )}
                            </VenueMeta>
                            <VenueMeta>
                                {post.meta?.parking ? (
                                    <MdLocalParking />
                                ) : (
                                    <MdLocalParking fill="lightgrey" />
                                )}
                            </VenueMeta>
                            <VenueMeta>
                                {post.meta?.breakfast ? (
                                    <MdOutlineEmojiFoodBeverage />
                                ) : (
                                    <MdOutlineEmojiFoodBeverage fill="lightgrey" />
                                )}
                            </VenueMeta>
                            <VenueMeta>
                                <p>{post.maxGuests}</p>
                                <IoPeopleSharp />
                            </VenueMeta>
                        </VenueMetaContainer>
                        <VenueBookingsButton>Book Now</VenueBookingsButton>
                    </VenueCard>
                );
            })}
        </VenuesContainer>
    );
}
