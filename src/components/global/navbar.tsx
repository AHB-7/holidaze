import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {
    LogInContainer,
    Navbar as NavbarSc,
    UpperNav,
} from "../../styles/layouts/nav";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";

export function Navbar() {
    const [active, setActive] = useState(false);

    const toggleActiveState = () => {
        setActive(!active);
    };


    return (
        <NavbarSc>
            <UpperNav>
                <Link to="/">
                    <img src={logo} alt="asa" />
                </Link>

                <Link to="/login">
                    <LogInContainer>
                        <p>LogIn</p>

                        <FiLogIn stroke="white" />
                    </LogInContainer>
                </Link>
                <LogInContainer>
                    <MdOutlineMenu fill="white" onClick={toggleActiveState} />
                </LogInContainer>
            </UpperNav>
            {/* {user ? (
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
            ) : null} */}
        </NavbarSc>
    );
}
