import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
    FaChevronUp,
    FaChevronDown
} from 'react-icons/fa'

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

const VoteIcon = styled.div`
    color: ${props => props.voted === true
        ? props.theme.link
        : props.theme.color};
    cursor: pointer;
`

const VoteScore = styled.label`
    font-size: 3em;
    margin-left: 5px;
`

export const VOTED_UP = 'up'
export const VOTED_DOWN = 'down'

const Vote = ({voteScore = 0, onVoteUp, onVoteDown, voted = ''}) => {
    return (
        <VoteContainer>
            <VoteUpDown>
                <VoteIcon voted={ voted === VOTED_UP }>
                    <FaChevronUp onClick={() => onVoteUp()} />
                </VoteIcon>
                <VoteIcon voted={ voted === VOTED_DOWN }>
                    <FaChevronDown onClick={() => onVoteDown()} />
                </VoteIcon>
            </VoteUpDown>
            <VoteScore>{voteScore}</VoteScore>
        </VoteContainer>
    )
}

export const VotePropTypes = {
    voteScore: PropTypes.number,
    onVoteUp: PropTypes.func.isRequired,
    onVoteDown: PropTypes.func.isRequired,
    voted: PropTypes.oneOf([
        VOTED_UP,
        VOTED_DOWN,
        ''
    ])
}

Vote.propTypes = {...VotePropTypes}

export default Vote