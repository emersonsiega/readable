import React, { useState } from 'react'
import styled from 'styled-components'
import { FaFilter, FaSortNumericDown } from 'react-icons/fa'

import { IconZoom } from '../presentational/Components'

const SideOptions = styled.aside`
    opacity: 1;
    transition: visibility 0s, opacity 0.5s linear;

    @media screen and (max-width: 900px) {
        opacity: 0;
        visibility: hidden;
        width: 0;
    }
`
const Side = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    margin-left: 50px;
    flex-grow: 1;
`
const SideOptionsButton = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    position: fixed;
    right: 0;
    margin-right: 20px;
    opacity: 1;

    transition: visibility 0s, opacity 0.5s linear;

    @media screen and (min-width: 901px) {
        opacity: 0;
        visibility: hidden;
    }
`

const HiddenPopUp = styled.div`
    display: ${props => props.show === true ? 'flex' : 'none'};
    background: ${({ theme }) => theme.foreground};
    position: absolute;
    flex-direction: column;
    padding: 20px;
    right: 30px;
    width: auto;
    height: auto;
    filter: opacity(95%);
    box-shadow: 0px 0px 4px 0px;
    position: absolute;
    top: 0;
`

const ParentDiv = styled.div`
    position: relative;
`

//TODO: Move to another component
const Categories = () => (
    <>
        <label>Categories</label>
        <ul>
            <li>React</li>
            <li>Redux</li>
            <li>ES6</li>
        </ul>
    </>
)

//TODO: Move to another component
const Sort = () => (
    <>
        <label>Sort posts</label>
        <ul>
            <li>Newest</li>
            <li>Oldest</li>
            <li>More popular</li>
            <li>Less popular</li>
            <li>More commented</li>
        </ul>
    </>
)

const SHOW_CATEGORY = 'category'
const SHOW_SORT = 'sort'
const SHOW_NONE = ''

const options = [
    { type: SHOW_CATEGORY, component: Categories, icon: FaFilter },
    { type: SHOW_SORT, component: Sort, icon: FaSortNumericDown },
]

const SideContainer = () => {
    const [showPopUp, setShowPopUp] = useState(SHOW_NONE)
    const [popUpContent, setPopUpContent] = useState()

    const handleShowPopUp = (e, type, content) => {
        e.preventDefault()
        const show = showPopUp !== type
        setPopUpContent( show ? content : null )
        setShowPopUp(show ? type : SHOW_NONE )
    }

    return (
        <Side>
            <SideOptions>
                <Categories></Categories>
                <Sort></Sort>
            </SideOptions>
            <SideOptionsButton>
                {options.map(({type, component, icon}) => (
                    <ParentDiv key={type}>
                        <IconZoom 
                            highlight={showPopUp === type} 
                            onClick={(e) => handleShowPopUp(e, type, component())}
                        >
                            {icon()}
                        </IconZoom>
                        <HiddenPopUp show={showPopUp === type}>
                            {popUpContent}
                        </HiddenPopUp>
                    </ParentDiv>
                ))}
            </SideOptionsButton>
        </Side>
    )
}

export default SideContainer