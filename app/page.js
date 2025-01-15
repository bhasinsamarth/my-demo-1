import Link from "next/link"

export default  function page() {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>This is a simple web page</p>
            <p>Link to week2's Work: <Link href="week-2">Click me!</Link></p>
        </div>
    )
}