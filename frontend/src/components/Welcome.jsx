// import '../assets/css/Welcome.css';

const Welcome = () => {
        return (
                <div className="Welcome" >
                        <img src={require('../assets/images/dog_cat.jpeg')} alt="dog&cat_image"></img>
                        <article className="textttt">
                                <p>החבר שלך אבד? תן למודל הפסיכי לעזור לך</p>
                        </article>
                </div>
        );
}

export default Welcome;