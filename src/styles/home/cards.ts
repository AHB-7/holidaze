import styled from "styled-components";

export const VenueCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    h2 {
        margin-bottom: 10px;
    }
    > img {
        width: 100%;
        height: auto;
        object-fit: cover;
        aspect-ratio: 1/1;
    }
`;
