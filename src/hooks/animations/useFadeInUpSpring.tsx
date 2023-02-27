import { easings, useSpring } from "react-spring";


export const LONG_ANIMATION = 700;
export const SHORT_ANIMATION = 450;

export default function useFadeInUpSpring({ duration = LONG_ANIMATION, pause = false, delay = 0 }) {
  return useSpring({
    pause,
    from: { y: 80, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay,
    config: { duration, easing: easings.easeInCubic },
    // onStart: () => console.log('started', pause),
    // onRest: () => console.log('rest hit'),
  })
}