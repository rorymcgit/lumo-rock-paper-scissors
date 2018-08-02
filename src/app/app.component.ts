import { Component } from '@angular/core';

type Move = 'rock' | 'paper' | 'scissors';

type Result = 'user' | 'computer' | 'draw';

interface WinningMoves {
  rock: Move;
  paper: Move;
  scissors: Move;
}

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

    // DEBUG
    console.log('CPU CHOSE: ', this.choices[randomIndex]);

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
}
