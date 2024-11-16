import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 2rem;
    background: ${({ theme }) =>
        `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.text} 100%)`};
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    width: 100%;
    max-width: 30rem;
    align-items: center;
    justify-content: center;
    height: 30rem;
    padding: 1rem;
    border-radius: 0.8rem;
    box-shadow: 0 0 1rem 0.1rem ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.text};
    > h1 {
        color: ${({ theme }) => theme.colors.text};
        margin-bottom: 3rem;
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
    background-color: ${({ theme }) => theme.colors.text};
    outline: none;
    transition: border 0.1s;
    &:focus {
        border: 0.1rem solid black;
    }
`;
export const SubmitBtn = styled.button`
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
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
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    aling-self: center;
    transition: 0.2s;
    font-weight: 900;
    &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.secondary};
    }
`;
