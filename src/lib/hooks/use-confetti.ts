import * as React from 'react';
import { UseConfettiType } from "~/interface";
import { getContainerById } from '../utils';
import { confetti } from '../confetti';

export const useConfetti: UseConfettiType = (
  id,
  type,
  config,
) => {
  const [isAnimating, setIsAnimating] = React.useState(false);

  const internalAnimationCallback = () => setIsAnimating(false);

  const confettiFn = React.useCallback(
    () => {
      const container = getContainerById(id);
      if (!container) return;

      setIsAnimating(true);

      if (type === 'confetti') {
        confetti(container, internalAnimationCallback, config);
      }
    },
    [config, id, type]
  );

  return {
    isAnimating,
    confettiFn
  }
};