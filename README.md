# ROCK PAPER SCISSORS

#### INSTALLATION

`git clone` this repository

Install a package manager e.g. Homebrew  
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Install Node LTS version  
`brew install node@8`

Install Angular CLI globally  
`npm install -g @angular/cli`

Install project dependencies  
`cd lumo-rock-paper-scissors`
`npm install`

---

#### TESTS
Run tests  
`ng test`

---
#### PLAY
Start app and open in default browser  
`ng serve --open`


#### MY APPROACH
I started off thinking about how I would like to play this game in a browser and how that would differ to real life. I decided the timing would have to be different, as choosing your 'weapon' in this setting is more difficult than opening your hand in a certain way.  

I opted for process of the user picking their weapon first, then clicking a button to play the game. The computer's choice is calculated when the play button is clicked, but could also be calculated when the user sets their choice (as user choice is not changeable once set).

The UI is minimalistic which I thought fitted the game's simplicity.

Issues I faced:  
    - UI - translating the real life game to a browser UI was tricky.  
    - Karma - I had trouble proxying the images and was receiving 404s in the test logs which were distracting. When I fixed this I got more errors (as my proxy config wasn't correct). Finally managed to completely fix it - read the documentation to fully understand what I was doing. I should've done that to begin with.


#### FUTURE FEATURES

- UI improvements: A countdown, perhaps with a loading spinner. My original idea was to have the rock/paper/scissor hand icons quickly cycling through during the countdown)
- Session win streaks
- Leaderboard (would require a back end for persistence)
- Local multiplayer
- Online multiplayer


