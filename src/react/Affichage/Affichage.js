import {connect} from "react-redux";

const ConnectedAffichage = (props) => {
    const listeTaches = props.taches.map((item, index) => {return (<li key={index}>{item.libelle}</li>)})
    return(
        <>
            <ul>
                {listeTaches}
            </ul>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        taches: state.taches
    }
}
const Affichage = connect(mapStateToProps)(ConnectedAffichage)

export default Affichage