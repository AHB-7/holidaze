import styled from "styled-components";

export const VenueCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 2rem 1rem;
    gap: 0.5rem;
    border-radius: 1rem;
    border: 0.01rem solid ${({ theme }) => theme.colors.text};
    position: relative;
`;
export const VenueInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    > h2 {
        font-size: 1.5rem;
        font-weight: 600;
    }
    > p {
        font-weight: 700;
        font-size: 1.1rem;
    }
    padding: 0.5rem;
`;
export const VenueImageContainer = styled.div`
    > a > img {
        cursor: pointer;
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        scale: 1;
        transition: scale 0.2s;
        &:hover {
            scale: 1.01;
        }
        border-radius: 1rem;
    }
    position: relative;
`;

export const StarsContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 1rem;
`;


export const VenueMetaContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.5rem 1rem 0.5rem;
`;
export const VenueMeta = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0rem;
    > p {
        font-size: 1.3rem;
    }
    font-size: 1.5rem;
    border: 0.12rem solid ${({ theme }) => theme.colors.text};
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.3rem;
`;
export const VenueBookingsButton = styled.button`
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
    border: none;
    border-radius: 0.3rem;
    padding: 0.6rem;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
    }
    &:active {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;
