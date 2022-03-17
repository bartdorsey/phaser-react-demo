import Main from './scenes/Main';

const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 20 }
    }
  },
  scene: Main
}

export default config;