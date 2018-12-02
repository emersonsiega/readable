import React from 'react'
import LoadingBar from "react-redux-loading"

const Loading = () => (
    <LoadingBar style={{
        height: '1px',
        position: 'fixed',
        zIndex: 100,
        top: '60px',
        backgroundColor: '#6fcf97',
        boxShadow: '0px 0px 10px 0px #6fcf97'
    }} />
)

export default Loading