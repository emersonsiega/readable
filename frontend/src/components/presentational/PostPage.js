import React from 'react'
import styled from 'styled-components'

import PostContainer from '../container/PostContainer'
import CommentsList from '../container/CommentsList'
import NewCommentContainer from '../container/NewCommentContainer'

const PostPageArticle = styled.article`
    width: 100%;
`

const Reply = styled.div`
    font-size: 1.1em;
    margin-top: 10px;
`

const PostPage = (props) => (
    <PostPageArticle>
        <PostContainer postId={props.postId} />

        <Reply>Reply</Reply>
        <NewCommentContainer postId={props.postId} />

        <Reply>{props.commentCount} replies</Reply>
        <CommentsList postId={props.postId} />
    </PostPageArticle>
)

export default PostPage