import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {
    Form,
    FormInput,
    LogInContainer,
    LogOut,
    LowerNav,
    Navbar as NavbarSc,
    RegBtn,
    SubmitBtn,
    UpperNav,
} from "../../styles/layouts/nav";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { useUserStore } from "../../hooks/utilities/login-state";

export function Navbar() {
    const [active, setActive] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const { user, login, logout } = useUserStore();

    const toggleRegisterModal = () => {
        setRegisterModal(!registerModal);
    };
    const toggleActiveState = () => {
        setActive(!active);
    };

    // Handle Login Form Submission
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get("email");
        const password = formData.get("password");

        if (typeof email === "string" && typeof password === "string") {
            try {
                const response = await fetch(
                    "https://v2.api.noroff.dev/auth/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email,
                            password,
                        }),
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        `Error: ${response.status} ${response.statusText}`
                    );
                }

                const responseData = await response.json();

                // Assuming responseData contains user information and accessToken
                if (responseData && responseData.accessToken) {
                    login(responseData.user, responseData.accessToken);
                }
            } catch (err) {
                console.error("Failed to log in:", err);
            }
        }
    };

    // Handle Register Form Submission
    const handleRegistering = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get("email");
        const password = formData.get("password");
        const name = formData.get("name");

        if (typeof email === "string" && typeof password === "string") {
            try {
                const response = await fetch(
                    "https://v2.api.noroff.dev/auth/register",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email,
                            password,
                            name,
                        }),
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        `Error: ${response.status} ${response.statusText}`
                    );
                }

                const responseData = await response.json();

                // Assuming responseData contains user information and accessToken
                if (responseData && responseData.accessToken) {
                    login(responseData.user, responseData.accessToken);
                }
            } catch (err) {
                console.error("Failed to register:", err);
            }
        }
    };

    return (
        <NavbarSc>
            <UpperNav>
                <Link to="/">
                    <img src={logo} alt="asa" />
                </Link>
                {!user && (
                    <LogInContainer as="button" onClick={toggleActiveState}>
                        <p>LogIn</p>
                        <FiLogIn stroke="white" />
                    </LogInContainer>
                )}
                {user && (
                    <LogInContainer>
                        <MdOutlineMenu
                            fill="white"
                            onClick={toggleActiveState}
                        />
                    </LogInContainer>
                )}
            </UpperNav>
            {user ? (
                <>
                    {active && (
                        <LowerNav>
                            <Link to="/profile">Profile</Link>
                            <Link to="/booking">Booking</Link>
                            <LogOut as="button" onClick={logout}>
                                Logout
                            </LogOut>
                        </LowerNav>
                    )}
                </>
            ) : (
                <>
                    {active && (
                        <LowerNav>
                            {!registerModal ? (
                                <Form onSubmit={handleLogin}>
                                    <h2>Login</h2>
                                    <FormInput
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                    />
                                    <FormInput
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    <SubmitBtn type="submit">Login</SubmitBtn>
                                    <RegBtn onClick={toggleRegisterModal}>
                                        Register
                                    </RegBtn>
                                </Form>
                            ) : (
                                <Form onSubmit={handleRegistering}>
                                    <h2>Register</h2>
                                    <FormInput
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                    />
                                    <FormInput
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    <FormInput
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                    />
                                    <FormInput
                                        type="text"
                                        name="banner"
                                        placeholder="Banner"
                                    />
                                    <FormInput
                                        type="text"
                                        name="avatar"
                                        placeholder="Avatar"
                                    />
                                    <FormInput
                                        type="text"
                                        name="bio"
                                        placeholder="Bio"
                                    />
                                    <SubmitBtn type="submit">
                                        Register
                                    </SubmitBtn>
                                    <RegBtn onClick={toggleRegisterModal}>
                                        Login
                                    </RegBtn>
                                </Form>
                            )}
                        </LowerNav>
                    )}
                </>
            )}
        </NavbarSc>
    );
}
