import { Fragment } from "react";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Footer from "./Footer";

const HomepageContainer = () => {
        return (
                <div className="HomepageContainer">
                        <Fragment>
                                < NavBar />
                                <Welcome />
                                <Footer />
                        </Fragment >
                </div>
        );
};

export default HomepageContainer;