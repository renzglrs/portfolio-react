import { Link } from "react-router-dom";

const BannerButton = () => {
  return(
    <>
      <div className="button-group d-md-flex flex-md-row flex-column gap-3">
        <a href="https://drive.google.com/file/d/1xWozCZY0kys6-aZCg2FdAoIL2Z8nfY8z/view?usp=sharing" target="_blank" rel="noreferrer" type="button" className="btn btn-lg btn-dark me-2">Download CV <i className="bi bi-arrow-up-right-square-fill"></i></a>
        <Link to="/projects" type="button" className="btn btn-lg btn-outline-dark me-2">Projects</Link>
      </div>
    </>
  )
}

export default BannerButton;