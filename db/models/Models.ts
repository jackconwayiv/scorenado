type Template = {
  id: number;
  name: string;
  scoredByRounds: boolean;
  lowScoreWins: boolean;
};

type Category = {
  id: number;
  name: string;
  description?: string;
  isScored: boolean;
  isManualTotal: boolean;
  templateId: number;
};

type Game = {
  id: number;
  playerName1: string;
  playerName2?: string;
  playerName3?: string;
  playerName4?: string;
  playerName5?: string;
  playerName6?: string;
  playerName7?: string;
  playerName8?: string;
  updatedAt: number; //maybe
  templateId: number;
};

type Score = {
  id: number;
  value1: number;
  value2?: number;
  value3?: number;
  value4?: number;
  value5?: number;
  value6?: number;
  value7?: number;
  value8?: number;
  categoryId: number;
  gameId: number;
};

/*
const myCategory = db.getCategory<Category>(func)

*/