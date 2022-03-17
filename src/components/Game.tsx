import { useEffect, useRef } from "react"
import Phaser from 'phaser';
import config from '../config';

export default function Game() {
  const game = useRef<Phaser.Game>();

  useEffect(() => {
    if (!game.current) {
      game.current = new Phaser.Game(config)
    }
  }, [])

  return (
    <>
      <div>REACT rendered this</div>
    </>
  )
}