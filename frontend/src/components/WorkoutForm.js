import { useState, useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

export const WorkoutForm = () => {

    const {dispatch} = useWorkoutsContext();
    const {user} = useAuthContext();

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('You must be logged in.');
            return
        } 

        const workout = {title, reps, load};
        const res = await fetch('https://easy-lime-chick-slip.cyclic.app/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${user.token}`
            }
        })
        const json = await res.json();
        if (!res.ok) {
            setError(json.mssg);
        }
        if (res.ok) {
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            console.log('NEW WORKOUT ADDED!');
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return (
        <section>
            <form onSubmit={handleSubmit} className="workout-form">
                <h3 className="form-title">Add a new Workout</h3>

                <label>Excercise Title: </label> 
                <input  
                    type="text" onChange={(e) => setTitle(e.target.value)} value={title}
                /> <br />

                <label>Load: </label> 
                <input 
                    type="number" onChange={(e) => setLoad(e.target.value)} value={load}
                /> <br />

                <label>Reps: </label>
                <input 
                    type="number" onChange={(e) => setReps(e.target.value)} value={reps}
                /> 

                <br /> <br />

                <button>ADD WORKOUT</button>
                
                {error && <div className="error">{error}</div> }
            </form>
        </section>
    );

}