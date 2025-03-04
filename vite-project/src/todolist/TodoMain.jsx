export function TodoMain({ text, isCompleted, isDeleted }) {
    if (isDeleted) return null;

    return (
        <li>{isCompleted ? <del>{text}</del> : text}</li>
    );
}

export function Todo({ text, isCompleted, isDeleted }) {
    if (isDeleted) return null;

    return (
        <li>{text} {isCompleted && '✅'}</li>
    );
}


