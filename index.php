<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock, Paper, Scissors</title>

    <script src="app.js" async defer></script>
</head>
<body>
    
    <h1 id="userScore">You: 0</h1>

    <h1 id="oppScore">Opponent: 0</h1>

    <h2 id="countdownTimer"></h2>

    <button id="startBtn">Start</button><br /><br />

    <div id="options">
        <button onclick="setOption('rock')">Rock</button>
        <button onclick="setOption('paper')">Paper</button>
        <button onclick="setOption('scissors')">Scissors</button>
    </div>

    <p id="confirmedOptionText"></p>
    <p id="oppConfirmedOptionText"></p>


</body>
</html>