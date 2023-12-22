import { Exercise, ExerciseDetail, Routine, User, WorkoutLog } from "./utils/types";

export const exerciseList: Exercise[] = [
    {
        id: "657f57eae9630033a054dd5b",
        name: "Lat Pulldown",
        muscleGroup: "LATS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        imageUrl: "https://s3.eu-central-1.amazonaws.com/fitness-tracker-bucket/1703175329577-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    },
    {
        id: "657f57eae9630033a054dd5b",
        name: "Bicep Curl",
        muscleGroup: "BICEPS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        imageUrl: "https://s3.eu-central-1.amazonaws.com/fitness-tracker-bucket/1703175329577-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    }, 
    {
        id: "657f57eae9630033a0dddd5b",
        name: "Lat Pulldown",
        muscleGroup: "LATS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        imageUrl: "https://s3.eu-central-1.amazonaws.com/fitness-tracker-bucket/1703175329577-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    },
    {
        id: "657f579630000033a054dd5b",
        name: "Bicep Curl",
        muscleGroup: "BICEPS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        imageUrl: "https://s3.eu-central-1.amazonaws.com/fitness-tracker-bucket/1703175329577-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    }, 
    {
        id: "65777eae9630033a0dddd5b",
        name: "Lat Pulldown",
        muscleGroup: "LATS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        imageUrl: "https://s3.eu-central-1.amazonaws.com/fitness-tracker-bucket/1703175329577-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    },
    {
        id: "6969579630000033a054dd5b",
        name: "Bicep Curl",
        muscleGroup: "BICEPS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        imageUrl: "https://s3.eu-central-1.amazonaws.com/fitness-tracker-bucket/1703175329577-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    }
]

export const exerciseDetailList: ExerciseDetail[] = [
    {    
        id: "string",
        exerciseName: "Bicep Curl", 
        weight: 20,
        sets: 4, 
        reps: 10
    }, 
    {    
        id: "string2",
        exerciseName: "Hammer Curl", 
        weight: 9,
        sets: 3, 
        reps: 12
    }, 
    {    
        id: "string3",
        exerciseName: "Lat Pulldown", 
        weight: 35,
        sets: 3, 
        reps: 12
    }
]

export const routineList: Routine[] = [
    {
        id: "pull_day_12", 
        name: "Pull day", 
        exercises: [
            {    
                id: "exercise_178",
                exerciseName: "Bicep Curl", 
                weight: 20,
                sets: 4, 
                reps: 10
            }, 
            {    
                id: "exercise_179",
                exerciseName: "Hammer Curl", 
                weight: 9,
                sets: 3, 
                reps: 12
            }, 
            {    
                id: "exercise_189",
                exerciseName: "Lat Pulldown", 
                weight: 35,
                sets: 3, 
                reps: 12
            }
        ]
    }, 
    {
        "id": "push_day_123",
        "name": "Push day",
        "exercises": [
          {
            "id": "exercise_456",
            "exerciseName": "Bench Press",
            "weight": 135,
            "sets": 4,
            "reps": 8
          },
          {
            "id": "exercise_789",
            "exerciseName": "Overhead Press",
            "weight": 95,
            "sets": 3,
            "reps": 10
          },
          {
            "id": "exercise_234",
            "exerciseName": "Tricep Dips",
            "weight": 0,
            "sets": 3,
            "reps": 12
          },
          {
            "id": "exercise_466",
            "exerciseName": "Bench Press",
            "weight": 135,
            "sets": 4,
            "reps": 8
          },
          {
            "id": "exercise_779",
            "exerciseName": "Overhead Press",
            "weight": 95,
            "sets": 3,
            "reps": 10
          },
          {
            "id": "exercise_232",
            "exerciseName": "Tricep Dips",
            "weight": 0,
            "sets": 3,
            "reps": 12
          },
        ]
      }, 
      {
        "id": "legs_day_789",
        "name": "Legs day",
        "exercises": [
          {
            "id": "exercise_890",
            "exerciseName": "Squats",
            "weight": 185,
            "sets": 4,
            "reps": 8
          },
          {
            "id": "exercise_123",
            "exerciseName": "Leg Press",
            "weight": 270,
            "sets": 3,
            "reps": 10
          },
          {
            "id": "exercise_456",
            "exerciseName": "Calf Raises",
            "weight": 50,
            "sets": 3,
            "reps": 15
          }
        ]
      },
      {
        "id": "shoulder_day_987",
        "name": "Shoulder day",
        "exercises": [
          {
            "id": "exercise_654",
            "exerciseName": "Military Press",
            "weight": 105,
            "sets": 4,
            "reps": 8
          },
          {
            "id": "exercise_321",
            "exerciseName": "Lateral Raises",
            "weight": 15,
            "sets": 3,
            "reps": 12
          },
          {
            "id": "exercise_876",
            "exerciseName": "Shrugs",
            "weight": 60,
            "sets": 3,
            "reps": 12
          }
        ]
      },
      {
        "id": "back_day_876",
        "name": "Back day",
        "exercises": [
          {
            "id": "exercise_654",
            "exerciseName": "Pull-Ups",
            "weight": 0,
            "sets": 4,
            "reps": 8
          },
          {
            "id": "exercise_321",
            "exerciseName": "Barbell Rows",
            "weight": 95,
            "sets": 3,
            "reps": 10
          },
          {
            "id": "exercise_987",
            "exerciseName": "Hyperextensions",
            "weight": 0,
            "sets": 3,
            "reps": 15
          }
        ]
      }
]

export const user: User = {
  id: "user_123",
  firstName: "John",
  lastName: "Doe",
  email: 'johndoe@gmail.com',
  password: 'password'
}

export const workoutLogsList: WorkoutLog[] = [
  {
    id: "workoutlog_123",
    date: "2023.1.2", 
    exercises: [
      {
        "id": "exercise_654",
        "exerciseName": "Military Press",
        "weight": 90,
        "sets": 4,
        "reps": 8
      },
      {
        "id": "exercise_321",
        "exerciseName": "Lateral Raises",
        "weight": 5,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "exercise_876",
        "exerciseName": "Shrugs",
        "weight": 45,
        "sets": 3,
        "reps": 12
      }
    ],
    userId: "userid_123"
  }, 
  {
    id: "workoutlog_123",
    date: "2023.10.10", 
    exercises: [
      {
        "id": "exercise_654",
        "exerciseName": "Military Press",
        "weight": 45,
        "sets": 4,
        "reps": 8
      },
      {
        "id": "exercise_321",
        "exerciseName": "Lateral Raises",
        "weight": 15,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "exercise_876",
        "exerciseName": "Shrugs",
        "weight": 60,
        "sets": 3,
        "reps": 12
      }
    ],
    userId: "userid_123"
  },
  {
    id: "workoutlog_123",
    date: "2023.11.22", 
    exercises: [
      {
        "id": "exercise_654",
        "exerciseName": "Military Press",
        "weight": 105,
        "sets": 4,
        "reps": 8
      },
      {
        "id": "exercise_321",
        "exerciseName": "Lateral Raises",
        "weight": 15,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "exercise_876",
        "exerciseName": "Shrugs",
        "weight": 60,
        "sets": 3,
        "reps": 12
      }
    ],
    userId: "userid_123"
  },
  {
    id: "workoutlog_123",
    date: "2023.11.22", 
    exercises: [
      {
        "id": "exercise_654",
        "exerciseName": "Military Press",
        "weight": 135,
        "sets": 4,
        "reps": 8
      },
      {
        "id": "exercise_321",
        "exerciseName": "Lateral Raises",
        "weight": 20,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "exercise_876",
        "exerciseName": "Shrugs",
        "weight": 85,
        "sets": 3,
        "reps": 12
      }
    ],
    userId: "userid_123"
  },
  {
    id: "workoutlog_123",
    date: "2023.11.22", 
    exercises: [
      {
        "id": "exercise_654",
        "exerciseName": "Military Press",
        "weight": 105,
        "sets": 4,
        "reps": 8
      },
      {
        "id": "exercise_321",
        "exerciseName": "Lateral Raises",
        "weight": 15,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "exercise_876",
        "exerciseName": "Shrugs",
        "weight": 60,
        "sets": 3,
        "reps": 12
      }
    ],
    userId: "userid_123"
  },
  {
    id: "workoutlog_123",
    date: "2023.11.22", 
    exercises: [
      {
        "id": "exercise_654",
        "exerciseName": "Military Press",
        "weight": 135,
        "sets": 4,
        "reps": 8
      },
      {
        "id": "exercise_321",
        "exerciseName": "Lateral Raises",
        "weight": 20,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "exercise_876",
        "exerciseName": "Shrugs",
        "weight": 85,
        "sets": 3,
        "reps": 12
      }
    ],
    userId: "userid_123"
  },
  {
    id: "workoutlog_123",
    date: "2023.11.22", 
    exercises: [
      {
        "id": "exercise_654",
        "exerciseName": "Military Press",
        "weight": 105,
        "sets": 4,
        "reps": 8
      },
      {
        "id": "exercise_321",
        "exerciseName": "Lateral Raises",
        "weight": 15,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "exercise_876",
        "exerciseName": "Shrugs",
        "weight": 60,
        "sets": 3,
        "reps": 12
      }
    ],
    userId: "userid_123"
  },
  {
    id: "workoutlog_123",
    date: "2023.11.22", 
    exercises: [
      {
        "id": "exercise_654",
        "exerciseName": "Military Press",
        "weight": 135,
        "sets": 4,
        "reps": 8
      },
      {
        "id": "exercise_321",
        "exerciseName": "Lateral Raises",
        "weight": 20,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "exercise_876",
        "exerciseName": "Shrugs",
        "weight": 85,
        "sets": 3,
        "reps": 12
      }
    ],
    userId: "userid_123"
  }
]