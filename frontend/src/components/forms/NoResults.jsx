import { useContext } from "react";
import Image from '../Image';
import UserContext from "../../context/UserRequestContext";


const NoResults = () => {
        const { user } = useContext(UserContext);
        const status = user.status;
        const image = {
                src: require('../../assets/images/cat-sitting-alone.jpg'),
                alt: "dog&cat_image",
                title: "This is a cat img",
                style: {
                        height: '500px',
                        width: '1000px',
                }
        }

        let text = status === "lost" ? "לצערנו לא נמצאה התאמה! אתם מוזמנים לנסות ולחפש שוב במועד מאוחר יותר" :
                "לצערנו לא נמצאה התאמה! תודה רבה על מאמצכם, במידה ותהיה התאמה בהמשך, הורי החיה יצרו עמכם קשר";

        return (
                <div>
                        <p>{text}</p>
                        <Image img={image} />
                </div>
        );
}
export default NoResults;