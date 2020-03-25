const startGame = () => {
    start1();

    setTimeout(endStart1 = () => {
        document.getElementById('startLights').style.display = 'none';
    }, 3500);

    setTimeout(goSign = () => {
        document.getElementById('goDiv')
    }, 3600);

};

const start1 = () => {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('startLights').style.display = 'inline-block';
    document.getElementsByTagName('h1')[0].innerHTML = 'On Your Mark!... Get Set!...';
}
