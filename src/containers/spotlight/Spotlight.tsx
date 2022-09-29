import ContentWrapper from '../ContentWrapper'
import './Spotlight.scss';
import Lines from './lines.svg'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <ContentWrapper classWrapper="background-wrapper">
      <p>
        I'm a technical digital designer with experience in <Link className="spotlight-link text-link" to="/forecast">Global Health</Link>,
        <Link className="spotlight-link text-link" to="/tongle">Civil Tech</Link>, and Sustainability. My toolkit as a designer are grounded in a
        human-centered design practices, completing successful projects using inclusive design techniques that use co-creation to drive a design
        towards the human-values embedded in a technical system.
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
  )
}