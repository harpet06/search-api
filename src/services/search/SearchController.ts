import {
  getWorkouts,
  constructWorkouts
} from "./providers/KettlebellCodersProvider";

export const getAllWorkouts = async () => {
  return await getWorkouts();
};

export const generateWorkout = async (
  workoutDifficulty: string,
  workoutType: string,
  workoutNumber: number
) => {
  return await constructWorkouts(workoutDifficulty, workoutType, workoutNumber);
};
