import React from 'react';
import Square from './Square';

class Board extends React.Component{

    constructor(props){
        super(props);
        this.state={
            squares:Array(9).fill(null),
        }
    }



//     handleClick(i){
//         const squares_copy= this.state.squares.slice();
//         if(calculateWinner(squares_copy) || squares_copy[i]){
//             return;
//         }
//         squares_copy[i]= this.state.xIsNext ? 'X' : 'O';
//         this.setState({
//             squares: squares_copy,
//         xIsNext : !this.state.xIsNext,
        
//     });
// }

        renderSquare(i){
        return <Square valeur={this.props.squares[i]} onClick={() =>this.props.onClick(i)}/>;
    }

        render(){
           // const winner= calculateWinner(this.state.squares);// retourne x ou  o en fonction du gagnant, ou personne
           
            // const status="Prochain joueur: "+(this.state.xIsNext ? 'X': 'O');
            return (
                <div>
                    {/* <div className="status">{status}</div> */}
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)} 
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}                       
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}                        
                    </div>
                </div>
            );
        }
}


export default Board;
