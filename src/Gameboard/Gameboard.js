import React from 'react'
import Scoreboard from '../Scoreboard/Scoreboard.js';
import './Gameboard.css'

class Gameboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <body>
                <h1>Welcome to Cory's 2048 Clone</h1>
                <Scoreboard/>
                <div className="empty-space">
                    <div className="grid-container">
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div>
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div>
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div>
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div>
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div>
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div>
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div>
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div>
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div>
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div>
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div>
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div>
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div>
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div>
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div>
                        <div className="tile-item">
                            <div className="number">200</div>
                        </div> 
                    </div>
                </div>
            </body>
        )
    }
}
export default Gameboard