import styled from "styled-components";

export const VenueCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 1rem;
    box-shadow: 0 0 0.05rem ${({ theme }) => theme.colors.shadow};
    padding: 1rem;
    position: relative;
    h2 {
        margin: 0 0 0.8rem 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    > img {
        width: 100%;
        height: auto;
        object-fit: cover;
        aspect-ratio: 1/1;
        border-radius: 1rem;
    }
`;
export const PriseAndGuests = styled.div`
    position: absolute;
    top: 3.5rem;
    left: 0;
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    padding: 1.5rem;
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
        width: 100%;
        max-width: 4rem;
        height: 4rem;
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.colors.background};
    }
`;
export const MetaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem;
    > div {
        font-size: 1.5rem;
    }
    padding: 0 1rem;
`;
export const NoMeta = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & * {
        color: red;
    }
    width: 2rem;
    height: 2rem;
`;
export const WithMeta = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
`;
