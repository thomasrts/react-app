import { Routes, Route, Link } from "react-router-dom";
import Homepage from './react/Homepage';
import Compte from './react/Compte';
import './App.css';

function App() {
    return (
        <>
            <div className='homepage'>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/mon-compte" element={<Compte />} />
            </Routes>
            </div>
        </>
    );
}

export default App;