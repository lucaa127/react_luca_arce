import React from 'react';
import { Spinner } from 'react-bootstrap';
import './loading.css';

const Loading = () => {
    return (
        <div className='loadingContainer'>
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>          
        </div>
    )
}


export default Loading
