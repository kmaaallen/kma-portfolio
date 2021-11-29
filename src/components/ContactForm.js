import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import Modal from './Modal';

export default function ContactForm() {
    const form = useRef();
    const [open, setOpen] = useState(false);
    const [disabled, setdisabled] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const sendEmail = function (e) {
        setdisabled(true);
        emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE, form.current, process.env.REACT_APP_EMAIL_JS_USER_ID)
            .then((result) => {
                setdisabled(false);
                setOpen(true);
                reset();
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <form title="contact form" className="App-rounded-card App-form" ref={form} onSubmit={handleSubmit(sendEmail)}>
            <label htmlFor="name">Name:</label>
            <div className="App-form-input">
                <input name="name" id="name" type="text" {...register("name", { required: true })} />
                {errors.name && <span className="App-error-message">This field is required</span>}
            </div>

            <label htmlFor="email">Email:</label>
            <div className="App-form-input">
                <input name="email" id="email" type="email" {...register("email", { required: true })} />
                {errors.email && <span className="App-error-message">This field is required</span>}
            </div>

            <label htmlFor="message">Message:</label>
            <div className="App-form-input">
                <textarea name="message" id="message" {...register("message", { required: true })} />
                {errors.message && <span className="App-error-message">This field is required</span>}
            </div>

            <input className="App-form-submit" disabled={disabled} type="submit" value="Send" />
            <Modal title="Thanks for contacting me" body="I'll get back to you soon" open={open} dismiss={() => setOpen(false)} />
        </form>
    )
}