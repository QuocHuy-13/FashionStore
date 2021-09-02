import React from 'react';

const AlertNotify = (props) => {
    const {alertType,alerMessage, closeAlertMessage} = props
    return (
        <div
            className={`alert ${alertType} alert-dismissible`}
            role="alert"
        >
            {alerMessage}
            <button
                className="close"
                onClick={closeAlertMessage}
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default AlertNotify;
