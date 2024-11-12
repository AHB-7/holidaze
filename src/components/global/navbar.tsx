import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {
    // FormInput,
    LogInContainer,
    LogOut,
    LowerNav,
    Navbar as NavbarSc,
    // SubmitBtn,
    UpperNav,
} from "../../styles/layouts/nav";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
// import { FiLogIn } from "react-icons/fi";

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
                {/* <LogInContainer as={Link} to="/" onClick={handleClick}>
                    <p>LogIn</p>
                    <FiLogIn stroke="white" />
                </LogInContainer> */}
                <LogInContainer>
                    <MdOutlineMenu fill="white" onClick={handleClick} />
                </LogInContainer>
            </UpperNav>
            {/* {active ? (
                <LowerNav>
                    <h2>Login</h2>
                    <form action="">
                        <FormInput type="text" placeholder="Email" />
                        <FormInput type="password" placeholder="Password" />
                        <SubmitBtn type="submit">Login</SubmitBtn>
                    </form>
                </LowerNav>
            ) : null} */}
            {active ? (
                <LowerNav>
                    <Link to="/profile">Profile</Link>
                    <Link to="/booling">booking</Link>
                    <LogOut as={Link} to="/logout">
                        Logout
                    </LogOut>
                </LowerNav>
            ) : null}
        </NavbarSc>
    );
}
