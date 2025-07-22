export default function GuestBookForm({ ref, name, setName }) {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <br />
      <input
        ref={ref}
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
    </div>
  );
}
