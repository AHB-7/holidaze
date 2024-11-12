import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {
    LogInContainer,
    LowerNav,
    Navbar as NavbarSc,
    UpperNav,
} from "../../styles/layouts/nav";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";

export function Navbar() {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <NavbarSc>
            <UpperNav>
                <Link to="/">
                    <img src={logo} alt="asa" />
                </Link>
                <LogInContainer as={Link} to="/">
                    <p>LogIn</p>
                    <FiLogIn stroke="white" />
                </LogInContainer>
                <LogInContainer>
                    <MdOutlineMenu fill="white" onClick={handleClick} />
                </LogInContainer>
            </UpperNav>
            {active ? (
                <LowerNav>
                    <Link to="/profile">Profile</Link>
                    <Link to="/booling">booking</Link>
                    <Link to="/logout">Logout</Link>
                </LowerNav>
            ) : null}
        </NavbarSc>
    );
}
