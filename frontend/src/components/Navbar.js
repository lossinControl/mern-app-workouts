import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faBars,
    faClose,
    faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {

    const {logout} = useLogout();
    const {user} = useAuthContext();

    const handleClick = () => {
        logout();
        setShowMenu(false);
    }

    const [showMenu, setShowMenu] = useState(false);

    return (
        <section className="nav-bar">
            <nav className="container header">
                <Link to={'/'} className="nav">
                    <h1>Workout</h1>
                </Link>
                {
                    user ?
                        <div className="nav-rightside">
                            <div className="current-user menu-animate" id={showMenu ? 'hidden' : ''}>
                                <Link to={'/workouts'} className="my-workouts"
                                    onClick={() => setShowMenu(false)}>
                                    <p>My Workouts</p>
                                </Link>
                                <div className="email">
                                    <p>Hi, 
                                        <FontAwesomeIcon icon={faUserCircle} className="user-icon" /> 
                                        {user?.email}
                                    </p>
                                </div>
                                <div>
                                    <p 
                                        className="logout-btn" 
                                        onClick={handleClick}>
                                        Logout
                                    </p>
                                </div>
                            </div>
                            {
                                showMenu ?
                                <FontAwesomeIcon 
                                    className="menu-btn" 
                                    onClick={() => setShowMenu(!showMenu)}
                                    icon={faClose}
                                /> :
                                <FontAwesomeIcon 
                                    className="menu-btn" 
                                    onClick={() => setShowMenu(!showMenu)}
                                    icon={faBars}
                                />
                            }
                        </div>
                        :
                        <div className="login-signup">
                            <Link to={'/login'} className="login-btn">
                                <h4>Login</h4>
                            </Link>
                            <Link to={'/signup'} className="signup-btn">
                                <h4>Sign up</h4>
                            </Link>
                        </div>
                }
            </nav>
        </section>
    );

}