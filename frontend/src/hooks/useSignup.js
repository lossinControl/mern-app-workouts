import { useState } from "react";
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const {dispatch} = useAuthContext();

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const res = await fetch('https://easy-lime-chick-slip.cyclic.app/api/user/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password})
        });

        const json = await res.json();

        if (!res.ok) {
            setIsLoading(false);
            setError(json.error);
        }

        if (res.ok) {
            // SAVE THE USER JSON WEB TOKEN TO LOCAL STORAGE
            localStorage.setItem('USER', JSON.stringify(json));
            // UPDATE THE AUTH CONTEXT
            dispatch({type: 'LOGIN', payload: json});
            setIsLoading(false);
        }
    }
    return {signup, isLoading, error}
}