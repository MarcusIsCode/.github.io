import React, { Children } from 'react';
import styled from 'styled-components'

const Nav = (props) => {

    return (
        <NavContainer>
            {props.Children}
        </NavContainer>
    )
}

const NavContainer = styled.nav`
width:100%;

`
export default Nav