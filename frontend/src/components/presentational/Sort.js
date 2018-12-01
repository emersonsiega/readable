import React from 'react'
import styled from 'styled-components'
import { FaSortAlphaDown } from 'react-icons/fa'

import {
    SidePanelTitleDiv,
    SidePanelTitle,
    SidePanelItemList,
    ArrowIndicatorBefore,
} from './Components'

const SortContainer = styled.div``

const SortItem = styled.a`
    margin: 0;
    color: ${props => props.matched
        ? props.theme.link
        : props.theme.color};
    cursor: pointer;
`

const matched = (option, sort) => {
    return option.sortType === sort.sortType && option.orderType === sort.orderType ? 1 : 0
}

const Sort = ({options, sort, changeSort}) => (
    <SortContainer>
        <SidePanelTitleDiv>
            <FaSortAlphaDown />
            <SidePanelTitle>Sort</SidePanelTitle>
        </SidePanelTitleDiv>
        <SidePanelItemList>
            {Object.keys(options).map( key => (
                <ArrowIndicatorBefore 
                    key={key}
                    matched={matched(options[key], sort)}
                >
                    <SortItem
                        onClick={e => changeSort(options[key].sortType, options[key].orderType)}
                        matched={matched(options[key], sort)}
                    >
                        {key.toUpperCase()}
                    </SortItem>
                </ArrowIndicatorBefore>
            ) )}
        </SidePanelItemList>
    </SortContainer>
)

export default Sort