import Links from "./Links"

const Nav = () => {
    return (
        <nav
        className="justify-content-center"
        >
            <div
            className="containter"
            >
                <div className="row">
                    <div className="col-2">
                        <img
                        src="https://www.48hourslogo.com/oss/attachments/2022/01/13/347418572/fce5b08add13e667d5855320c8ab6b39.png"
                        ></img>
                    </div>
                    <div className="col-10">
                        <Links
                        class="navmenu"
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Nav;