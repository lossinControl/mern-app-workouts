import { useState, useEffect } from "react";
import { WorkoutForm } from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Footer } from "../components/Footer";

export const Home = () => {

    const {workouts, dispatch} = useWorkoutsContext();
    const {user} = useAuthContext();

    const [selectedId, setSelectedId] = useState();
    const [showEditForm, setShowEditForm] = useState(false);
    const [title, setNewTitle] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('https://shy-cyan-narwhal-shoe.cyclic.app/api/workouts', {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            });
            const json = await response.json()
            if (response.ok) {
                // setWorkouts(json);
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        if (user) {
            fetchWorkout();
        }
    }, [dispatch, user]);

    const deleteWorkout = async (id) => {

        if (!user) {
            return
        }

        const response = await fetch(`https://shy-cyan-narwhal-shoe.cyclic.app/api/workouts/${id} `, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })
        const json = await response.json();
        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
            // console.log(json._id)
        }
    } 
    
    const editWorkout = async (id) => {
        // const newTitle = prompt('Enter new title:');

        if (!user) {
            return
        }

        const workout = {title: title};
        const res = await fetch(`https://shy-cyan-narwhal-shoe.cyclic.app/api/workouts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${user.token}`
            }
        })
        const json = await res.json();
        if (!res.ok) {
            setError(json.mssg);
        }
    }

    const showEdit = (id) => {
        setShowEditForm(true);
        setSelectedId(id);
    }

    const editInputFunction = (e) => {
        setNewTitle(e.target.value);
    }

    const closeModal = () => {
        setShowEditForm(false);
    }

    return (
        <section className="h-sec">
            <h2>Workouts Lists</h2>
            {/* <h1>{newTitle}</h1> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    {
                        workouts && workouts?.length ? workouts.map((Workout) => {
                        return (
                            <div key={Workout._id} className="workout-list workouts-animate">
                                <h4>{Workout?.title}</h4>
                                <h4>Load: {Workout?.load}</h4>
                                <h4>Reps: {Workout?.reps}</h4>
                                <span className="edit-btn" 
                                    onClick={() => showEdit(Workout._id)}>
                                    Edit
                                </span>
                                {
                                    showEditForm && selectedId === Workout._id && 
                                    <div className="edit-form-modal-container">
                                        <form className="edit-form"
                                        onSubmit={() => editWorkout(Workout._id)}>
                                            <h2>Edit workout</h2>
                                        <label>Title:</label>
                                        <input type="text" onChange={editInputFunction}
                                            required 
                                        />
                                        <button className="save-btn">Save</button>
                                        <span className="cancel-btn" onClick={closeModal}>
                                            Cancel
                                        </span>
                                        {error && <div className="error">{error}</div> }
                                        </form>
                                    </div>
                                }
                                <span className="del-btn" 
                                    onClick={() => deleteWorkout(Workout._id)}>
                                    Delete
                                </span>
                                </div>
                            );
                        }) : <p>There are no workouts to display.</p>
                    }
                    </div>
                    <div className="col-lg-6">
                        <WorkoutForm />
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <Footer />
        </section>
    );

}