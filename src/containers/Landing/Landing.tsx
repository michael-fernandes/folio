import HoverBubble from "../../components/hoverBubble/HoverBubble";
import ContentWrapper from "../layout/ContentWrapper";
import { animated, easings, useSpring } from 'react-spring';
import { useState } from "react";

import "./Landing.scss";
import fadeInUpSpring, { LONG_ANIMATION, SHORT_ANIMATION } from "../../hooks/animations/useFadeInUpSpring";
type Props = {};

export default function Landing({ }: Props) {
  const [showDots, setDotsVisible] = useState(false);
  const fadeInUp = fadeInUpSpring({});

  const fadeInLeft = useSpring({
    from: { x: 80, opacity: 0 },
    to: { x: 0, opacity: 1 },
    delay: LONG_ANIMATION + 50,
    config: { duration: SHORT_ANIMATION, easing: easings.easeInCubic, },
    onRest: () => setDotsVisible(true),
  })

  return (
    <ContentWrapper>
      <section className="landing">
        <animated.div className="landing-desc">
          {/* <h2 className="subtitle">Cocreation, data heavy and results.</h2> */}
          {/* <h1 className="title">
            Exploring the affect of data upon design from all directions.
          </h1> */}
          <animated.div className="hero-text" style={fadeInUp} >
            <h1 className="hero-text-p1">
              {/* Envisioning, a more balanced future where the most disadvantaged benefit. */}
              {/*  what is the value */}
              Aligning design
            </h1>
            <h1 className="hero-text-p2">
              with what matters
            </h1>
          </animated.div>
          <animated.h2 className="subtitle" style={fadeInLeft}>Inclusive design in a data driven future</animated.h2>
        </animated.div>
        <div className="landing-hover">
          <HoverBubble showDots={showDots} />
        </div>
      </section>
    </ContentWrapper >
  );
}
