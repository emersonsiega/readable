import React from 'react'
import styled from 'styled-components'
import { FaCubes } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

import { 
    Link, 
    ArrowIndicatorBefore,
} from './Components'

const CategoryContainer = styled.div``

const TitleDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5em;
`

const Title = styled.label`
    margin-left: 10px;
`

const Category = styled(Link)`
    margin: 0;
    color: ${props => props.matched
        ? props.theme.link
        : props.theme.color};
`

const CategoryList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 5px 30px;
    font-size: 1em;
`

const matches = (location, url='') => location.pathname === `/${url}` ? 1 : 0

const Categories = ({categories, location}) => (
    <CategoryContainer>
        <TitleDiv>
            <FaCubes />
            <Title>Categories</Title>
        </TitleDiv>
        <CategoryList>
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
        </CategoryList>
    </CategoryContainer>
)

export default withRouter(Categories)