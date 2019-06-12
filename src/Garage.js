import React from 'react';
import Voiture from './Voiture';

class Garage extends React.Component{

// attributs



// methods
render(){
    const def="grise";
    const voit= {color:"purple", brand:"Renault", owner:"None", id:"WWWWWW"};
    // on ouvre les parenthèses pour injecter de l'html VIA L'ANNOTATION JSX 6 JavaScript XML ET on execute la logique du code dans les {}

    // C'est ici que l'on définie le contenu HTML affichable à l'appel de la balise <Garage /> dans l'index.js
    return(

        <div>
            <h1>Quelles sont les voitures qui sont dans mon garage?</h1>
            <Voiture color='verte'brand="Mustang" owner="Sylvain" id="NZX-69"/><br/>
            <Voiture color='rouge'brand="Mercedes" owner="Jean" id="GHT-69"/><br/>
            <Voiture color='bleue'brand="Peugeot" owner="Jacouille" id="NZF-69"/><br/>
            <Voiture color='noire'brand="Ferrari" owner="Elie" id="UYX-69"/><br/>
        {/* Et celà devient puissant avec le code suivant pour une base de données */}
            <Voiture color={voit.color} brand={voit.brand} owner={voit.owner} id={voit.id}/> 
            <Voiture color={def}/>
        </div>

    );
}


}

export default Garage;