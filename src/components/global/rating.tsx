import styled from "styled-components";

const Star = styled.span<{ active: boolean }>`
    color: ${({ active }) => (active ? "gold" : "gray")};
    font-size: 2rem;
`;
const StarsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 4rem;
    left: 0;
    width: 100%;
`;

export function Stars({ rating }: { rating: number }) {
    const safeRating = Math.max(0, Math.min(Math.floor(rating), 5));

    return (
        <StarsContainer>
            {[...Array(5)].map((_, index) => (
                <Star key={index} active={index < safeRating}>
                    &#9733;
                </Star>
            ))}
        </StarsContainer>
    );
}
