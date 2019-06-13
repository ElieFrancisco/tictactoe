import React from 'react';

class Clock extends React.Component{
// premiere fonction qui s'execute pour creer le composant: c'est celle qui le construit
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };
    }

    // La fonction qui affiche l'HTML sur l'ecran. to render= Afficher en anglais
    render(){
        return(
            <div>
                <h1>Heure locale</h1>
                <h2>Il est actuellement {this.state.date.toLocaleTimeString()}</h2>
            </div>
    
        )
    }
    // Une fois que l'affichage render a lieu, la fonction suivante s'execute directement
    // componentDidMount = Le composant vient de se mettre en place
componentDidMount(){
this.timerID = setInterval(() =>this.tictac() ,1000)
    
}

// voici une fonction qui permet de mettre à jour la date dans l'état (this.state.date)
// attention: qui dit mise à jour de l'état dit : setState
tictac(){
    this.setState({
        date: new Date()
    });
}

// juste avant de finir un lifecycle et de quitter le composant, nous effaçons le contenu de l'intervalle de temps
componentWillUnmount(){
    clearInterval(this.timerID);
}


}

export default Clock;