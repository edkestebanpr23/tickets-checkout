import { useState } from 'react';

interface Props {
    initialCount: number;
    min?: number;
    max?: number;
}

export const useCounter = (initialCount: number, min = 0, max = 1000) => {
  const [count, setCount] = useState(initialCount);

  if (initialCount < min || initialCount > max) {
    throw new Error(`Initial value must be between [${min}, ${max}]`);
  }

  return {
    value: count,
    increase: () => setCount(prevCount => (prevCount >= max ? max : prevCount + 1)),
    decrease: () => setCount(prevCount => (prevCount <= min ? min : prevCount - 1)),
    reset: () => setCount(initialCount)
  };
};
