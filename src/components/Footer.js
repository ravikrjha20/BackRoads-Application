import React from "react";
import data from "../Data/Data";
const { sectionData, socialLinks } = data;
const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {sectionData.map((item) => {
          return (
            <li key={item.id}>
              <a href={`#${item.type.toLowerCase()}`} className='footer-link'>
                {item.type}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              target='_blank'
              rel='noreferrer'
              className='footer-icon'
            >
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
