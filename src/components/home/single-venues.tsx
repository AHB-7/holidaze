import { useParams } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import { SingleVenue } from "../../types/global.types";
import { VenueMeta, VenueMetaContainer } from "../../styles/venues/cards";
import { FaWifi } from "react-icons/fa6";
import {
    MdLocalParking,
    MdOutlineEmojiFoodBeverage,
    MdOutlinePets,
} from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";

export function SingleVenues() {
    const { venueId } = useParams<{ venueId: string }>();
    const {
        data: venue,
        loading,
        error,
    } = useFetch<SingleVenue>(
        `https://v2.api.noroff.dev/holidaze/venues/${venueId}`
    );
    if (loading) return <p>Loading</p>;
    if (error)
        return <div>Error fetching products. Please try again later.</div>;
    return (
        <>
            <div className={`${venue?.id}`}>
                <h1>{venue?.name}</h1>
                <p>{venue?.description}</p>
                <p>{venue?.price}</p>{" "}
                <div>
                    {venue?.media?.length ? (
                        venue.media.map((mediaItem, index) => (
                            <img
                                key={index}
                                src={mediaItem.url}
                                alt={mediaItem.alt}
                                style={{
                                    display: "block",
                                    width: "100%",
                                    maxWidth: "300px",
                                    marginBottom: "10px",
                                }}
                            />
                        ))
                    ) : (
                        <p>No media available</p>
                    )}
                </div>
                <VenueMetaContainer>
                    <VenueMeta>
                        {venue?.meta.wifi ? (
                            <FaWifi />
                        ) : (
                            <FaWifi fill="lightgrey" />
                        )}
                    </VenueMeta>
                    <VenueMeta>
                        {venue?.meta.pets ? (
                            <MdOutlinePets />
                        ) : (
                            <MdOutlinePets fill="lightgrey" />
                        )}
                    </VenueMeta>
                    <VenueMeta>
                        {venue?.meta.parking ? (
                            <MdLocalParking />
                        ) : (
                            <MdLocalParking fill="lightgrey" />
                        )}
                    </VenueMeta>
                    <VenueMeta>
                        {venue?.meta.breakfast ? (
                            <MdOutlineEmojiFoodBeverage />
                        ) : (
                            <MdOutlineEmojiFoodBeverage fill="lightgrey" />
                        )}
                    </VenueMeta>
                    <VenueMeta>
                        <p> {venue?.maxGuests}</p>
                        <IoPeopleSharp />
                    </VenueMeta>
                </VenueMetaContainer>
                <div>
                    <h2>Location</h2>
                    <p>{venue?.location.address}</p>
                    <p>{venue?.location.city}</p>
                    <p>{venue?.location.zip}</p>
                    <p>{venue?.location.country}</p>
                </div>
                {/* <div>
                    <h2>Owner</h2>
                    <p>{venue?.owner.name}</p>
                    <p>{venue?.owner.avatar}</p>
                </div> */}
                <div>
                    <h2>owner</h2>
                    {/* <p>{venue?.owner.name}</p> */}
                </div>
            </div>
        </>
    );
}
