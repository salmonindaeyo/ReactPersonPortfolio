import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    nax-width: 960px;
    margin:0 auto;
`

export const NavBar = styled.nav`
    background: #333;
    height: 50px;
    

`

export const NavCon = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-item: center;
  
`
export const Logo = styled(Link)`
 color: #fff;
 text-decoration: none;
 font-size: 1.2 rem;
 font-weight: bold;
`
