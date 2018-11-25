import React from 'react'
import styled from 'styled-components'

import PostContainer from '../container/PostContainer'
import CommentsList from '../container/CommentsList'
import NewCommentContainer from '../container/NewCommentContainer'

const PostPageArticle = styled.article``

const Reply = styled.div`
    font-size: 1.1em;
    margin-top: 10px;
`

const PostPage = (props) => (
    <PostPageArticle>
        <PostContainer />

        <Reply>Reply</Reply>
        <NewCommentContainer parentId={props.postId} />

        <Reply>{props.commentsCount} replies</Reply>
        <CommentsList parentId={props.postId} />
    </PostPageArticle>
)

export default PostPage