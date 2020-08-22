import React, {Component} from 'react';

class Header extends Component {
  render(){
      return(
          <ul className="nav justify-content-center">
              <li className="nav-item">
                  <a className="nav-link active" >Active link</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" >Link</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link disabled" >Disabled link</a>
              </li>
          </ul>
      )
  }
}

export default Header;
