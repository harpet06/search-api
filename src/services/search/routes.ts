import { Request, Response } from "express";
import { getAllWorkouts, generateWorkout } from "./SearchController";
import { checkSearchParams } from "../../middleware/checks";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("An example of running express in a lambda. Hit dev/workouts or dev/custom/workout?workoutDifficulty=beginner&workoutType=both&workoutNumber=3 for more");
    }
  },
  {
    path: "/workouts",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const result = await getAllWorkouts();
      res.status(200).send(result);
    }
  },
  {
    path: "/custom/workout",
    method: "get",
    handler: [
      checkSearchParams,
      async ({ query }: Request, res: Response) => {
        const result = await generateWorkout(
          query.workoutDifficulty,
          query.workoutType,
          query.workoutNumber
        );
        res.status(200).send(result);
      }
    ]
  }
];
