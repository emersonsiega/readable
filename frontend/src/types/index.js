import {
    string,
    number,
    bool,
    func,
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

const VOTED_UP = 'upVote'
const VOTED_DOWN = 'downVote'
const voteType = {
    voteScore: number,
    onVoteUp: func.isRequired,
    onVoteDown: func.isRequired,
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
    THEME_LIGHT,
    THEME_DARK,
    navType,
}