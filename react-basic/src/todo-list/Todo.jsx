export default function Todo({ PropsText, isCompleted, isDeleted = false }) {
  if (isDeleted) {
    return null;
  }
  //   else if (isCompleted) {
  //     return (
  //       <li>
  //         <del>{PropsText}</del>
  //       </li>
  //     );
  //   }
  //   else {
  //     return <li>{PropsText}</li>;
  //   }
  else {
    return (
      <li>
        {/* Ternary Operator */}
        {/* {isCompleted ? <del>{PropsText}</del> : PropsText} */}
        {PropsText} {isCompleted && '🚀'}
      </li>
    );
  }
}
