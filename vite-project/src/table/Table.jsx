import Row from "./Row.jsx";

export default function Table() {
    return (
        <>
        <table border="1">
            <tbody>
                <Row id="1" text= "Satu"/>
                <Row id="2" text= "Dua"/>
                <Row id="3" text= "Tiga"/>
                <Row id="4" text= "Empat"/>
                <Row id="5" text= "Lima"/>
            </tbody>
        </table>
        <hr/>
        </>
    )
}