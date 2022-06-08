import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Dispatch} from "react";
import {ajouterTache} from "../../redux/actionCreator/actionCreator";

const ConnectedSaisie = ({addTask}) => {
    //Hook d'état --> useState()
    //1.1
    const [texte, setTexte] = useState("")

    const handleChange = (event) => {
        setTexte(event.target.value)
    }
    //1.3 Initialisation terminée
    //Hook d'effet
    useEffect(() => {
        console.log("iejfdozsbvsiobvsd")
    },[])

    const handleClick = () => {
        let newTask = {
            id:1,
            libelle: texte,
            termine: false
        }
        addTask(newTask)
    }
    //1.2
    return (
        <>
            <input
                type={"text"}
                placeholder={"Votre tache..."}
                value={texte}
                onChange={(event) => handleChange(event)}
            />
            <button
                type={"submit"}
                onClick={() => handleClick()}
            >
                Valider
            </button>
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (tache) => {dispatch(ajouterTache(tache))}
    }
}

const Saisie = connect(null, mapDispatchToProps)(ConnectedSaisie)

export default Saisie