import '../../assets/css/FinderOfTheMonth.css';

const FinderOfTheMonth = () => {
        return (
                <div className='divFind'>
                        <h2 className="h2Class">מוצא החודש🏆</h2>
                        <img id="imgFinderOfTheMonth" src={require('../../assets/images/women.jpeg')} alt="women_img" />
                </div>
        );
}
export default FinderOfTheMonth;