import { Component } from '@angular/core';
import { Move, WinningMoves, Result } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rock-Paper-Scissors';
  result: Result;
  userChoice: Move;
  computerChoice: Move;
  choices: Move[] = ['rock', 'paper', 'scissors'];
  winningMoves: WinningMoves = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  private getComputerChoice(): Move {
    const randomIndex = Math.floor(Math.random() * 3);
    return this.choices[randomIndex];
  }

  private judgeMoves(): Result {
    if (this.userChoice === this.computerChoice) {
      return 'draw';
    }

    if (this.winningMoves[this.userChoice] === this.computerChoice) {
      return 'user';
    }

    return 'computer';
  }

  setUserChoice(m: Move) {
    this.userChoice = m;
  }

  playGame() {
    this.computerChoice = this.getComputerChoice();
    this.result = this.judgeMoves();
  }

  resetGame() {
    this.userChoice = null;
    this.computerChoice = null;
    this.result = null;
  }
}
