import ButtonCallToAction  from "../buttons/ButtonCallToAction"

const Hero = () => {
    return (
        <section 
        id="hero-section"
        >
            <div
            id="hero-wrapper"
            className="container-sm"
            style={{width:"80vw"}}
            >
                <section
                id="hero-row-1"
                className="row p-4">
                    <header
                    id="hero-header"
                    className="col-12 col-lg-6 p-4"
                    >
                        <h2>Little Lemon</h2>
                        <h6>Chicago</h6>
                        <p
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <ButtonCallToAction/>
                    </header>
                    <section
                    id="hero-image"
                    className="col-12 col-lg-6 p-4"
                    >
                        <img
                        src="https://www.agardenforthehouse.com/wp-content/uploads/2022/11/lemon-pudding-cakes4-LR-1-of-1.jpg"
                        alt="picture of dessert"
                        width={"100%"}
                        >
                        </img>
                    </section>
                </section>
            </div>
        </section>
    )
}
export default Hero;