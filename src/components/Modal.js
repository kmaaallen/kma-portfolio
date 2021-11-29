import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal(props) {
    if (props.open) {
        return (
            <div className="App-modal">
                <div className="App-modal-content App-rounded-card">
                    <div className="App-modal-header">
                        <h3 className="App-modal-title">{props.title}</h3>
                        <button onClick={props.dismiss}><FontAwesomeIcon icon={faTimes} /></button>
                    </div>
                    <div className="App-modal-body">
                        {props.body}
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}