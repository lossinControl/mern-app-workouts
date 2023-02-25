import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export const Navbar = () => {

    const {logout} = useLogout();
    const {user} = useAuthContext();

    const handleClick = () => {
        logout();
    }

    return (
        <section className="nav-bar">
            <nav className="container header">
                <Link to={'/'} className="nav">
                    <h1>Workout</h1>
                </Link>
                {
                    user ?
                        <div className="current-user">
                            <div className="email">
                                <p>{user?.email}</p>
                            </div>
                            <div>
                                <button className="logout-btn" onClick={handleClick}>Logout</button>
                            </div>
                        </div>
                        :
                        <div className="login-signup">
                            <Link to={'/login'}>
                                <h4>Login</h4>
                            </Link>
                            <Link to={'/signup'}>
                                <h4>Sign up</h4>
                            </Link>
                        </div>
                }
            </nav>
        </section>
    );

}