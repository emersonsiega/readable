import {
    SortType,
    OrderType,
} from '../../types'

const CHANGE_SORT = 'CHANGE_SORT'

const defaultOptions = {
    "Newest": {
        sortType: SortType.timestamp,
        orderType: OrderType.desc
    },
    "Oldest": {
        sortType: SortType.timestamp,
        orderType: OrderType.asc
    },
    "More popular": {
        sortType: SortType.voteScore,
        orderType: OrderType.desc
    },
    "Less popular": {
        sortType: SortType.voteScore,
        orderType: OrderType.asc
    }
}

const changeSort = (sortType, orderType) => ({
    type: CHANGE_SORT,
    sortType,
    orderType,
})

export {
    CHANGE_SORT,

    changeSort,
    defaultOptions,
}