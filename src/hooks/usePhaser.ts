import { useRef, useEffect } from 'react';
import Phaser from 'phaser';
import type { Types } from 'phaser';

export default function usePhaser(config: Types.Core.GameConfig) {
  const game = useRef<Phaser.Game>()
  const gameContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!game.current && gameContainer.current) {
      game.current = new Phaser.Game({
        ...config,
        parent: gameContainer.current,
      })
    }
  }, [config]);


  return {
    game,
    gameContainer
  }
}