import React from 'react';


// création d'une classe voiture
// on hérite de la classe Component définie dans React
//extends = hérite // Usages: Une class commence toujours par une majuscule//Const: toujours entierement en majuscule //var calCase ou snake_case

class Voiture extends React.Component{
    //attributs



    //methodes 
constructor(){
    super(); //il prend le comportement du parent. Execution du constructor qui est défini dans React.Component
   //première façon de fr :
//    this.state={color:"rouge"};
}


render(){
// return <h2>Coucou, je suis la meilleure voiture du monde et ma couleur est {this.state.color}</h2>
return <h2>Coucou, je suis la voiture {this.props.brand}, de couleur {this.props.color} appartenant à {this.props.owner} et de plaque {this.props.id}</h2>
}
}



export default Voiture; 
 