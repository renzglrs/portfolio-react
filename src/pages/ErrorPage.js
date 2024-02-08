import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <>
        <div className="d-flex flex-column justify-content-center align-items-center gap-2 vh-100">
            <h1>404 Page not Found</h1>
            <Link to="/">Back to home</Link>
        </div>
    </>
  )
}

export default ErrorPage