import React from 'react'
class Token extends React.Component{
  render(){
    return(
      <span className= "token" onClick={() => this.props.tokenHandler(this.props.value)}>
        {this.props.value}
      </span>
    )
  }

}
export default Token
