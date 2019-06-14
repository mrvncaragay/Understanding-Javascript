import React, { Component } from 'react'


class Die extends Component {
    
    render() {

        return (

            <i className={`fas Die fa-dice-` + this.props.roll }></i>
        )
    }
}

export default Die;