import React from 'react';
import Card from './Card';
import Button from './Button';
import './ErrorModal.css';
function ErrorModal(props) {
    return (
        <div>
            <div className="backdrop" onClick={props.handleError}></div>
            <Card className="modal">
                <header className="header">{props.error.headerTitle}</header>
                <div className='content'>
                    <p>{props.error.headerContent}</p>
                </div>
                <footer className="actions">
                    <Button onClick={props.handleError}>Okay</Button>                    
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal;
