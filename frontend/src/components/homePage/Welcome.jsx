// import '../../assets/css/Welcome.css';
import Image from '../Image';

const Welcome = () => {
        const image = {
                src: require('../../assets/images/3.png'),
                alt: "dog&cat_image",
                title: "This is a dog cat img",
                style: {
                        height: '500px',
                        width: '1000px',
                }
        }
        return (
                <div className="Welcome" >
                        {/* <img src={require('../assets/images/dog_cat.jpeg')} alt="dog&cat_image"></img> */}
                        <Image img={image} />
                        <article className="textttt">
                                {/* <p id='pCheck'>החבר שלך אבד? תן למודל הפסיכי לעזור לך</p> */}
                        </article>
                </div>
        );
}

export default Welcome;