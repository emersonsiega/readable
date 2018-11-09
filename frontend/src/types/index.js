import {
    string,
    number,
    bool,
    func, 
    oneOf,
} from 'prop-types'

const postType = {
    id: number,
    title: string.isRequired,
    author: string.isRequired,
    body: string,
    timestamp: number.isRequired,
    voteScore: number,
    category: string,
    deleted: bool,
    commentCount: number
}

const VOTED_UP = 'up'
const VOTED_DOWN = 'down'
const VOTE_NONE = ''
const voteType = {
    voteScore: number,
    onVoteUp: func.isRequired,
    onVoteDown: func.isRequired,
    voted: oneOf([
        VOTED_UP,
        VOTED_DOWN,
        VOTE_NONE
    ])
}

export {
    postType,
    voteType,
    VOTED_UP,
    VOTED_DOWN, 
    VOTE_NONE,
}