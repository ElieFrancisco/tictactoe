import React from 'react';

class Square extends React.Component{
//à chaque fois que l'on crée une sous classe, le constructor doit commencer par super(props); 
    constructor(props){
        super(props);
        this.state={
            valeur:null,
        }
    }

    render(){
        return (
            
        <button className="square" onClick={() => this.props.onClick()}>{this.props.valeur}
          
    {/* On peu également écrire:<button className="square" onClick={function(){ alert('Vous avez clické');}}></button> */}
                {/* {this.props.valeur} */}
            </button>
        );
    }

}


export default Square; 