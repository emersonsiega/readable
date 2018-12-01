import React from 'react'
import styled from 'styled-components'
import { FaCubes } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

import { 
    Link, 
    ArrowIndicatorBefore,
    SidePanelTitleDiv,
    SidePanelTitle,
    SidePanelItemList,
} from './Components'

const CategoryContainer = styled.div``

const Category = styled(Link)`
    margin: 0;
    color: ${props => props.matched
        ? props.theme.link
        : props.theme.color};
`

const matches = (location, url='') => location.pathname === `/${url}` ? 1 : 0

const Categories = ({categories, location}) => (
    <CategoryContainer>
        <SidePanelTitleDiv>
            <FaCubes />
            <SidePanelTitle>Categories</SidePanelTitle>
        </SidePanelTitleDiv>
        <SidePanelItemList>
            <ArrowIndicatorBefore matched={matches(location)}>
                <Category matched={matches(location)} to='/'>ALL</Category>
            </ArrowIndicatorBefore>
            {categories.map(category => (
                <ArrowIndicatorBefore
                    key={category.value} 
                    matched={matches(location, category.value)}
                >
                    <Category 
                        to={`/${category.value}`}
                        matched={matches(location, category.value)}
                    >
                        {category.text}
                    </Category>
                </ArrowIndicatorBefore>
            ))}
        </SidePanelItemList>
    </CategoryContainer>
)

export default withRouter(Categories)