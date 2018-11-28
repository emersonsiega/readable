import {
    string,
    number,
    bool,
    func, 
    oneOf,
} from 'prop-types'

const postType = {
    id: string,
    title: string.isRequired,
    author: string.isRequired,
    body: string.isRequired,
    timestamp: number.isRequired,
    voteScore: number,
    category: string,
    deleted: bool,
    commentCount: number,
    onDelete: func.isRequired,
    onEdit: func.isRequired,
}

const commentType = {
    id: string,
    parentId: string.isRequired,
    author: string.isRequired,
    body: string.isRequired,
    timestamp: number.isRequired,
    voteScore: number,
    deleted: bool,
    parentDeleted: bool,
    onDelete: func.isRequired,
    onEdit: func.isRequired,
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

const THEME_LIGHT = 'light'
const THEME_DARK = 'dark'

const navType = {
    toggleTheme: func.isRequired
}

export {
    postType,
    commentType,
    voteType,
    VOTED_UP,
    VOTED_DOWN, 
    VOTE_NONE,
    THEME_LIGHT,
    THEME_DARK,
    navType,
}