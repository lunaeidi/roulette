import React from 'react'
import './square.css'

class Square extends React.Component{
  render(){
    return(
    <div>
      <div className="firstRow">
        <span/>
        <span/>
        <span/>
      </div>
      <div className="secondRow">
        <div/>
        <span className="value">
        {this.props.value}
        </span>
        <span/>
        <span/>
      </div>
      <div className="thirdRow">
        <span/>
        <span/>
        <span/>
      </div>
    </div>
    )
  }
}
export default Square
