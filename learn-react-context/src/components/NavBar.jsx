//rfce

import React from 'react'
import { Link } from 'react-router-dom' //เหมือนแท็ก a

function NavBar() {
  return (
    <div>
        
<div>
    <Link to="/">SALMON IN DAEYO</Link>
</div>

    <ul>
        <li><Link to="/">HOME </Link></li>
        <li><Link to="/about">About </Link></li>
    </ul>


    </div>
  )
}

export default NavBar