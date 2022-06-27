document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird');
  const gameDisplay = document.querySelector('.game-container');
  const ground = document.querySelector('.ground');

  let birdLeft = 220;
  let birdBottom = 100;
  let gravity = 2;

  function startGame() {
      birdBottom -= gravity;
    bird.style.left = birdLeft + 'px';
    bird.style.bottom = birdBottom + 'px';
  }
  let timerId = setInterval(startGame, 20);

  function control (e) {
    if(e.keyCode === 32) {
        jump();
    }
  }

  function jump() {
    birdBottom += 50;
    bird.style.bottom = birdBottom + 'px'
  }
  document.addEventListener('keyup', control)

  function genereteObstacle() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle')
  }
});
