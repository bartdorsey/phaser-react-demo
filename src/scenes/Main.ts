import Phaser from 'phaser';
export default class Main extends Phaser.Scene {
  constructor() {
    super('main');
  }

  preload() {
    this.load.image('red_ball', 'sprites/red_ball.png');
    this.load.image('red_particle', 'sprites/red.png');
  }

  create() { 
    const particles = this.add.particles('red_particle');

    const emitter = particles.createEmitter({
      speed: 200,
      scale: { start: 1, end: 0 },
      // blendMode: 'ADD'
    });

    const ball = this.physics.add.image(400, 100, 'red_ball');

    ball.setVelocity(100, 200);
    ball.setBounce(1, 1);
    ball.setCollideWorldBounds(true);
    emitter.startFollow(ball);
  }
}

