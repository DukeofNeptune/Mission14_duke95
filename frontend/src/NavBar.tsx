import React from 'react';
import { Link } from 'react-router-dom';

//Creating a Navbar for the three pages
class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <ul
          style={{
            textAlign: 'left',
            backgroundColor: 'darkgray',
            listStyleType: 'none',
          }}
        >
          <h3>NavBar</h3>
          <Link to={'./Home'}>
            <li
              style={{
                float: 'left',
                textAlign: 'center',
                fontSize: '17px',
                marginRight: '15px',
              }}
            >
              Home
            </li>
          </Link>
          <Link to={'https://baconsale.com/'}>
            <li
              style={{
                float: 'left',
                textAlign: 'center',
                fontSize: '17px',
                marginRight: '15px',
              }}
            >
              Podcast Page
            </li>
          </Link>

          <Link to={'./Movie'}>
            <li
              style={{
                float: 'left',
                textAlign: 'center',
                fontSize: '17px',
                marginRight: '15px',
              }}
            >
              MovieCollection
            </li>
            <br></br>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
