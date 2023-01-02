import { Fragment } from "react";
import Welcome from "./Welcome";
import FinderOfTheMonth from "./FinderOfTheMonth";
import Slider from "./Slider";
import Statistics from "./Statistics";

const HomepageContainer = () => {
        return (
                <div className="HomepageContainer">
                        <Fragment>
                                <Welcome />
                                <Slider />
                                <Statistics />
                                <FinderOfTheMonth />
                        </Fragment >
                </div >
        );
};

export default HomepageContainer;