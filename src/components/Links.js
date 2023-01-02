import {Link} from "react-router-dom";

const Links = (props) => {
    return (
        <ul className={props.class}>
            <li>
                <Link
                to="/"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                to="#about-section"
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                to="/menu"
                >
                    Menu
                </Link>
            </li>
            <li>
                <Link
                to="/reservations"
                >
                    Reservations
                </Link>
            </li>
            <li>
                <Link 
                to="/order-online"
                >
                    Order Online
                </Link>
            </li>
            <li>
                <Link
                to="/login"
                >
                    Login
                </Link>
            </li>
        </ul>
    )
}

export default Links;