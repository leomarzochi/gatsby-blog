import React from "react"

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">Gatsby Blog</h4>
    <p className="text-center">Follow on social media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer noopener"
            className="facebook"
          >
            <i className="fab fa-facebook-square fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer noopener"
            className="instagram"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
