const toObject = (value) => ({
    [value.id]: {
        ...value
    }
})

const fromArray = ( array ) => ({
    ...array.reduce((acc, value) => Object.assign({}, {...acc}, toObject(value)), {})
})

export {
    fromArray
}