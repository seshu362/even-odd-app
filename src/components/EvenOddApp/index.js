// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
    state={count: 0}
    getRandomNumber = () => Math.ceil(Math.random() * 100)


    onIncrement = () =>{
      const randomNumber = this.getRandomNumber()
      this.setState(prevState =>({count: prevState.count + randomNumber}))
    }



  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para1">Count is {displayText}</p>
          <button className="button" onClick ={this.onIncrement}>Increment</button>
          <p className="para2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
