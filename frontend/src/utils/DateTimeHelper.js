export default ( timestamp ) => {
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    }

    const dateTime = new Date(timestamp)
    const date = dateTime.toLocaleDateString('en-US', options)
    const time = dateTime.toLocaleTimeString('en-US')

    return date + ' at ' + time.substr(0, 4) + ' ' + time.slice(-2)
}