import { Star, StarsContainer } from "../../styles/venues/cards";
import { StarsProps } from "../../types/global.types";


export function Stars({ rating }: StarsProps) {
    const safeRating = Math.max(0, Math.min(Math.floor(rating), 5));

    return (
        <StarsContainer>
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    active={index < safeRating}
                    aria-label={`Star ${index + 1} ${
                        index < safeRating ? "filled" : "empty"
                    }`}
                />
            ))}
        </StarsContainer>
    );
}
