import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Navbar as NavbarSc } from "../../styles/layouts/nav";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

export function Navbar() {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <NavbarSc>
            <div>
                <Link to="/">
                    <img src={logo} alt="asa" />
                </Link>
                <MdOutlineMenu fill="white" onClick={handleClick} />
            </div>
            {active ? (
                <div>
                    <Link to="/profile">Profile</Link>
                    <Link to="/booling">booking</Link>
                    <Link to="/logout">Logout</Link>
                </div>
            ) : null}
        </NavbarSc>
    );
}
