import { workoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(workoutsContext);
    if (!context) {
        throw Error('useWorkoutContext must be used inside a workout context provider.');
    }
    return context;
}