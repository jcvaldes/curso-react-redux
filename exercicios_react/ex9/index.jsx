import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Valdés'>
        <Member name='Joaquin' />
    </Family>
    , document.getElementById('app'))

