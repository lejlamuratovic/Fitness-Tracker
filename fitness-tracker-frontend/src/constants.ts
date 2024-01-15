import { Exercise, ExerciseDetail, Routine, User, WorkoutLog } from "./utils/types";

export const exerciseList: Exercise[] = [
    {
        id: "ex_lat_pulldown_1",
        name: "Lat Pulldown",
        muscleGroup: "LATS",
        description: "A compound exercise targeting the latissimus dorsi.",
        imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    },
    {
        id: "ex_bicep_curl_1",
        name: "Bicep Curl",
        muscleGroup: "BICEPS",
        description: "A standard bicep curl using dumbbells.",
        imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    },
    {
        id: "ex_tricep_dip_1",
        name: "Tricep Dip",
        muscleGroup: "TRICEPS",
        description: "Tricep dips on parallel bars or a bench.",
        imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    },
    {
      id: "ex_lat_pulldown_1",
      name: "Lat Pulldown",
      muscleGroup: "LATS",
      description: "Tricep dips on parallel bars or a bench.",
      imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    },
    {
      id: "ex_leg_press_1",
      name: "Leg Press",
      muscleGroup: "LEGS",
      description: "Tricep dips on parallel bars or a bench.",
      imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    },
    {
        id: "ex_lat_pulldown_2",
        name: "Lat Pulldown",
        muscleGroup: "LATS",
        description: "A compound exercise targeting the latissimus dorsi.",
        imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    },
    {
        id: "ex_bicep_curl_2",
        name: "Bicep Curl",
        muscleGroup: "BICEPS",
        description: "A standard bicep curl using dumbbells.",
        imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    },
    {
        id: "ex_tricep_dip_2",
        name: "Tricep Dip",
        muscleGroup: "TRICEPS",
        description: "Tricep dips on parallel bars or a bench.",
        imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    },
    {
      id: "ex_lat_pulldown_2",
      name: "Lat Pulldown",
      muscleGroup: "LATS",
      description: "Tricep dips on parallel bars or a bench.",
      imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    },
    {
      id: "ex_leg_press_2",
      name: "Leg Press",
      muscleGroup: "LEGS",
      description: "Tricep dips on parallel bars or a bench.",
      imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
    },
    {
      id: "ex_lat_pulldown_2",
      name: "Lat Pulldown",
      muscleGroup: "LATS",
      description: "A compound exercise targeting the latissimus dorsi.",
      imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
  },
  {
      id: "ex_bicep_curl_2",
      name: "Bicep Curl",
      muscleGroup: "BICEPS",
      description: "A standard bicep curl using dumbbells.",
      imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
  },
  {
      id: "ex_tricep_dip_2",
      name: "Tricep Dip",
      muscleGroup: "TRICEPS",
      description: "Tricep dips on parallel bars or a bench.",
      imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
  },
  {
    id: "ex_lat_pulldown_2",
    name: "Lat Pulldown",
    muscleGroup: "LATS",
    description: "Tricep dips on parallel bars or a bench.",
    imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
  },
  {
    id: "ex_leg_press_2",
    name: "Leg Press",
    muscleGroup: "LEGS",
    description: "Tricep dips on parallel bars or a bench.",
    imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
  },
  {
    id: "ex_lat_pulldown_2",
    name: "Lat Pulldown",
    muscleGroup: "LATS",
    description: "A compound exercise targeting the latissimus dorsi.",
    imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
},
{
    id: "ex_bicep_curl_2",
    name: "Bicep Curl",
    muscleGroup: "BICEPS",
    description: "A standard bicep curl using dumbbells.",
    imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
},
{
    id: "ex_tricep_dip_2",
    name: "Tricep Dip",
    muscleGroup: "TRICEPS",
    description: "Tricep dips on parallel bars or a bench.",
    imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
},
{
  id: "ex_lat_pulldown_2",
  name: "Lat Pulldown",
  muscleGroup: "LATS",
  description: "Tricep dips on parallel bars or a bench.",
  imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
},
{
  id: "ex_leg_press_2",
  name: "Leg Press",
  muscleGroup: "LEGS",
  description: "Tricep dips on parallel bars or a bench.",
  imageUrl: "https://fitness-tracker-bucket.s3.eu-central-1.amazonaws.com/1703192283963-062f66e4986e4035892db9ae59999df2IfulbDgKAtYMjRG5-0.png"
},
];

