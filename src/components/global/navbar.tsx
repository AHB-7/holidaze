// src/components/Navbar.tsx
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

                // Correctly access data from responseData
                if (
                    responseData &&
                    responseData.data &&
                    responseData.data.accessToken
                ) {
                    login(responseData.data, responseData.data.accessToken);
                } else {
                    throw new Error("Invalid response structure");
                }
            } catch (err) {
                console.error("Failed to log in:", err);
            }
        }
    };

    // Updated handleRegistering function in Navbar component

    const handleRegistering = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const name = formData.get("name") as string;
        const bio = formData.get("bio") as string;
        const avatarUrl = formData.get("avatarUrl") as string;
        const avatarAlt = formData.get("avatarAlt") as string;
        const bannerUrl = formData.get("bannerUrl") as string;
        const bannerAlt = formData.get("bannerAlt") as string;
        const venueManager = true;

        if (email && password && name) {
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
                            bio,
                            avatar: {
                                url: avatarUrl,
                                alt: avatarAlt,
                            },
                            banner: {
                                url: bannerUrl,
                                alt: bannerAlt,
                            },
                            venueManager,
                        }),
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        `Error: ${response.status} ${response.statusText}`
                    );
                }

                const responseData = await response.json();

                if (
                    responseData &&
                    responseData.data &&
                    responseData.data.accessToken
                ) {
                    login(responseData.data, responseData.data.accessToken);
                } else {
                    throw new Error("Invalid response structure");
                }
            } catch (err) {
                console.error("Failed to register:", err);
            }
        }
    };

    const userName = useUserStore((state) => state.user?.name);

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
                            <Link to={`/profiles/${userName}`}>Profile</Link>
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
                                        required
                                    />
                                    <FormInput
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
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
                                        required
                                    />
                                    <FormInput
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                    />
                                    <FormInput
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                    <FormInput
                                        type="text"
                                        name="bio"
                                        placeholder="Bio"
                                    />

                                    <FormInput
                                        type="text"
                                        name="avatarUrl"
                                        placeholder="Avatar URL"
                                    />
                                    <FormInput
                                        type="text"
                                        name="avatarAlt"
                                        placeholder="Avatar Alt Text"
                                    />

                                    <FormInput
                                        type="text"
                                        name="bannerUrl"
                                        placeholder="Banner URL"
                                    />
                                    <FormInput
                                        type="text"
                                        name="bannerAlt"
                                        placeholder="Banner Alt Text"
                                    />
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="venueManager"
                                        />
                                        I
                                    </label>
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
