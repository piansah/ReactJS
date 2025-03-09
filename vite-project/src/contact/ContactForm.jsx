import { useImmer } from "use-immer";

export default function ContactForm() {
    const [contact, setContact] = useImmer({
        name: "",
        email: "",
        message: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setContact(draft => {
            draft[name] = value;
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitted Data:", contact);
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={contact.name} onChange={handleChange} />
                <br />
                <input type="email" name="email" placeholder="Email" value={contact.email} onChange={handleChange} />
                <br />
                <textarea name="message" placeholder="Message" value={contact.message} onChange={handleChange} />
                <br />
                <button type="submit">Submit</button>
            </form>

            <h1>Contact Detail</h1>
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Message:</strong> {contact.message}</p>
        </div>
    );
}
