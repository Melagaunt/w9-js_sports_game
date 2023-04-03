# A Simple JavaScript Sports Game
Using what we know about HTML, CSS, and JavaScript. Let's build a simple sports game. The game will have 2 teams. Each team can shoot causing the shot counter to increase. There is a random chance you may score when you shoot. If you score, the score should increase for the team. If the reset button is clicked, each team's shot count and score should be reset to 0 and the reset counter should increase by 1. There are some bonus features you can add as well like playing a sound when shooting and scoring. 

# Getting Started

1. Create the following project structure

```
    js_sports_game/
    ├── index.html
    └── assets/
        ├── css/
        |   └── style.css
        └── javascript/
            └── game.js
     
```

2. Add the following HTML to `index.html`.

```html
<!DOCTYPE html>
<html>

<head>
    <title>JS Game Challenge</title>
    <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>
    <div>
        <h1>My JS Game</h1>
        <div id="reset-container">
            <button id="reset-button">RESET</button><br>
            NUMBER OF RESETS: <span id="num-resets">0</span>
        </div>
        <div class="clear"></div>
        <div class="left">
            <h2>
                Team 1
            </h2>
            <div class="goals">
                SHOTS TAKEN: <span id="teamone-numshots">0</span><br>
                GOALS: <span id="teamone-numgoals">0</span>
            </div>
            <div>
                <button id="teamone-shoot-button">SHOOT</button>
            </div>
        </div>
        <div class="right">
            <h2>
                Team 2
            </h2>
            <div class="goals">
                SHOTS TAKEN: <span id="teamtwo-numshots">0</span><br>
                GOALS: <span id="teamtwo-numgoals">0</span>
            </div>
            <div>
                <button id="teamtwo-shoot-button">SHOOT</button>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</body>

</html>
```

3. Add the following CSS to `style.css`:

```css
.hide {
    display: none;
}

.left {
    float: left;
}

.right {
    float: right;
}

.clear {
    clear: both;
}

#reset-container, h1 {
    text-align: center;
}
```


4. Link your JavaScript file right above your closing `</body>` tag using the `<script>` tag

```html
  
  ...

  <!-- Link your JS file using the script tag -->
  <script src="./assets/javascript/game.js"></script>
  </body>
</html>
```


# Game Instructions

## How should this game work?

1. Clicking either "SHOOT" button represents a shot for that team.
    - Shots should have a random chance of succeeding or failing. (Sounds like Internet research time! How do you determine a random chance in JavaScript?)
    - The number of shots taken should increase for every click of the "SHOOT" button.
    - The number of goals should only increase when the shot is successful.
2. Clicking the "RESET" button should reset all the shot and goal counters and add 1 to the number of resets.

## Bonus

1. Play a sound when someone clicks the "Shoot" button. You'll need to [read about the HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement) and how to use it in JS. You will also need to find a sound file to use.
2. Use what you know about HTML and CSS to make the page look better!
3. Upon reset, display *who* won the game.