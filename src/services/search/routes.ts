import { Request, Response } from "express";
import { getAllWorkouts, generateWorkout } from "./SearchController";
import { checkSearchParams } from "../../middleware/checks";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("Two endpoints /workouts for all workouts and another one tbc");
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
