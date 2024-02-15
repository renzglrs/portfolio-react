import { Link } from "react-router-dom";

const BannerButton = () => {
  return(
    <>
      <div className="button-group d-md-flex flex-md-row flex-column gap-3">
        <Link to="/projects" type="button" className="btn btn-lg btn-dark me-2">Projects <i className="bi bi-arrow-up-right-square-fill"></i></Link>
        <Link to="/about" type="button" className="btn btn-lg btn-outline-dark me-2">About <i className="bi bi-arrow-up-right-square-fill"></i></Link>
        {/* <Link to="/resume" type="button" className="btn btn-lg btn-outline-dark">Resume <i className="bi bi-arrow-up-right-square-fill"></i></Link>
        <Link to="/contact" type="button" className="btn btn-lg btn-outline-dark">Contact <i className="bi bi-arrow-up-right-square-fill"></i></Link> */}
      </div>
    </>
  )
}

export default BannerButton;