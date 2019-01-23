import React from 'react'
import './Gameboard.css'

class Gameboard extends React.Component{
    constructor(props){
        super(props)
    }
    render (){
        return(
        <div className="grid-container">
            <div className="grid-item">tile</div>
            <div className="grid-item">tile</div>
            <div className="grid-item">tile</div>
            <div className="grid-item">tile</div>
            <div className="grid-item">tile</div>
            <div className="grid-item">tile</div>
            <div className="grid-item">tile</div>
            <div className="grid-item">tile</div>
            <div className="grid-item">tile</div>
            <div className="grid-item">tile</div>
            <div className="grid-item">tile</div>
            <div className="grid-item">tile</div>
            <div className="grid-item">tile</div>
            <div className="grid-item">tile</div>
            <div className="grid-item">tile</div>
            <div className="grid-item">tile</div>
            
        </div>
        )
    }
}
export default Gameboard