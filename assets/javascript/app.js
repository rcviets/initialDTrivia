const startGame = () => {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('startLights').style.display = 'inline-block';
    document.getElementsByTagName('h1')[0].innerHTML = 'ON YOUR MARK!... GET SET!...';
};