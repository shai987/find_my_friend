import MyImage from '../images/dog_cat.jpeg';

const Welcome = () => {
        return (
                <div className="Welcome" >
                        <img src={MyImage} alt="img"></img>
                        {/* <img src='../images/dog_cat.jpeg' alt="img"></img> */}
                        <article className="textttt">
                                <p>החבר שלך אבד? תן למודל הפסיכי לעזור לך</p>
                        </article>
                </div>
        );
}

export default Welcome;