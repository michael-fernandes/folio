import ContentWrapper from '../layout/ContentWrapper'
import './Spotlight.scss';
import Lines from './lines.svg'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="background-wrapper">
      <ContentWrapper>
        <p>
          I'm a technical digital designer with experience in <Link className="spotlight-link text-link" to="/forecast">Global Health</Link>,
          {" "}<Link className="spotlight-link text-link" to="/tongle">Civil Tech</Link>, and Sustainability. My toolkit as a designer is grounded in
          human-centered design practices, some of my favorites are value-sensitive design, co-creation, and rapid prototyping.
        </p>
        <p>
          Increasingly, I am interested in the social implications of intelligence augmentation of predictive
          tools. In design, I take the most joy finding designs that benefit the most vulenerable persons
          affected by a technology the most while simutaneously raising the floor for everybody around them.
        </p>
        <p>
          ~cute animation as you scroll down~
        </p>
        <img src={Lines} className="margin-20 small-img" />
      </ContentWrapper>
    </div>
  )
}