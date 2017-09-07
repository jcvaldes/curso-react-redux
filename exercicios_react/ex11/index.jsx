import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Valdés'>
      <Member name='Joaquin' />
      <Member name='Oliver' />
    </Family>
    , document.getElementById('app'))

