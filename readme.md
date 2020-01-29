## Typescript + Express API setup

This is a mess around using Express inside of a lambda to hit different API endpoints. 

This project is written in typescript and node.

Example endpoints:

Example of "/"

https://9t0fcmzhd4.execute-api.us-east-1.amazonaws.com/dev/

Bring back all workouts "/workouts"

https://9t0fcmzhd4.execute-api.us-east-1.amazonaws.com/dev/workouts

Generate a workout 

https://9t0fcmzhd4.execute-api.us-east-1.amazonaws.com/dev/custom/workout?workoutDifficulty=beginner&workoutType=both&workoutNumber=3


There are about 5000 dependencies, that almost certainly need tidying up