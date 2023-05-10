import Almog from '../../assets/images/Almog.jpg';
import Ron from '../../assets/images/Ron.jpg';
import Shaika from '../../assets/images/Shaika.jpg';
import AdiLiel2 from '../../assets/images/AdiLiel2.png';
import cat_dog from '../../assets/images/cat_dog.jpg';
import cat_dog2 from '../../assets/images/cat_dog2.jpg';
import data from '../../assets/images/data.avif';
import '../../assets/css/About.css';
import Cards from '../Cards';
import { Grid } from '@mui/material';

const About = () => {
        return (
                <div className="aboutUs">
                        <div className="banner"></div>
                        <h1 >מי אנחנו</h1>
                        <div className="line"></div>
                        <div className="about">
                                <div className="text">
                                        <h3>קצת על האתר</h3>
                                        <p> <img src={cat_dog} alt="cats_dogs" />
                                                הפרויקט נועד לסייע בהשבת בעלי חיים אבודים לבעליהם. האתר מאפשר לאדם אשר מצא או איבד כלב/חתול להעלות תמונה של החיה לאתר וכן למלא פרטים רלוונטיים. התמונות המועלות עוברות עיבוד, מזוהות לפי סוג החיה והגזע שלה ונשמרות במאגר נתונים. במידה ותימצא התאמה בין תמונה המופיעה במאגר החיות האבודות לבין תמונה שהועלתה על ידי הבעלים – תתקבל על כך התראה וניתן יהיה להשיב את החיה לבעליה.
                                                מטרת הפרויקט היא לספק פלטפורמה דרכה ניתן לאתר בעל חיים אבוד ולהשיבו לבעלים באופן נוח וקל לשימוש.
                                        </p>
                                </div>
                        </div>
                        <div className="about">
                                <div className="text">
                                        <h3>אז איך הכל התחיל</h3>
                                        <p>
                                                <img src={data} alt="data" />אנו סטודנטים בשנה ג' בתואר למדעי המידע באוניברסיטת בר אילן. במסגרת פרויקט הגמר בו אנו לוקחים חלק, יצרנו אתר המשלב בין צד לקוח, צד שרת ולמידת מכונה. בחרנו בנושא שקרוב לליבנו, מתוך הכרה בכך שחיפוש אחר בעל חיים אבוד יכול להיות תהליך מתסכל ומייגע. אנו מאמינים כי האתר יכול לסייע באופן משמעותי באיתור בעלי חיים אבודים, ומקווים שהוא ישמש מספר רב של אנשים.
                                        </p>
                                        <div className="img3">
                                                <img src={cat_dog2} alt="dog_cat" />
                                        </div>
                                </div>
                        </div>
                        <h1>על הצוות</h1>
                        <div>
                                <Grid container item xs={10}>
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Cards
                                                imageSrc={Almog}
                                                title="אלמוג"
                                                alt="תמונה של אחד ממקימי האתר"
                                                studentName="אלמוג כהן"
                                                studentDescription="סטודנטית שנה ג' בתואר במדעי המידע"
                                                githubLink="https://github.com/almogc95"
                                                linkedinLink="https://www.linkedin.com/in/almog-cohen14/"
                                        />
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Cards
                                                imageSrc={Ron}
                                                title="רון"
                                                alt="תמונה של אחד ממקימי האתר"
                                                studentName="רון אלי"
                                                studentDescription=" סטודנט שנה ג' בתואר במדעי המידע"
                                                githubLink="https://github.com/RonEli23"
                                                linkedinLink="https://www.linkedin.com/in/ron-eli-ba47a9226/"
                                        />
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Cards
                                                imageSrc={Shaika}
                                                title="שי"
                                                alt="תמונה של אחד ממקימי האתר"
                                                studentName="שי גפן"
                                                studentDescription="סטודנט שנה ג' בתואר במדעי המידע"
                                                githubLink="https://github.com/shai987"
                                                linkedinLink="https://www.linkedin.com/in/shai-geffen-24373721a/"

                                        />
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Cards
                                                imageSrc={AdiLiel2}
                                                title="עדי ליאל"
                                                alt="תמונה של אחד ממקימי האתר"
                                                studentName="עדי ליאל מימון"
                                                studentDescription="סטודנטית שנה ג' בתואר במדעי המידע"
                                                githubLink="https://github.com/adi-liel"
                                                linkedinLink="https://www.linkedin.com/in/adi-liel-maimon/"
                                        />
                                </Grid>
                        </div>



                        {/* <div className="team_wrapper">
                                <div className="team">
                                        <div className="team_member">
                                                <div className="team_img">
                                                        <img src={Almog} alt="Team_image" />
                                                </div>
                                                <h3>אלמוג כהן</h3>
                                                <p className="role">ממקימי האתר</p>
                                                <p>סטודנטית שנה ג' בתואר במדעי המידע</p>
                                        </div>
                                        <div className="team_member">
                                                <div className="team_img">
                                                        <img src={Ron} alt="Team_image" />
                                                </div>
                                                <h3>רון אלי</h3>
                                                <p className="role">ממקימי האתר</p>
                                                <p>סטודנט שנה ג' בתואר במדעי המידע</p>
                                        </div>
                                        <div className="team_member">
                                                <div className="team_img">
                                                        <img src={Shaika} alt="Team_image" />
                                                </div>
                                                <h3>שי גפן</h3>
                                                <p className="role">ממקימי האתר</p>
                                                <p>סטודנט שנה ג' בתואר במדעי המידע</p>
                                        </div>
                                        <div className="team_member">
                                                <div className="team_img">
                                                        <img src={AdiLiel2} alt="Team_image" />
                                                </div>
                                                <h3>עדי ליאל מימון</h3>
                                                <p className="role">ממקימי האתר</p>
                                                <p>סטודנטית שנה ג' בתואר במדעי המידע</p>
                                        </div>
                                </div>
                        </div> */}
                </div>
        );
}
export default About;

