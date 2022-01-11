import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
    return(
        <div className={classes.backdrop} onClick={props.handleError}></div>
    )
}

const ModelOverlay = (props) => {
    return(
        <Card className={classes.modal}>
            <header className={classes.header}>{props.header}</header>
                <div  className={classes.content}>
                    <p>{props.content}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.handleError}>Okay</Button>                    
                </footer>
        </Card>
    )
}


function ErrorModal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop handleError={props.handleError} />,
                document.getElementById('backdrop')
            )}
            {ReactDOM.createPortal(
                <ModelOverlay header={props.error.headerTitle} content={props.error.contentTitle} handleError={props.handleError}  />,
                document.getElementById('model-overlay')
            )}
        </React.Fragment>
    )
}

export default ErrorModal;
