export default function Todo({PropsText, isCompleted}) {
  if (isCompleted) {
    return (
      <li>
        <del>{PropsText}</del>
      </li>
    )
  } else {
    return <li>{PropsText}</li>;
  }
}
