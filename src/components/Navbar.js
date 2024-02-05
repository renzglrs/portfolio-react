import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <>
      <div className="button-group d-flex flex-md-row flex-column gap-3">
        <Link to="/projects" type="button" class="btn btn-lg btn-outline-dark">Projects <i class="bi bi-arrow-up-right-square-fill"></i></Link>
        <Link to="/about" type="button" class="btn btn-lg btn-outline-dark">About <i class="bi bi-arrow-up-right-square-fill"></i></Link>
        <Link to="/resume" type="button" class="btn btn-lg btn-outline-dark">Resume <i class="bi bi-arrow-up-right-square-fill"></i></Link>
        <Link to="/contact" type="button" class="btn btn-lg btn-outline-dark">Contact <i class="bi bi-arrow-up-right-square-fill"></i></Link>
      </div>
    </>
  )
}

export default Navbar