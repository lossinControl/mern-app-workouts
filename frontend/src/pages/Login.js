import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login, error, isLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    }

    return (
        <section className="img-bg">
            <div className="bg-opacity">
                <div className="container">
                    {
                    error ? 
                        <form onSubmit={handleSubmit} className="login-signup-form error-animate">
                        <h1>Login</h1>

                        <label>Email:</label>
                        <input 
                            type="emial" onChange={(e) => setEmail(e.target.value)} 
                            value={email} 
                        /> <br />

                        <label>Password:</label>
                        <input 
                            type="password" onChange={(e) => setPassword(e.target.value)} 
                            value={password} 
                        /> <br />

                        <button>Login</button>
                        {
                            error && <div className="error"><p>{error}</p></div>
                        }
                        </form> :

                        <form onSubmit={handleSubmit} className="login-signup-form">
                        <h1>Login</h1>

                        <label>Email:</label>
                        <input 
                            type="emial" onChange={(e) => setEmail(e.target.value)} 
                            value={email} 
                        /> <br />

                        <label>Password:</label>
                        <input 
                            type="password" onChange={(e) => setPassword(e.target.value)} 
                            value={password} 
                        /> <br />

                        <button>Login</button>
                        {
                            error && <div className="error"><p>{error}</p></div>
                        }
                        </form>
                    }
                </div>
            </div>
        </section>
    );

}