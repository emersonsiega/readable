import React from 'react'
import styled from 'styled-components'

import PostContainer from '../container/PostContainer'
import CommentsList from '../container/CommentsList'

const PostPageArticle = styled.article``

const CommentsCount = styled.h3``

const PostPage = (props) => (
    <PostPageArticle>
        <PostContainer />
        <CommentsCount>{props.commentsCount} replies</CommentsCount>
        <CommentsList 
            parentId={props.postId} 
        />
    </PostPageArticle>
)

export default PostPage