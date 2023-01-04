import '../../assets/css/HowTheSiteWork.css'
import Image from '../Image';
const HowTheSiteWork = () => {
        const image = {
                src: require('../../assets/images/petFind.png'),
                alt: "dog_image",
                title: "",
                style: {
                        height: '200px',
                        width: '250px',
                        marginTop: '10px',
                        marginBottom: '100px',
                        marginRight: '100px',
                        marginLeft: '100px',
                }
        }

        return (
                <>
                        <div className="DivSiteWork">
                                <p>איבדתם את החבר הכי טוב שלך? </p>
                                <p>אל דאגה! האתר שלנו מכיל מאגר של כלבים וחתולים שהלכו לאיבוד.</p>
                                <p>הכניסו תמונה של בעל החיים ותנו למערכת שלנו לעשות עבורכם את החיפוש.</p>
                                <p>אנחנו נעשה הכל כדי למצוא את החבר הכי טוב שלכם כמה שיותר מהר</p>
                        </div>
                        <div /* id='petFind' */>
                                <Image img={image} />
                        </div>
                </>
        );
}
export default HowTheSiteWork;