import React, { Component } from 'react'
import Die from './Die'
import './Die.scss'

class RollDice extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dieOne: 'one',
            dieTwo: 'five'

        }
    }

    static defaultProps = {
        name: 'Marv',
        faces: ['one', 'two', 'three', 'four', 'five', 'six' ]
    };

    rollDie = (e) => {
        console.log(e.target.style)
        // let die1 = this.props.faces[Math.ceil((Math.random() * 5))];
        // let die2 = this.props.faces[Math.ceil((Math.random() * 5))];

        // this.setState({
        //     dieOne: die1,
        //     dieTwo: die2
        }
    
    
    render() {

        return (
            <div>
                <h1>RollDice</h1>
                    <div>
                        <Die roll={this.state.dieOne}/>
                        <Die roll={ this.state.dieTwo }/>
                    </div>
                <button className="Btn" onClick={this.rollDie} >Roll Dice</button>
            </div>
        )
    }

}

export default RollDice;