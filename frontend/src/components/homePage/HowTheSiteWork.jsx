import '../../assets/css/HowTheSiteWork.css'
const HowTheSiteWork = () => {
        return (
                <>
                        <h1>איך האתר עובד?</h1>
                        <div id="bigDivProcessFinding">
                                <div className='processFinding'>
                                        <img src={require('../../assets/images/searchPet.png')} alt="women_img" />
                                        <p>איבדתם את החבר <br></br>הכי טוב שלכם?</p>
                                </div>
                                <img className='arrowStyle' src={require('../../assets/images/left-arrow.png')} alt="women_img" />
                                <div className='processFinding'>
                                        <img src={require('../../assets/images/upload.png')} alt="women_img" />
                                        <p>העלו תמונה <br></br>של בעל החיים לאתר</p>
                                </div>
                                <img className='arrowStyle' src={require('../../assets/images/left-arrow.png')} alt="women_img" />
                                <div className='processFinding'>
                                        <img src={require('../../assets/images/molecular.png')} alt="women_img" />
                                        <p>המערכת שלנו <br></br>תסרוק את מאגר התמונות</p>
                                </div>
                                <img className='arrowStyle' src={require('../../assets/images/left-arrow.png')} alt="women_img" />
                                <div className='processFinding'>
                                        <img src={require('../../assets/images/wanted.png')} alt="women_img" />
                                        <p>יוצגו תמונות של בעלי חיים<br></br> שנמצאו זהים לבעל החיים שלכם</p>
                                </div>
                                <img className='arrowStyle' src={require('../../assets/images/left-arrow.png')} alt="women_img" />
                                <div className='processFinding'>
                                        <img src={require('../../assets/images/lossPet.png')} alt="women_img" />
                                        <p>עברו על התמונות <br></br>ולחצו ליצירת קשר עם האדם המוצא</p>
                                </div>
                                <img className='arrowStyle' src={require('../../assets/images/left-arrow.png')} alt="women_img" />
                                <div className='processFinding'>
                                        <img src={require('../../assets/images/homePet.png')} alt="women_img" />
                                        <p>חזרו עם בעל החיים <br></br>בבטחה הביתה</p>
                                </div>
                        </div>
                </>
        );
}
export default HowTheSiteWork;