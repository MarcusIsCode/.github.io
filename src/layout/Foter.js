import React, { Children } from 'react';
import styled from 'styled-components'

const Footer = (props) => {

    return (
        <NavContainer>
            {props.Children}
        </NavContainer>
    )
}

const FooterContainer = styled.nav`
width:100%;

`
export default Footer