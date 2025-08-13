const exercises = [
  {
    id: "shoulder_abduction",
    name: "Shoulder Abduction Rainbow",
    description: "Raise both arms out to the side and touch the stars with your wrists!",
    criteria: "shoulderAbduction",
    repetitions_target: 6,
    mediapipe_landmarks: [11, 13, 15, 12, 14, 16] // left and right shoulder, elbow, wrist
  },
  {
    id: "weight_shifting",
    name: "Weight Shifting",
    description: "Shift your weight slowly from left to right foot while standing.",
    criteria: "weightShifting",
    repetitions_target: 10,
    mediapipe_landmarks: [23, 24, 27, 28] // hips and ankles
  }
];
