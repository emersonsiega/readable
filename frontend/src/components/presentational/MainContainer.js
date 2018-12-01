import React from 'react'
import styled from 'styled-components'

import SideContainer from './SideContainer'

const Content = styled.section`
    margin: 65px 20px 0px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Children = styled.div`
    display: flex;
    width: 75%;
`

const MainContainer = (props) =>  (
    <Content>
        <Children>
            {props.children}
        </Children>
        <SideContainer />
    </Content>
)

export default MainContainer