import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

export const useLogout = () => {

    const {dispatch} = useAuthContext();
    const {dispatch: workoutsDispatch} = useWorkoutsContext();

    const logout = () => {
        // REMOVE USE FROM LOCAL STORAGE
        localStorage.removeItem('USER');
        // DISPATCH LOGOUT ACTION
        dispatch({type: 'LOGOUT'});
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null});
    }
    return {logout}
}