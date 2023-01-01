import { Fragment } from "react";
import Welcome from "./Welcome";
import FinderOfTheMonth from "./FinderOfTheMonth";

const HomepageContainer = () => {
        return (
                <div className="HomepageContainer">
                        <Fragment>
                                <Welcome />
                                <FinderOfTheMonth />
                        </Fragment >
                </div >
        );
};

export default HomepageContainer;