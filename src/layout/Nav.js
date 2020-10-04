import React, { Children } from 'react';
import styled from 'styled-components'
import{color} from "../global/styling.js"

const Nav = (props) => {
 
    return (
        <NavContainer>
            nav
        </NavContainer>
    )
}

const NavContainer = styled.nav`
    width:100%;
    height:80vh;
    border-bottom:1px solid black;

`
export default Nav