import { Component } from '@angular/core';
import { Move, WinningMoves, Result } from './app.types';

const winningMoves: WinningMoves = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rock-Paper-Scissors';
  choices: Move[];
  userChoice: Move;
  computerChoice: Move;
  result: Result;

  constructor() {
    this.choices = ['rock', 'paper', 'scissors'];
  }

  private setComputerChoice(): Move {
    const randomIndex = Math.floor(Math.random() * 3);
    return this.choices[randomIndex];
  }

  private judgeMoves(): Result {
    if (this.userChoice === this.computerChoice) {
      return 'draw';
    }

    if (winningMoves[this.userChoice] === this.computerChoice) {
      return 'user';
    }

    return 'computer';
  }

  setUserChoice(m: Move) {
    this.userChoice = m;
  }

  playGame() {
    this.computerChoice = this.setComputerChoice();
    this.result = this.judgeMoves();
  }

  resetGame() {
    this.userChoice = null;
    this.computerChoice = null;
    this.result = null;
  }
}
