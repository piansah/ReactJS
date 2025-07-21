import { useImmer } from "use-immer";

const initialData = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [contact, setContact] = useImmer(initialData);
  function handleChangeName(e) {
    setContact((draft) => {
      draft.name = e.target.value;
    });
  }
  function handleChangeEmail(e) {
    setContact((draft) => {
      draft.email = e.target.value;
    });
  }
  function handleChangeMessage(e) {
    setContact((draft) => {
      draft.message = e.target.value;
    });
  }
  function handleReset() {
    contact(""); // kosongkan input
    setContact(() => []); // kosongkan daftar tugas
  }
  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <input type="text" placeholder="Name" onChange={handleChangeName} />
        <br />
        <input type="email" placeholder="Email" onChange={handleChangeEmail} />
        <br />
        <textarea placeholder="Message" onChange={handleChangeMessage} />
        <br />
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <br />
      </form>

      <h1>Contact Detail</h1>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Message: {contact.message}</p>
    </div>
  );
}
