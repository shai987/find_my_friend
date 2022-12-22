import { Fragment } from "react";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const HomepageContainer = () => {
        return (
                <div className="HomepageContainer">
                        <Fragment>
                                < NavBar />
                                <Welcome />
                                <Footer />
                                <ScrollToTop />
                        </Fragment >
                </div>
        );
};

export default HomepageContainer;