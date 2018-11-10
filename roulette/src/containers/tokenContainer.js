import Token from '../components/token'
import React from 'react'

class TokenContainer extends React.Component{
  state= {
    tokens: [1,5,10,25,100]
  }
  render(){
    return(
      <div>
      {this.state.tokens.map((token)=>{return <Token value= {token} tokenHandler= {this.props.tokenHandler}/>})}
      </div>

    )
  }
}
export default TokenContainer