export const exerciseDetailList: ExerciseDetail[] = [
    {    
        id: "detail_1",
        exerciseName: "Bicep Curl", 
        weight: 20,
        sets: 4, 
        reps: 10
    },
    {
        id: "detail_2",
        exerciseName: "Tricep Dip",
        weight: 0,
        sets: 3,
        reps: 12
    },
    {
      id: "detail_3",
      exerciseName: "Lat Pulldown",
      weight: 20,
      sets: 3,
      reps: 12
  },
];

export const routineList: Routine[] = [
  {
    "id": "routine_1",
    "name": "Upper Body Workout",
    "date": "2024-01-14",
    "exercises": [
      {
        "id": "routine_ex_1",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_2",
        "exerciseName": "Tricep Dip",
        "weight": 0,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "routine_ex_3",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_4",
        "exerciseName": "Lat Pulldown",
        "weight": 0,
        "sets": 3,
        "reps": 12
      }
    ]
  },
  {
    "id": "routine_1",
    "name": "Upper Body Workout",
    "date": "2024-01-14",
    "exercises": [
      {
        "id": "routine_ex_1",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_2",
        "exerciseName": "Tricep Dip",
        "weight": 0,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "routine_ex_3",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_4",
        "exerciseName": "Lat Pulldown",
        "weight": 0,
        "sets": 3,
        "reps": 12
      }
    ]
  },
  {
    "id": "routine_1",
    "name": "Upper Body Workout",
    "date": "2024-01-14",
    "exercises": [
      {
        "id": "routine_ex_1",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_2",
        "exerciseName": "Tricep Dip",
        "weight": 0,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "routine_ex_3",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_4",
        "exerciseName": "Lat Pulldown",
        "weight": 0,
        "sets": 3,
        "reps": 12
      }
    ]
  },
  {
    "id": "routine_1",
    "name": "Upper Body Workout",
    "date": "2024-01-14",
    "exercises": [
      {
        "id": "routine_ex_1",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_2",
        "exerciseName": "Tricep Dip",
        "weight": 0,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "routine_ex_3",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_4",
        "exerciseName": "Lat Pulldown",
        "weight": 0,
        "sets": 3,
        "reps": 12
      }
    ]
  },
  {
    "id": "routine_1",
    "name": "Upper Body Workout",
    "date": "2024-01-14",
    "exercises": [
      {
        "id": "routine_ex_1",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_2",
        "exerciseName": "Tricep Dip",
        "weight": 0,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "routine_ex_3",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_4",
        "exerciseName": "Lat Pulldown",
        "weight": 0,
        "sets": 3,
        "reps": 12
      }
    ]
  },
  {
    "id": "routine_1",
    "name": "Upper Body Workout",
    "date": "2024-01-14",
    "exercises": [
      {
        "id": "routine_ex_1",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_2",
        "exerciseName": "Tricep Dip",
        "weight": 0,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "routine_ex_3",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_4",
        "exerciseName": "Lat Pulldown",
        "weight": 0,
        "sets": 3,
        "reps": 12
      }
    ]
  },
  {
    "id": "routine_1",
    "name": "A Upper Body Workout",
    "date": "2024-01-14",
    "exercises": [
      {
        "id": "routine_ex_1",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_2",
        "exerciseName": "Tricep Dip",
        "weight": 0,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "routine_ex_3",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_4",
        "exerciseName": "Lat Pulldown",
        "weight": 0,
        "sets": 3,
        "reps": 12
      }
    ]
  },
  {
    "id": "routine_1",
    "name": "B Upper Body Workout",
    "date": "2024-01-14",
    "exercises": [
      {
        "id": "routine_ex_1",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_2",
        "exerciseName": "Tricep Dip",
        "weight": 0,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "routine_ex_3",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_4",
        "exerciseName": "Lat Pulldown",
        "weight": 0,
        "sets": 3,
        "reps": 12
      }
    ]
  },
  {
    "id": "routine_1",
    "name": "C Upper Body Workout",
    "date": "2024-01-14",
    "exercises": [
      {
        "id": "routine_ex_1",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_2",
        "exerciseName": "Tricep Dip",
        "weight": 0,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "routine_ex_3",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_4",
        "exerciseName": "Lat Pulldown",
        "weight": 0,
        "sets": 3,
        "reps": 12
      }
    ]
  },
  {
    "id": "routine_1",
    "name": "Upper Body Workout",
    "date": "2024-01-14",
    "exercises": [
      {
        "id": "routine_ex_1",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_2",
        "exerciseName": "Tricep Dip",
        "weight": 0,
        "sets": 3,
        "reps": 12
      },
      {
        "id": "routine_ex_3",
        "exerciseName": "Bicep Curl",
        "weight": 20,
        "sets": 4,
        "reps": 10
      },
      {
        "id": "routine_ex_4",
        "exerciseName": "Lat Pulldown",
        "weight": 0,
        "sets": 3,
        "reps": 12
      }
    ]
  },
];

