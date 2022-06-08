import {useState} from "react";

class Saisie extends React.Component {
    //Hook d'état --> useState()
    // 1.1 CONSTRUCTION
    constructor(props) {
        super(props);
        this.state = {
            texte:"",
            nombre:0
        }
    }

    /*handleClick = () => {
        this.setState({texte:"Babar"})
    }*/
    // 1.3 CONSTRUCTION - Initialisation terminée
    componentDidMount() {
        //2.1 MISE A JOUR - Déclenchement d'un changement
        this.setState({texte:"Babar"})
    }

    //2.3 MISE A JOUR - Changement d'état terminé
    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    // 1.2 CONSTRUCTION - Rendu initial
    // 2.2 MISE A JOUR - Re-rendu
    render(){
        return (
            <>
                <input
                    type={"text"}
                    placeholder={"Votre tache..."}
                    value={""}
                    onChange={() => handleChange()}
                />
                <button
                    type={"submit"}
                    onClick={() => this.handleClick()}
                >
                    Valider
                </button>
            </>
        )
    }
    r
}

export default Saisie