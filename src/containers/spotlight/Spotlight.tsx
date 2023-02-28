import ContentWrapper from '../layout/ContentWrapper'
import './Spotlight.scss';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useRef } from 'react';
import { animated, } from 'react-spring';
import useFadeInUpSpring from '../../hooks/animations/useFadeInUpSpring';
import { Ref } from 'react';

export default function About() {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true
  });

  const fadeInUp = useFadeInUpSpring({
    pause: !dataRef?.isIntersecting,
  })

  return (
    <div className="background-wrapper">
      <ContentWrapper>
        <div ref={triggerRef as unknown as Ref<HTMLDivElement>} />
        <animated.div style={fadeInUp}>
          <p>
            I'm a technical digital designer with experience in <Link className="spotlight-link text-link" to="/covid">Global Health</Link>,
            {" "}<Link className="spotlight-link text-link" to="/tongle">Civil Tech</Link>, and Sustainability. My toolkit as a designer is grounded in human-centered design practices, some of my favorites of which are value-sensitive design, co-creation, and technical prototyping.
          </p>
          <p>
            Increasingly, I am interested in the social implications of intelligence augmentation and automation. In design, I find the most joy uncovering designs that give autonomy to the most vulnerable persons affected by a technology, while simultaneously raising the floor for everyone else.
          </p>

          {/* <img src={Lines} className="margin-20 small-img" /> */}
        </animated.div>
      </ContentWrapper>
    </div>
  )
}