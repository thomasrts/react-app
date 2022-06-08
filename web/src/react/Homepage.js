import Home from './Home/Home';
import '../App.css';
import RightPart from './RightPart/RightPart';
import LeftPart from './LeftPart/LeftPart';

function Homepage() {
    return (
        <div className='homepage'>
            <LeftPart className='leftPart'/>
            <Home className='homePart'/>
            <RightPart className='rightPart'/>
        </div>
    );
}

export default Homepage;
