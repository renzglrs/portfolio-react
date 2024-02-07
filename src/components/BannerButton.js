import { Link } from "react-router-dom";

const BannerButton = () => {
  return(
    <>
      <div className="button-group d-md-flex flex-md-row flex-column gap-3">
        <a href="#projects_section" type="button" class="btn btn-lg btn-dark me-2">Projects <i class="bi bi-arrow-up-right-square-fill"></i></a>
        <Link to="/about" type="button" class="btn btn-lg btn-outline-dark me-2">About <i class="bi bi-arrow-up-right-square-fill"></i></Link>
        {/* <Link to="/resume" type="button" class="btn btn-lg btn-outline-dark">Resume <i class="bi bi-arrow-up-right-square-fill"></i></Link>
        <Link to="/contact" type="button" class="btn btn-lg btn-outline-dark">Contact <i class="bi bi-arrow-up-right-square-fill"></i></Link> */}
      </div>
    </>
  )
}

export default BannerButton;