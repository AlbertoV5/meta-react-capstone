const Links = (props) => {
    return (
        <ul className={props.class}>
            <li>
                <a 
                href="/#home-section"
                >
                    Home
                </a>
            </li>
            <li>
                <a 
                href="/#about-section"
                >
                    About
                </a>
            </li>
            <li>
                <a 
                href="/#menu-section"
                >
                    Menu
                </a>
            </li>
            <li>
                <a 
                href="/#reservations-section"
                >
                    Reservations
                </a>
            </li>
            <li>
                <a 
                href="/#order-online-section"
                >
                    Order Online
                </a>
            </li>
            <li>
                <a 
                href="/#login-section"
                >
                    Login
                </a>
            </li>
        </ul>
    )
}

export default Links;