import { useParams } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import { SingleVenue } from "../../types/global.types";

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
            <div>
                <h1>{venue?.name}</h1>
                <p>{venue?.description}</p>
                <div>
                    <h3>Media</h3>
                    {venue?.media.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`Image ${index + 1}`}
                            style={{
                                width: "100%",
                                maxWidth: "300px",
                                marginBottom: "10px",
                            }}
                        />
                    ))}
                </div>
                <p>
                    <strong>Price:</strong> {venue?.price} NOK
                </p>
                <p>
                    <strong>Max Guests:</strong> {venue?.maxGuests}
                </p>
                <p>
                    <strong>Rating:</strong> {venue?.rating}
                </p>

                <h3>Meta Information</h3>
                <p>WiFi: {venue?.meta.wifi ? "Yes" : "No"}</p>
                <p>Parking: {venue?.meta.parking ? "Yes" : "No"}</p>
                <p>Breakfast: {venue?.meta.breakfast ? "Yes" : "No"}</p>
                <p>Pets Allowed: {venue?.meta.pets ? "Yes" : "No"}</p>

                <h3>Location</h3>
                <p>
                    <strong>Address:</strong> {venue?.location.address}
                </p>
                <p>
                    <strong>City:</strong> {venue?.location.city}
                </p>
                <p>
                    <strong>Zip:</strong> {venue?.location.zip}
                </p>
                <p>
                    <strong>Country:</strong> {venue?.location.country}
                </p>
                <p>
                    <strong>Continent:</strong> {venue?.location.continent}
                </p>
                <p>
                    <strong>Latitude:</strong> {venue?.location.lat}
                </p>
                <p>
                    <strong>Longitude:</strong> {venue?.location.lng}
                </p>

                <h3>Owner</h3>
                {/* <p>
                    <strong>Name:</strong> {venue?.owner.name}
                </p>
                <p>
                    <strong>Email:</strong> {venue?.owner.email}
                </p> */}
                {/* {venue?.owner.avatar && (
                    <img
                        src={venue.owner.avatar}
                        alt="Owner Avatar"
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                        }}
                    />
                )}

                <h3>Bookings</h3>
                {venue?.bookings.length ? (
                    venue.bookings.map((booking) => (
                        <div
                            key={booking.id}
                            style={{
                                marginBottom: "10px",
                                padding: "10px",
                                border: "1px solid #ddd",
                            }}
                        >
                            <p>
                                <strong>Booking ID:</strong> {booking.id}
                            </p>
                            <p>
                                <strong>From:</strong>{" "}
                                {new Date(
                                    booking.dateFrom
                                ).toLocaleDateString()}
                            </p>
                            <p>
                                <strong>To:</strong>{" "}
                                {new Date(booking.dateTo).toLocaleDateString()}
                            </p>
                            <p>
                                <strong>Guests:</strong> {booking.guests}
                            </p>
                            <p>
                                <strong>Created:</strong>{" "}
                                {new Date(booking.created).toLocaleDateString()}
                            </p>
                            <p>
                                <strong>Updated:</strong>{" "}
                                {new Date(booking.updated).toLocaleDateString()}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No bookings available</p>
                )} */}
            </div>
        </>
    );
}
