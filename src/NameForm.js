import React from 'react';

class NameForm extends React.Component{

constructor(props){
    super(props);
    this.state={

    }
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
}

//event.target correspond au champs de texte que l'on remplie
handleChange(event){
    this.setState({value: event.target.value})
}
handleSubmit(event){
    alert('Ton nom est bien ' +this.state.value);
    // à mettre en React au lieu du return false que l'on mettait en JavaScript
    event.preventDefault();
}

render(){
    return (
<form onSubmit={this.handleSubmit}>
    <label>Name:&nbsp;&nbsp;
        <input type="text" value={this.statevalue} onChange={this.handleChange}/>
    </label>
    <input type="submit" value="Submit" />

</form>
    );
}

}


export default NameForm;