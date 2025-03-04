import Row from "./Row.jsx";

export default function Table() {
    return (
        <>
        <table border="1">
            <tbody>
                <Row text= "Satu"/>
                <Row text= "Dua"/>
                <Row text= "Tiga"/>
                <Row text= "Empat"/>
                <Row text= "Lima"/>
            </tbody>
        </table>
        </>
    )
}