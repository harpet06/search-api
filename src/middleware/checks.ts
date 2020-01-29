import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors";

export const checkSearchParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ((!req.query.workoutDifficulty || !req.query.workoutType || !req.query.workoutNumber)) {
    throw new HTTP400Error("Missing paramter, please supply a workout difficulty, type and number");
  } else {
    next();
  }
};
