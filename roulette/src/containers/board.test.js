import React from 'react'
import Board from './board'
import {shallow} from 'enzyme'

 it('board renders a table', () => {
  const board= shallow(<Board/>)
  expect(board.contains(<table></table>)).to.equal(true)
})
