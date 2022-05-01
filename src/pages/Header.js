import { NavLink, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/login" className="nav-link" >Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" >Signup</NavLink>
                        </li>

                        <li className="nav-item">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    {/* Dropdown Button */}
                                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="rounded-circle" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} eventKey={"1"} to={'/dashboard'} >Dashboard</Dropdown.Item>
                                    <Dropdown.Item as={Link} eventKey={"2"} to={'/'}>Edit Profile</Dropdown.Item>
                                    <Dropdown.Item as={Link} eventKey={"3"} to={'/'}>Log Out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Header;
