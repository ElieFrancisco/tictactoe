import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Voiture from './Voiture';
import Garage from './Garage';
import Game from './Game';
import * as serviceWorker from './serviceWorker';
import Tick from './Tick';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';
import Liste from './Liste';
import NameForm from './NameForm';

// function Tick2(){
//     const element= (
//         <div>
//             <h1>Heure locale</h1>
//             <h2>Il est actuellement {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );

//     ReactDOM.render(element,document.getElementById('popo2'));
// }

// l'appel à la fonction Tick2 chaque seconde
// setInterval(Tick2, 1000);
// function monComposant(){
//     return <p>Trop cool ce nouveau composant</p>
// }

// syntaxe JSX - Javascript XML: elle nous permet d'écrire de l'html en react. C'est une simplification
// Les {} création d'un objet et execution de l'expression / la partie
const myelement= (<p>Coucou voici mon HTML {5+5}</p>);

// // sans syntaxe JSX : (mieux vaut éviter !)
const myelement2 = React.createElement('p',{},'coucou voici');
ReactDOM.render(<LoginControl />, document.getElementById('root2'));
ReactDOM.render(<Game />, document.getElementById('root'));
ReactDOM.render(<Clock />, document.getElementById('popo'));
// ReactDOM.render(<Toggle />, document.getElementById('popo2'));

// le const numbers doit se trouver au dessus du ReactDOM:
const numbers= [4,9,3,8,2];
ReactDOM.render(<Liste numbers={numbers} />, document.getElementById('popo3'));


const messages = ["coucou, j'espère que tu passes une bonne journée", "Salut", "ça va?"]
ReactDOM.render(<Mailbox messagesnonlus={messages}/>, document.getElementById('popo2'));
ReactDOM.render(<NameForm />, document.getElementById('popo4'));

// Si dessous une manière d'appeler un composant à partir d'une fonction
// ReactDOM.render(<Tick />, document.getElementById('popo'));

// ReactDOM.render(<App />, document.getElementById('root'));
// // ReactDOM.render(myelement, document.getElementById('popo'));
// ReactDOM.render(<Garage/>, document.getElementById('popo') );




setInterval(Tick, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
