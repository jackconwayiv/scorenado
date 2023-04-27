const game = {
  id: 1,
  userId: 1, //foreign key
  playerName1,
  playerName2,
  playerName3,
  playerName4,
  playerName5,
  playerName6,
  playerName7,
  playerName8,
  templateId: 1, //foreign key //does this appear or get replaced by object
  template: {
    id: 1,
    name: "game",
    scoredByRounds: false,
    lowScoreWins: false,
    categories: [
      {
        id: 1,
        name: "category",
        description: "how you earn points for this",
        templateId: 1,
        isScored: true,
        isManualTotal: false,
        scores: {
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
      },
      {
        id: 2,
        name: "category",
        description: "how you earn points for this",
        templateId: 1,
        isScored: true,
        manualTotal: false,
      },
    ],
  },
};
