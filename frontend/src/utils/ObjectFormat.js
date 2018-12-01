import v4 from 'uuid/v4'

const toObject = (value) => ({
    [value.id]: {
        ...value
    }
})

const fromArray = ( array ) => ({
    ...array.reduce((acc, value) => Object.assign({}, {...acc}, toObject(value)), {})
})

const toPersist = ( object ) => ({
    ...object,
    id: v4(),
    timestamp: new Date().getTime(),
})

export {
    fromArray,
    toPersist,
}