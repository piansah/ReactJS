import { useState } from "react";

export default function ContactForm() {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleName(e) {
        setContact({ ...contact, name: e.target.value });
    }
    function handleEmail(e) {
        setContact({ ...contact, email: e.target.value });
    }
    function handleMessage(e) {
        setContact({ ...contact, message: e.target.value });
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form>
                <input type="text" placeholder="Name" value={contact.name} onChange={handleName} />
                <br />
                <input type="text" placeholder="Email" value={contact.email} onChange={handleEmail} />
                <br />
                <input type="text" placeholder="Message" value={contact.message} onChange={handleMessage} />
                <br />
                <button>Submit</button>
            </form>

            <h1>Contact Detail</h1>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Message: {contact.message}</p>
        </div>
    )

}