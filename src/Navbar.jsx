import { useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

function Navbar() {
  //useState
  const [showLinks, setShowLinks] = useState(false);

  //useRef
  let refContainer = useRef(null);
  let refLinks = useRef(null);

  //FUNCTION toggleLinks
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  //OBJECT linkesStyle
  const linksStyle = {
    height: showLinks
      ? `${refLinks.current.getBoundingClientRect().height}px`
      : '0px',
  };

  //RETURN
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* Logo (Coding Addict) */}
          <img src={logo} alt='logo' className='logo' />
          {/* Button */}
          <button onClick={toggleLinks} className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        {/* Nav Items */}
        <div className='links-container' style={linksStyle} ref={refContainer}>
          <ul className='links' ref={refLinks}>
            {/* Loop Links */}
            {links.map((el) => {
              const { id, url, text } = el;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Social Icons */}
        <ul className='social-icons'>
          {social.map((el) => {
            const { id, url, icon } = el;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
