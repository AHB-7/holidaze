import styled from "styled-components";

export const Navbar = styled.nav`
    background-color: ${({ theme }) => theme.colors.text};
    width: 100%;
    max-width: 25rem;
    border-radius: 1.2rem;
    padding: 0.5rem 0.7rem;
    position: fixed;
    top: 0.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 500px) {
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
    }
    z-index: 100;
    overflow: auto;
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
`;

export const LogInContainer = styled.div`
    display: flex;
    background-color: transparent;
    border: none;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    transition: all 0.2s;
    &:hover {
        cursor: pointer;
        scale: 1.05;
    }
    > p {
        font-size: 1.3rem;
        color: ${({ theme }) => theme.colors.background};
    }
    > svg {
        font-size: 1.7rem;
    }
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    width: 100%;
    align-items: center;
    > h2 {
        color: ${({ theme }) => theme.colors.background};
    }
`;
export const FormInput = styled.input`
    border: none;
    border-radius: 0.8rem;
    border: 0.05rem solid white;
    padding: 0.6rem;
    font-size: 1rem;
    width: 100%;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.background};
    outline: none;
    transition: border 0.1s;
    &:focus {
        border: 0.1rem solid white;
    }
`;
export const SubmitBtn = styled.button`
    background-color: ${({ theme }) => theme.colors.background});
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-radius: 0.8rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    width: 100%;
    margin: 1rem 0;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;
export const LogOut = styled.a`
    font-size: 1rem;
    justify-self: end;
    cursor: pointer;
    color: red;
    background-color: transparent;
    border: none;
    transition: 0.2s;
    &:hover {
    color: grey;
`;
export const RegBtn = styled(LogOut)`
    color: ${({ theme }) => theme.colors.background};
    cursor: pointer;
    aling-self: center;
    transition: 0.2s;
    &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.secondary};
    }
`;
export const TwoInputsInRow = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
`;
export const ErrorMessage = styled.p`
    color: red;
    font-size: 0.9rem;
    font-weight: bold;
`;
