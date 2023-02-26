import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

export const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signup, isLoading, error} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password);
    }

    return (
        <section className="img-bg">
            <div className="bg-opacity">
                <div className="container">
                    {
                    error ?
                    <form onSubmit={handleSubmit} className="login-signup-form error-animate">
                        <h1>Sign up</h1>
                        {/* <h1>{password}</h1> */}

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

                        <button disabled={isLoading}>Sign up</button>
                        {
                            error && <div className="error"><p>{error}</p></div>
                        }
                    </form> :
                    // ELSE
                    <form onSubmit={handleSubmit} className="login-signup-form">
                    <h1>Sign up</h1>
                    {/* <h1>{password}</h1> */}

                    <label>Email:</label>
                    <input 
                        type="email" onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                    /> <br />

                    <label>Password:</label>
                    <input 
                        type="password" onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                    /> <br />

                    <button disabled={isLoading}>Sign up</button>
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