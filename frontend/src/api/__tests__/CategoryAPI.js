import CategoryAPI from '../CategoryAPI'

describe('CategoryAPI', () => {
    it('calls categories and get data', async (done) => {
        const categories = await CategoryAPI.categories()

        expect(categories).toBeDefined()
        expect(categories).toHaveLength( 3 )
        done()
    })

    it('calls posts by category and get data', async (done) => {
        const posts = await CategoryAPI.postsByCategory('react')

        expect(posts).toBeDefined()
        expect(posts).toHaveLength(1)
        done()
    })

})