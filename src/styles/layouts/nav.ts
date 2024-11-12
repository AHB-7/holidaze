import styled from "styled-components";

export const Navbar = styled.nav`
    background-color: ${({ theme }) => theme.colors.text};
    max-width: 20rem;
    border-radius: 1.2rem;
    padding: 0.5rem 0.7rem;
    margin: 0.5rem 1rem;
    position: fixed;
    top: 0;
    width: 90%;
    z-index: 100;
`;
export const UpperNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const LowerNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 2.4rem;
    font-weight: 900;
    padding: 1rem;
    gap: 1rem;
    > * {
        color: ${({ theme }) => theme.colors.background};
    }
    :last-child {
        font-size: 1rem;
        justify-self: end;
        color: red;
    }
`;
export const LogInContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    > p {
        font-size: 1.3rem;
        color: ${({ theme }) => theme.colors.background};
    }
    > svg {
        font-size: 1.7rem;
    }
`;
