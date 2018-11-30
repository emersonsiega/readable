import React from 'react'
import styled from 'styled-components'

import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

import { IconZoom } from './Components'
import { 
    voteType,
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

const Vote = ({voteScore, onVoteUp, onVoteDown}) => (
    <VoteContainer>
        <VoteUpDown>
            <IconZoom>
                <FaChevronUp onClick={onVoteUp} />
            </IconZoom>
            <IconZoom>
                <FaChevronDown onClick={onVoteDown} />
            </IconZoom>
        </VoteUpDown>
        <VoteScore>{voteScore}</VoteScore>
    </VoteContainer>
)

Vote.propTypes = { ...voteType }

Vote.defaultProps = {
    voteScore: 0
}

export default Vote