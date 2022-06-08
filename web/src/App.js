import './App.css';
import Home from './react/Home/Home';
import RightPart from './react/RightPart/RightPart';
import LeftPart from './react/LeftPart/LeftPart';

function App() {
    return (
        <>
            <div className='homepage'>
            <LeftPart className='leftPart'/>
            <Home className='homePart'/>
            <RightPart className='rightPart'/>
            </div>
        </>
    );
}

export default App;
