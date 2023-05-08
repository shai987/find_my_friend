import Welcome from "./Welcome";
import FinderOfTheMonth from "./FinderOfTheMonth";
import Slider from "./Slider";
import Statistics from "./Statistics";
import HowTheSiteWork from "./HowTheSiteWork";

const HomepageContainer = () => {
        return (
                <div className="HomepageContainer">
                        <>
                                <Welcome />
                                <br />
                                <br />
                                <HowTheSiteWork />
                                <br />
                                <br />
                                <Statistics />
                                <br />
                                <Slider />
                                <FinderOfTheMonth />
                        </>
                </div >
        );
};

export default HomepageContainer;