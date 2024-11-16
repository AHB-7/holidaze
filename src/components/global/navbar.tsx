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
import { Login } from "../auth/login";
import { Register } from "../auth/register";

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
                                <Login
                                    login={login}
                                    toggleRegisterModal={toggleRegisterModal}
                                />
                            ) : (
                                <Register
                                    login={login}
                                    toggleLoginModal={toggleRegisterModal}
                                />
                            )}
                        </LowerNav>
                    )}
                </>
            )}
        </NavbarSc>
    );
}
