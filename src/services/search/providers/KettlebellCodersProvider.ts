import request from "request-promise";

const baseUrl = `https://pk3atpe009.execute-api.us-east-1.amazonaws.com/dev`;

export const getWorkouts = async () => {
  const url = `${baseUrl}/workouts`;
  const response = await request(url);
  return JSON.parse(response);
};

export const constructWorkouts = async (
  workoutDifficulty: string,
  workoutType: string,
  workoutNumber: number
) => {
  const url = `${baseUrl}/workouts/${workoutDifficulty}/${workoutType}/${workoutNumber}`;
  const response = await request(url);
  return JSON.parse(response);
};