export const user: User = {
    id: "user_123",
    firstName: "John",
    lastName: "Doe",
    email: 'johndoe@gmail.com',
    password: 'password123'
};

export const workoutLogsList: WorkoutLog[] = [
    {
        id: "workoutlog_1",
        date: "2023.1.2", 
        exercises: [
            {
                id: "ex_bicep_curl_1",
                exerciseName: "Bicep Curl",
                weight: 25,
                sets: 4,
                reps: 10
            },
            {
                id: "ex_tricep_dip_1",
                exerciseName: "Tricep Dip",
                weight: 0,
                sets: 3,
                reps: 12
            },
            {
              id: "routine_ex_4",
              exerciseName: "Lat Pulldown",
              weight: 0,
              sets: 3,
              reps: 12
          }, 
          {
            id: "routine_ex_4",
            exerciseName: "Lat Pulldown",
            weight: 0,
            sets: 3,
            reps: 12
          }, 
          {
            id: "routine_ex_5",
            exerciseName: "Leg Press",
            weight: 100,
            sets: 3,
            reps: 12
          }, 
        ],
        userId: "userid_123"
    },
    {
        id: "workoutlog_2",
        date: "2023.1.2", 
        exercises: [
            {
              id: "routine_ex_4",
              exerciseName: "Lat Pulldown",
              weight: 0,
              sets: 3,
              reps: 12
          }, 
          {
            id: "routine_ex_4",
            exerciseName: "Lat Pulldown",
            weight: 0,
            sets: 3,
            reps: 12
          }, 
          {
            id: "routine_ex_5",
            exerciseName: "Leg Press",
            weight: 100,
            sets: 3,
            reps: 12
          }, 
        ],
        userId: "userid_123"
    },
    {
      id: "workoutlog_1",
      date: "2023.1.2", 
      exercises: [
          {
              id: "ex_bicep_curl_1",
              exerciseName: "Bicep Curl",
              weight: 25,
              sets: 4,
              reps: 10
          },
          {
              id: "ex_tricep_dip_1",
              exerciseName: "Tricep Dip",
              weight: 0,
              sets: 3,
              reps: 12
          },
          {
            id: "routine_ex_4",
            exerciseName: "Lat Pulldown",
            weight: 0,
            sets: 3,
            reps: 12
        }, 
        {
          id: "routine_ex_4",
          exerciseName: "Lat Pulldown",
          weight: 0,
          sets: 3,
          reps: 12
        }, 
        {
          id: "routine_ex_5",
          exerciseName: "Leg Press",
          weight: 100,
          sets: 3,
          reps: 12
        }, 
      ],
      userId: "userid_123"
  },
  {
      id: "workoutlog_2",
      date: "2023.1.2", 
      exercises: [
          {
            id: "routine_ex_4",
            exerciseName: "Lat Pulldown",
            weight: 0,
            sets: 3,
            reps: 12
        }, 
        {
          id: "routine_ex_4",
          exerciseName: "Lat Pulldown",
          weight: 0,
          sets: 3,
          reps: 12
        }, 
        {
          id: "routine_ex_5",
          exerciseName: "Leg Press",
          weight: 100,
          sets: 3,
          reps: 12
        }, 
      ],
      userId: "userid_123"
  },
  {
    id: "workoutlog_1",
    date: "2023.1.2", 
    exercises: [
        {
            id: "ex_bicep_curl_1",
            exerciseName: "Bicep Curl",
            weight: 25,
            sets: 4,
            reps: 10
        },
        {
            id: "ex_tricep_dip_1",
            exerciseName: "Tricep Dip",
            weight: 0,
            sets: 3,
            reps: 12
        },
        {
          id: "routine_ex_4",
          exerciseName: "Lat Pulldown",
          weight: 0,
          sets: 3,
          reps: 12
      }, 
      {
        id: "routine_ex_4",
        exerciseName: "Lat Pulldown",
        weight: 0,
        sets: 3,
        reps: 12
      }, 
      {
        id: "routine_ex_5",
        exerciseName: "Leg Press",
        weight: 100,
        sets: 3,
        reps: 12
      }, 
    ],
    userId: "userid_123"
},
{
    id: "workoutlog_2",
    date: "2023.1.2", 
    exercises: [
        {
          id: "routine_ex_4",
          exerciseName: "Lat Pulldown",
          weight: 0,
          sets: 3,
          reps: 12
      }, 
      {
        id: "routine_ex_4",
        exerciseName: "Lat Pulldown",
        weight: 0,
        sets: 3,
        reps: 12
      }, 
      {
        id: "routine_ex_5",
        exerciseName: "Leg Press",
        weight: 100,
        sets: 3,
        reps: 12
      }, 
    ],
    userId: "userid_123"
},
{
  id: "workoutlog_1",
  date: "2023.1.2", 
  exercises: [
      {
          id: "ex_bicep_curl_1",
          exerciseName: "Bicep Curl",
          weight: 25,
          sets: 4,
          reps: 10
      },
      {
          id: "ex_tricep_dip_1",
          exerciseName: "Tricep Dip",
          weight: 0,
          sets: 3,
          reps: 12
      },
      {
        id: "routine_ex_4",
        exerciseName: "Lat Pulldown",
        weight: 0,
        sets: 3,
        reps: 12
    }, 
    {
      id: "routine_ex_4",
      exerciseName: "Lat Pulldown",
      weight: 0,
      sets: 3,
      reps: 12
    }, 
    {
      id: "routine_ex_5",
      exerciseName: "Leg Press",
      weight: 100,
      sets: 3,
      reps: 12
    }, 
  ],
  userId: "userid_123"
},
{
  id: "workoutlog_2",
  date: "2023.1.2", 
  exercises: [
      {
        id: "routine_ex_4",
        exerciseName: "Lat Pulldown",
        weight: 0,
        sets: 3,
        reps: 12
    }, 
    {
      id: "routine_ex_4",
      exerciseName: "Lat Pulldown",
      weight: 0,
      sets: 3,
      reps: 12
    }, 
    {
      id: "routine_ex_5",
      exerciseName: "Leg Press",
      weight: 100,
      sets: 3,
      reps: 12
    }, 
  ],
  userId: "userid_123"
},
{
  id: "workoutlog_1",
  date: "2023.1.2", 
  exercises: [
      {
          id: "ex_bicep_curl_1",
          exerciseName: "Bicep Curl",
          weight: 25,
          sets: 4,
          reps: 10
      },
      {
          id: "ex_tricep_dip_1",
          exerciseName: "Tricep Dip",
          weight: 0,
          sets: 3,
          reps: 12
      },
      {
        id: "routine_ex_4",
        exerciseName: "Lat Pulldown",
        weight: 0,
        sets: 3,
        reps: 12
    }, 
    {
      id: "routine_ex_4",
      exerciseName: "Lat Pulldown",
      weight: 0,
      sets: 3,
      reps: 12
    }, 
    {
      id: "routine_ex_5",
      exerciseName: "Leg Press",
      weight: 100,
      sets: 3,
      reps: 12
    }, 
  ],
  userId: "userid_123"
},
{
  id: "workoutlog_2",
  date: "2023.1.2", 
  exercises: [
      {
        id: "routine_ex_4",
        exerciseName: "Lat Pulldown",
        weight: 0,
        sets: 3,
        reps: 12
    }, 
    {
      id: "routine_ex_4",
      exerciseName: "Lat Pulldown",
      weight: 0,
      sets: 3,
      reps: 12
    }, 
    {
      id: "routine_ex_5",
      exerciseName: "Leg Press",
      weight: 100,
      sets: 3,
      reps: 12
    }, 
  ],
  userId: "userid_123"
},
{
  id: "workoutlog_1",
  date: "2023.1.2", 
  exercises: [
      {
          id: "ex_bicep_curl_1",
          exerciseName: "Bicep Curl",
          weight: 25,
          sets: 4,
          reps: 10
      },
      {
          id: "ex_tricep_dip_1",
          exerciseName: "Tricep Dip",
          weight: 0,
          sets: 3,
          reps: 12
      },
      {
        id: "routine_ex_4",
        exerciseName: "Lat Pulldown",
        weight: 0,
        sets: 3,
        reps: 12
    }, 
    {
      id: "routine_ex_4",
      exerciseName: "Lat Pulldown",
      weight: 0,
      sets: 3,
      reps: 12
    }, 
    {
      id: "routine_ex_5",
      exerciseName: "Leg Press",
      weight: 100,
      sets: 3,
      reps: 12
    }, 
  ],
  userId: "userid_123"
},
{
  id: "workoutlog_2",
  date: "2023.1.2", 
  exercises: [
      {
        id: "routine_ex_4",
        exerciseName: "Lat Pulldown",
        weight: 0,
        sets: 3,
        reps: 12
    }, 
    {
      id: "routine_ex_4",
      exerciseName: "Lat Pulldown",
      weight: 0,
      sets: 3,
      reps: 12
    }, 
    {
      id: "routine_ex_5",
      exerciseName: "Leg Press",
      weight: 100,
      sets: 3,
      reps: 12
    }, 
  ],
  userId: "userid_123"
},
{
  id: "workoutlog_1",
  date: "2023.1.2", 
  exercises: [
      {
          id: "ex_bicep_curl_1",
          exerciseName: "Bicep Curl",
          weight: 25,
          sets: 4,
          reps: 10
      },
      {
          id: "ex_tricep_dip_1",
          exerciseName: "Tricep Dip",
          weight: 0,
          sets: 3,
          reps: 12
      },
      {
        id: "routine_ex_4",
        exerciseName: "Lat Pulldown",
        weight: 0,
        sets: 3,
        reps: 12
    }, 
    {
      id: "routine_ex_4",
      exerciseName: "Lat Pulldown",
      weight: 0,
      sets: 3,
      reps: 12
    }, 
    {
      id: "routine_ex_5",
      exerciseName: "Leg Press",
      weight: 100,
      sets: 3,
      reps: 12
    }, 
  ],
  userId: "userid_123"
},
{
  id: "workoutlog_2",
  date: "2023.1.2", 
  exercises: [
      {
        id: "routine_ex_4",
        exerciseName: "Lat Pulldown",
        weight: 0,
        sets: 3,
        reps: 12
    }, 
    {
      id: "routine_ex_4",
      exerciseName: "Lat Pulldown",
      weight: 0,
      sets: 3,
      reps: 12
    }, 
    {
      id: "routine_ex_5",
      exerciseName: "Leg Press",
      weight: 100,
      sets: 3,
      reps: 12
    }, 
  ],
  userId: "userid_123"
},
{
  id: "workoutlog_1",
  date: "2023.1.2", 
  exercises: [
      {
          id: "ex_bicep_curl_1",
          exerciseName: "Bicep Curl",
          weight: 25,
          sets: 4,
          reps: 10
      },
      {
          id: "ex_tricep_dip_1",
          exerciseName: "Tricep Dip",
          weight: 0,
          sets: 3,
          reps: 12
      },
      {
        id: "routine_ex_4",
        exerciseName: "Lat Pulldown",
        weight: 0,
        sets: 3,
        reps: 12
    }, 
    {
      id: "routine_ex_4",
      exerciseName: "Lat Pulldown",
      weight: 0,
      sets: 3,
      reps: 12
    }, 
    {
      id: "routine_ex_5",
      exerciseName: "Leg Press",
      weight: 100,
      sets: 3,
      reps: 12
    }, 
  ],
  userId: "userid_123"
},
{
  id: "workoutlog_2",
  date: "2023.1.2", 
  exercises: [
      {
        id: "routine_ex_4",
        exerciseName: "Lat Pulldown",
        weight: 0,
        sets: 3,
        reps: 12
    }, 
    {
      id: "routine_ex_4",
      exerciseName: "Lat Pulldown",
      weight: 0,
      sets: 3,
      reps: 12
    }, 
    {
      id: "routine_ex_5",
      exerciseName: "Leg Press",
      weight: 100,
      sets: 3,
      reps: 12
    }, 
  ],
  userId: "userid_123"
},
];

export const userId = "65a5a16205c44614c7e49b51";

export const BASE_URL = 'http://localhost:8080/api'