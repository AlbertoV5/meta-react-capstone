import CallToAction from "../tablebook/CallToAction"

const Hero = () => {
    return (
        <section 
        id="hero-section"
        >
            <div 
            className="container"
            style={{width:"80vw"}}
            >
                <div className="row p-4">
                    <header
                    className="col-12 col-lg-6 p-4"
                    >
                        <h2>Little Lemon</h2>
                        <h6>Chicago</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <CallToAction/>
                    </header>
                    <div
                    className="col-12 col-lg-6 p-4"
                    >
                        <img
                        src="https://www.agardenforthehouse.com/wp-content/uploads/2022/11/lemon-pudding-cakes4-LR-1-of-1.jpg"
                        alt="image of dessert"
                        width={"100%"}
                        >
                        </img>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;