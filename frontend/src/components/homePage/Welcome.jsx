// import '../../assets/css/Welcome.css';
import Image from '../Image';

const Welcome = () => {
        const image = {
                src: require('../../assets/images/welcome7.jpg'),
                alt: "dog&cat_image",
                title: "Find my friend banner",
                style: {
                        height: '580px',
                        width: '1679px',
                }
        }
        return (
                
                <div>
                        {/* <img src={require('../assets/images/dog_cat.jpeg')} alt="dog&cat_image"></img> */}
                        <Image img={image} />
                        
                </div>
        );
}

export default Welcome;