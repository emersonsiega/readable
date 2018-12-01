import React from 'react'
import { connect } from 'react-redux'

import Categories from '../presentational/Categories'

const CategoriesContainer = ({categories}) => (
    <Categories
        categories={categories}
    />
)

const mapStateToProps = ({categories = []}) => ({
    categories: Object.keys(categories).map(k => ({ value: k, text: categories[k] })) || [],
})

export default connect(mapStateToProps)(CategoriesContainer)