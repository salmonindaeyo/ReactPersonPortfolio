//rfce

import React from 'react'
import { Link } from 'react-router-dom' //เหมือนแท็ก a
import { NavBar , Container , NavCon , Logo} from '../styles/styles'

function Nav() {
  return (
    <NavBar>
      <Container>
        <NavCon>
                  
<div>
    <Logo to="/">SALMON IN DAEYO</Logo>
</div>

    <ul>
        <li><Link to="/">HOME </Link></li>
        <li><Link to="/about">About </Link></li>
    </ul>

        </NavCon>
        </Container>  

    </NavBar>
  )
}

export default Nav