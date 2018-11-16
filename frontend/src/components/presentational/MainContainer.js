import React from 'react'
import styled from 'styled-components'

import SideContainer from './SideContainer'

const Content = styled.section`
    margin: 65px 20px 0px 20px;
    display: flex;
    flex-grow: 2;
`

const MainContainer = (props) =>  (
    <Content>
        {props.children}
        <SideContainer />
    </Content>
)

export default MainContainer