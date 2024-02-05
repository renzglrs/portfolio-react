import React from 'react';
import { FaCodepen, FaGithub, FaLinkedin} from "react-icons/fa";


const SocialLinks = () => {
  return (
    <>
        <div className="social-links d-flex gap-3">
            <a href="https://www.linkedin.com/" className="text-dark fs-2" type="button" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://www.github.com/" className="text-dark fs-2" type="button" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.codepen.io/" className="text-dark fs-2" type="button" target="_blank" rel="noopener noreferrer">
                <FaCodepen />
            </a>
        </div>
    </>
  )
}

export default SocialLinks