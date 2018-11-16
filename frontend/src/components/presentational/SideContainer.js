import React from 'react'
import styled from 'styled-components'

const SideOptions = styled.aside`
    @media screen and (max-width: 700px) {
        visibility: hidden;
    }
`
const Side = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    margin-left: 20px;
    flex-grow: 1;
`
const SideOptionsButton = styled.div`
    @media screen and (min-width: 700px) {
        visibility: hidden;
    }
`

const SideContainer = () => (
    <Side>
        <SideOptions>
            <label>Categories</label>
            <ul>
                <li>React</li>
                <li>Redux</li>
                <li>ES6</li>
            </ul>
        </SideOptions>
        <SideOptionsButton>
            <button>click me</button>
        </SideOptionsButton>
    </Side>
)

export default SideContainer