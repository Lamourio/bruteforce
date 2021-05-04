import {NavLink} from 'react-router-dom';
function NavBar() {
    return (
        <nav className="navBar">
        <ul>
            <li><NavLink exact to="/">Definition</NavLink></li>
            <li><NavLink to="/Types/">Types</NavLink></li>
            <li><NavLink to="/attacks/">Attacks</NavLink></li>
            <li><NavLink to="/protection/">Protection</NavLink></li>
            <li><NavLink to="/example/">Exemple</NavLink></li>
        </ul>
        </nav>
    );
  }
  
  export default NavBar;