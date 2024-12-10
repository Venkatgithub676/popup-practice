// Write your code here

import {Link} from 'react-router-dom'
import {Popup} from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}
const Header = () => (
  <div className="header-con">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-img"
      />
    </Link>
    <Popup
      trigger=<button
        className="hamburger-btn"
        data-testid="hamburgerIconButton"
        type="button"
      >
        <GiHamburgerMenu className="ham-burger" />
      </button>
      overlayStyle={overlayStyles}
      modal
    >
      {close => (
        <div className="pop-up-con">
          <button
            type="button"
            data-testid="closeButton"
            className="hamburger-btn"
            onClick={() => close()}
          >
            <IoMdClose style={{cursor: 'pointer'}} className="close-btn" />
          </button>

          <ul className="main-routes-con">
            <li className="li-item" onClick={() => close()}>
              <Link to="/" className="route">
                <AiFillHome className="icons" />
                <span className="route-name">Home</span>
              </Link>
            </li>
            <li className="li-item" onClick={() => close()}>
              <Link to="/about" className="route">
                <BsInfoCircleFill className="icons" />
                <span className="route-name">About</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
