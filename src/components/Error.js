import React from 'react'

const Error = () => {
    return (
        <div 
        className='showcase' 
        style={{ 
        height: '650px',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        fontSize: '30px',
        textAlign: 'center'
        }}>
            <div className="overlay">
            <h1>Looks like this page doesn't exit</h1>
            </div>
        </div>
    )
}

export default Error
