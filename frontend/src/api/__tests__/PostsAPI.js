import PostsAPI from '../PostsAPI'

describe('PostsAPI', () => {
    it('calls posts and get data', async (done) => {
        const posts = await PostsAPI.posts()

        expect(posts).toBeDefined()
        expect(posts).toHaveLength(2)
        done()
    })

    it('calls getPost and get data', async (done) => {
        const post = await PostsAPI.getPost('6ni6ok3ym7mf1p33lnez')

        expect(post).toBeDefined()
        done()
    })

    it('calls comments and get data', async (done) => {
        const comments = await PostsAPI.comments('8xf0y6ziyjabvozdd253nd')
        
        expect(comments).toBeDefined()
        expect(comments).toHaveLength( 2 )
        done()
    })

})