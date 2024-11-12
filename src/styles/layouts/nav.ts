import styled from "styled-components";

export const Navbar = styled.nav`
    background-color: ${({ theme }) => theme.colors.text};
    max-width: 20rem;
    border-radius: 2rem;
    padding: 0.5rem 0.7rem;
    margin: 0.5rem 1rem;
    position: fixed;
    top: 0;
    width: 90%;
    z-index: 100;
    > :nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 2rem;
    }
    > :nth-child(2) {
        > * {
            color: ${({ theme }) => theme.colors.background};
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 3.4rem;
        padding: 1rem 0.5rem;
        font-weight: 900;
        :hover {
            color: ${({ theme }) => theme.colors.primary};
        }
        :active {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }
`;
