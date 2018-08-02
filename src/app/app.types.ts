export type Move = 'rock' | 'paper' | 'scissors';

export type Result = 'user' | 'computer' | 'draw';

export interface WinningMoves {
  rock: Move;
  paper: Move;
  scissors: Move;
}
