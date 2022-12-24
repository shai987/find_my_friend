import { Fragment } from "react";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import FinderOfTheMonth from "./FinderOfTheMonth";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const HomepageContainer = () => {
        return (
                <div className="HomepageContainer">
                        <Fragment>
                                < NavBar />
                                <Welcome />
                                <FinderOfTheMonth />
                                <Footer />
                                <ScrollToTop />
                        </Fragment >
                </div >
        );
};

export default HomepageContainer;