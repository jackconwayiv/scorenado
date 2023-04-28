export interface Game {
  id: number;
  playerName1: string;
  playerName2: string | null;
  playerName3: string | null;
  playerName4: string | null;
  playerName5: string | null;
  playerName6: string | null;
  playerName7: string | null;
  playerName8: string | null;
  createdAt: Date;
  updatedAt: Date;
  templateId: number;
  template: Template;
}
export interface Score {
  id: number;
  value1: number;
  value2: number | null;
  value3: number | null;
  value4: number | null;
  value5: number | null;
  value6: number | null;
  value7: number | null;
  value8: number | null;
  createdAt: Date;
  updatedAt: Date;
  gameId: number;
  categoryId: number;
  game: Game;
}
export interface Category {
  id: number;
  name: string;
  description: string | null;
  isScored: boolean;
  isManualTotal: boolean;
  createdAt: Date;
  updatedAt: Date;
  templateId: number;
  scores: Array<Score>;
}
export interface Template {
  id: number;
  name: string;
  scoredByRounds: boolean;
  lowScoreWins: boolean;
  createdAt: Date;
  updatedAt: Date;
  categories: Array<Category>;
}
