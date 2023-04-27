const game = {
  id: 1,
  // userId: 1, //foreign key
  playerName1,
  playerName2,
  playerName3,
  playerName4,
  playerName5,
  playerName6,
  playerName7,
  playerName8,
  createdAt,
  updatedAt,
  templateId: 1, //foreign key //does this appear or get replaced by object
  template: {
    id: 1,
    name: "game",
    scoredByRounds: false,
    lowScoreWins: false,
    createdAt,
    updatedAt,
    categories: [
      {
        id: 1,
        name: "category",
        description: "how you earn points for this",
        isScored: true,
        isManualTotal: false,
        createdAt,
        updatedAt,
        templateId: 1,
        scores: [
          {
            id: 1,
            categoryId, //fk
            gameId, //fk
            value1,
            value2,
            value3,
            value4,
            value5,
            value6,
            value7,
            value8,
          },
        ],
      },
      {
        id: 2,
        name: "category",
        description: "how you earn points for this",
        isScored: true,
        manualTotal: false,
        createdAt,
        updatedAt,
        templateId: 1,
        scores: [],
      },
    ],
  },
  scores: [],
};
