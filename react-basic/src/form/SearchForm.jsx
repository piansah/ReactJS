export default function SeacrhForm() {
  return (
    <form>
      <input type="text" />
      <button
        onClick={(e) => {
          e.preventDefault();
          alert("You Search");
        }}
      >
        Search
      </button>
    </form>
  );
}
