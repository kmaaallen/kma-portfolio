import { fireEvent, render, waitFor } from '@testing-library/react';
import ContactForm from './components/ContactForm';

jest.mock('./components/Modal', () => 'modal');

describe('App test suite', () => {
    let component, nameInput, emailInput, messageInput, send, modal;

    beforeEach(() => {
        component = render(<ContactForm />);
        nameInput = component.getByLabelText(/name:/i);
        emailInput = component.getByLabelText(/email:/i);
        messageInput = component.getByLabelText(/message:/i);
        send = component.getByText(/send/i);
        modal = component.getByTitle(/thanks for contacting me/i);
    });
    it('renders with empty inputs initially', () => {
        expect(component.getByTitle('contact form')).toHaveFormValues({
            name: '',
            email: '',
            message: ''
        })
    });
    it('should update input values when user types in them', () => {
        fireEvent.input(nameInput, { target: { value: 'John Doe' } });
        fireEvent.input(emailInput, { target: { value: 'j.doe@email.com' } });
        fireEvent.input(messageInput, { target: { value: 'Hi there, here is a message' } });
        expect(component.getByTitle('contact form')).toHaveFormValues({
            name: 'John Doe',
            email: 'j.doe@email.com',
            message: 'Hi there, here is a message'
        })
    });
    it('should show error when invalid submission', async () => {
        fireEvent.submit(send);
        expect(await component.findAllByText(/this field is required/i)).toHaveLength(3);
    });
    it('should disable send button on valid submission', async () => {
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID = 'test';
        process.env.REACT_APP_EMAIL_JS_TEMPLATE = 'test';
        process.env.REACT_APP_EMAIL_JS_USER_ID = 'test';
        fireEvent.input(nameInput, { target: { value: 'John Doe' } });
        fireEvent.input(emailInput, { target: { value: 'j.doe@email.com' } });
        fireEvent.input(messageInput, { target: { value: 'Hi there, here is a message' } });
        fireEvent.submit(send);
        await waitFor(() => expect(send).toBeDisabled());
        expect(modal).toBeInTheDocument();
    });
});