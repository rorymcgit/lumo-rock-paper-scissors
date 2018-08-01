import { Component } from '@angular/core';

type Move = 'rock' | 'paper' | 'scissors';

interface WinningMoves {
  rock: Move;
  paper: Move;
  scissors: Move;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rock-Paper-Scissors';
  userChoice: Move;
  choices: Move[];
  winningMoves: WinningMoves;

  constructor() {
    this.choices = ['rock', 'paper', 'scissors'];

    this.winningMoves = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };
  }

  setUserChoice(m: Move) {
    // DEBUG
    console.log('clicked: ', m);

    this.userChoice = m;
  }

  setComputerChoice(): Move {
    const randomIndex = Math.floor(Math.random() * 3);

    // DEBUG
    console.log('computer chose: ', this.choices[randomIndex]);

    return this.choices[randomIndex];
  }
}
