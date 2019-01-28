import React from "react"
import "./Scoreboard.css"

class Scoreboard extends React.Component {
    constructor() {
        super()
        this.state = {
            score: 0
        }
        this.changeScore = this.changeScore.bind(this)
    }
    changeScore() {
        let newScore = this.state.score + 2
        this.setState({ score: newScore })
    }
    render() {
        return (
            <div className="body">
                <div id="scoreboard">
                    Score: {this.state.score}
                </div>
                <button onClick={this.changeScore}>Click Me</button>
            </div>
        )
    }
}
export default Scoreboard