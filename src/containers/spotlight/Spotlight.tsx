import ContentWrapper from '../ContentWrapper'
import './Spotlight.scss';
import Lines from './lines.svg'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <ContentWrapper classWrapper="background-wrapper">
      <p>
        I'm a technical digital designer. I am motivated by a yearning to find designs that increases the autonomy of the most vulnerable
        beneficiaries while also benefiting the rest of the user population. I have worked in some capacity of product development focusing on
        design in <Link className="spotlight-link text-link" to="/forecast">Public Health</Link>, Sustainability and <Link className="spotlight-link text-link" to="/tongle">Civil Technology</Link>.
      </p>
      <p>
        My toolkit as a designer are grounded in a human-centered design practices. I have completed sucessful projects using inclusive
        design techniques such as particpatory and value sensitive design to drive forth design research and decesion making.
        Im have a passion for the power of data visualization. Increasingly, I am interested in the social implications of the systems created by humans and
        ~predicative intelligence tools~.
      </p>
      <img src={Lines} className="margin-20 small-img" />
    </ContentWrapper>
  )
}