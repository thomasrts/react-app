import Profil from './User/Profil';
import '../App.css';
import RightPart from './RightPart/RightPart';
import LeftPart from './LeftPart/LeftPart';

function Compte() {
    return (
        <div className='homepage'>
            <LeftPart className='leftPart'/>
            <Profil className='profil'/>
            <RightPart className='rightPart'/>
        </div>
    );
}

export default Compte;
