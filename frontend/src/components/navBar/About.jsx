import '../../assets/css/About.css';
import Almog from '../../assets/images/Almog.jpg';
import Ron from '../../assets/images/Ron.jpg';
import Shaika from '../../assets/images/Shaika.jpg';
import AdiLiel2 from '../../assets/images/AdiLiel2.png';
const About = () => {
        return (
                <div dir="rtl">
                        <div className="banner"></div>
                        <div className="container">
                                <h1 >מי אנחנו</h1>
                                <div className="line"></div>
                        </div>
                        <div className="about">
                                <div className="text">
                                        <h3>קצת על האתר</h3>
                                        <p> <img src="https://static9.depositphotos.com/1004199/1091/i/600/depositphotos_10910645-stock-photo-kitten-and-puppy-close-up.jpg" alt="cats_dogs" />
                                                הפרויקט נועד לסייע בהשבת בעלי חיים אבודים לבעליהם. האתר מאפשר לאדם אשר מצא או איבד כלב/חתול להעלות תמונה של החיה לאתר וכן למלא פרטים רלוונטיים. התמונות המועלות עוברות עיבוד, מזוהות לפי סוג החיה והגזע שלה ונשמרות במאגר נתונים. במידה ותימצא התאמה בין תמונה המופיעה במאגר החיות האבודות לבין תמונה שהועלתה על ידי הבעלים – תתקבל על כך התראה וניתן יהיה להשיב את החיה לבעליה.
                                                מטרת הפרויקט היא לספק פלטפורמה דרכה ניתן לאתר בעל חיים אבוד ולהשיבו לבעלים באופן נוח וקל לשימוש.
                                        </p>
                                </div>
                        </div>
                        <div className="about">
                                <div className="text">
                                        <h3>אז איך הכל התחיל</h3>
                                        <p>
                                                <img src="https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-97395.jpg?size=626&ext=jpg&ga=GA1.2.19967159.1672569007&semt=sph" alt="dogs_cat" />אנו סטודנטים בשנה ג' בתואר למדעי המידע באוניברסיטת בר אילן. במסגרת פרויקט הגמר בו אנו לוקחים חלק, יצרנו אתר המשלב בין צד לקוח, צד שרת ומודלים. בחרנו בנושא שקרוב לליבנו, מתוך הכרה בכך שחיפוש אחר בעל חיים אבוד יכול להיות תהליך מתסכל ומייגע. אנו מאמינים כי האתר יכול לסייע באופן משמעותי באיתור בעלי חיים אבודים, ומקווים שהוא ישמש מספר רב של אנשים.

                                        </p>
                                        <div className="img3">
                                                <img src="https://static8.depositphotos.com/1004199/982/i/600/depositphotos_9822329-stock-photo-cat-and-dog-together.jpg" />
                                        </div>
                                </div>
                        </div>
                        <h1>על הצוות</h1>
                        <div className="team_wrapper">
                                <div className="team">
                                        <div className="team_member">
                                                <div className="team_img">
                                                        <img src={Almog} alt="Team_image" />
                                                </div>
                                                <h3>אלמוג כהן</h3>
                                                <p className="role">ממקימי האתר</p>
                                                <p>סטודנטית שנה ג' בתואר במדעי המידע סטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידע</p>
                                        </div>
                                        <div className="team_member">
                                                <div className="team_img">
                                                        <img src={Ron} alt="Team_image" />
                                                </div>
                                                <h3>רון אלי</h3>
                                                <p className="role">ממקימי האתר</p>
                                                <p>סטודנטית שנה ג' בתואר במדעי המידע סטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידע</p>
                                        </div>
                                        <div className="team_member">
                                                <div className="team_img">
                                                        <img src={Shaika} alt="Team_image" />
                                                </div>
                                                <h3>שי גפן</h3>
                                                <p className="role">ממקימי האתר</p>
                                                <p>סטודנטית שנה ג' בתואר במדעי המידע סטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידע</p>
                                        </div>
                                        <div className="team_member">
                                                <div className="team_img">
                                                        <img src={AdiLiel2} alt="Team_image" />
                                                </div>
                                                <h3>עדי ליאל מימון</h3>
                                                <p className="role">ממקימי האתר</p>
                                                <p>סטודנטית שנה ג' בתואר במדעי המידע סטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידעסטודנטית שנה ג' בתואר במדעי המידע</p>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
export default About;


