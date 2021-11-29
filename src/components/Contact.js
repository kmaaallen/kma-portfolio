import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <div data-testid="contact" id="contact" className="App-section-container">
            <h2 className="App-section-heading">Contact</h2>
            <ContactForm />
        </div>
    )
};