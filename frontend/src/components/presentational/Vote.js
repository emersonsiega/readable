import React from 'react'
import styled from 'styled-components'

import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

import { Icon } from './Components'
import { 
    voteType, 
    VOTED_DOWN, 
    VOTED_UP, 
    VOTE_NONE 
} from '../../types'

const VoteContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const VoteUpDown = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 2em;
    justify-content: space-between;
`

const VoteScore = styled.label`
    font-size: 3em;
    margin-left: 5px;
`

const Vote = ({voteScore, onVoteUp, onVoteDown, voted = VOTE_NONE}) => {
    return (
        <VoteContainer>
            <VoteUpDown>
                <Icon highlight={ voted === VOTED_UP }>
                    <FaChevronUp onClick={() => onVoteUp()} />
                </Icon>
                <Icon highlight={ voted === VOTED_DOWN }>
                    <FaChevronDown onClick={() => onVoteDown()} />
                </Icon>
            </VoteUpDown>
            <VoteScore>{voteScore}</VoteScore>
        </VoteContainer>
    )
}

Vote.propTypes = { ...voteType }

Vote.defaultProps = {
    voteScore: 0
}

export default Vote