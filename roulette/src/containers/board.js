import React, {Component} from 'react'
import './board.css'
class Board extends Component{

  state= {
    board: [[3,6,9,12,15,18,21,24,27,30,33,36,"2 to 1"],
    [2,5,8,11,14,17,20,23,26,29,32,"2 to 1"]
  ,[1,4,7,10,13,16,19,22,25,28,31,34,"2 to 1"],["1st 12","12nd 12","3rd 12"],
["1st 18","even","red","black","odd","2nd 18"]]
  }


  render(){
    return(
      <div>
      {this.state.board.map((square)=>{})}
      // <table>
      //   <tr>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   </tr>
      //   <tr>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   </tr>
      //   <tr>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td>b</td>
      //   <td>a</td>
      //   <td></td>
      //   </tr>
      //   <tr>
      //     <td colSpan={4}></td>
      //     <td colSpan={4}></td>
      //     <td colSpan={4}></td>
      //   </tr>
      //   <tr>
      //     <td colSpan={2}></td>
      //       <td colSpan={2}></td>
      //         <td colSpan={2}></td>
      //           <td colSpan={2}></td>
      //             <td colSpan={2}></td>
      //               <td colSpan={2}></td>
      //
      //   </tr>
      //
      // </table>
      </div>
    )
  }

}

export default Board
