import Main from './scenes/Main';

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 20 }
    }
  },
  scene: Main
}

export default config;