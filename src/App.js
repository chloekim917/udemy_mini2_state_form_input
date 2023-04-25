import React from 'react';

import './App.css';

// don't change the Component name "App"
export default function App() {
    const [validity, setValidity] = React.useState('Invalid message');
     
    const messageChangeHandler = (event) => {
        const value = event.target.value;
        
        if(value.trim().length < 3) {
            setValidity('Invalid message')
        } else {
            setValidity('Valid message')
        }
     };
     
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange ={messageChangeHandler} />
            <p>{validity}</p>
        </form>
    );
}

