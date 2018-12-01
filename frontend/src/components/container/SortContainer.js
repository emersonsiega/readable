import React from 'react'
import { connect } from 'react-redux'

import Sort from '../presentational/Sort'
import { 
    changeSort,
    defaultOptions,
} from '../../store/actions/sort'

const SortContainer = ({options, sort, changeSort}) => (
    <Sort 
        sort={sort}
        options={options}
        changeSort={changeSort}
    />
)

const mapStateToProps = ({sort}) => ({
    options: defaultOptions,
    sort: sort
})

const mapDispatchToProps = dispatch => ({
    changeSort: (sortType, orderType) => dispatch(changeSort(sortType, orderType))
})

export default connect(mapStateToProps, mapDispatchToProps)(SortContainer)