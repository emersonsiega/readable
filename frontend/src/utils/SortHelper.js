import {
    OrderType
} from '../types'

const SortHelper = ( list = [], options = {} ) => {
    const fn = options.orderType === OrderType.asc 
        ? (a, b) => a[options.sortType] - b[options.sortType]
        : (a, b) => b[options.sortType] - a[options.sortType]


    return list.sort( fn )
}

export default SortHelper