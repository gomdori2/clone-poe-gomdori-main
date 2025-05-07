import React from 'react'
import "../../styles/Footer.scss"
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-links">
          <span>회사소개</span>
          <span>이용약관</span>
          <span>개인정보처리방침</span>
          <span>고객센터</span>
        </div>
        <div className="footer-info">
          <p>&copy; 2025 gomdori2. All rights reserved.</p>
          <a
            href="https://github.com/gomdori2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub: gomdori2
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer