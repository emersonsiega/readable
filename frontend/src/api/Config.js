const url = process.env.NODE_ENV === 'production' 
    ? process.env.READABLE_API_URL_PROD 
    : process.env.READABLE_API_URL_DEV

export {
    url
}