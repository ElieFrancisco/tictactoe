import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Voiture from './Voiture';
import Garage from './Garage';
import Game from './Game';
import * as serviceWorker from './serviceWorker';


// function monComposant(){
//     return <p>Trop cool ce nouveau composant</p>
// }

// syntaxe JSX - Javascript XML: elle nous permet d'écrire de l'html en react. C'est une simplification
// Les {} création d'un objet et execution de l'expression / la partie
const myelement= (<p>Coucou voici mon HTML {5+5}</p>);

// // sans syntaxe JSX : (mieux vaut éviter !)
const myelement2 = React.createElement('p',{},'coucou voici');






ReactDOM.render(<Game />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
// // ReactDOM.render(myelement, document.getElementById('popo'));
// ReactDOM.render(<Garage/>, document.getElementById('popo') );





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
