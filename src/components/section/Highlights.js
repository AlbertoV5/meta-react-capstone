import ButtonOnlineMenu from "../buttons/ButtonOnlineMenu";

const Highlights = () => {
    return (
        <section 
        id="highlights-section"
        >
            <div
            id="highlights-wrapper"
            className="container-sm"
            style={{width:"80vw"}}
            >
                <section 
                id="highlights-row-1"
                className="row p-4"
                >
                    <header 
                    id="highlights-header"
                    className="col-12 col-lg-6 p-2"
                    >
                        <h2>Specials</h2>
                    </header>
                    <div
                    id="highlights-button"
                    className="col-12 col-lg-6 p-2"
                    >
                        <ButtonOnlineMenu/>
                    </div>
                </section>
                <section 
                id="highlights-row-2"
                className="row p-4"
                >
                </section>
            </div>
        </section>
    )
}
export default Highlights;