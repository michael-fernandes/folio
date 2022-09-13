import ContentWrapper from '../ContentWrapper'
import './Spotlight.scss';
import Lines from './lines.svg'

{/* <p>
  Looking at the world through the lense of data is hard not to do.
  Either you do it, or it is done for you.
</p>
<p>
  I believe in helping the world move to a place where the decision we make, and decisions that are made for us around data
  are more democratically or autonomously chosen.
</p> */}

export default function About() {
  return (
    <ContentWrapper classWrapper="background-wrapper">
      <p>
        I believe in the social power design can have. I feel a hunger to find designs that increases the atutonomy of the most vulenerable
        benfificaries while also benefiting the rest of the user population. My work spans Public Health, Sustainbility and Civil Technology.
      </p>
      <img src={Lines} className="margin-20 small-img" />
    </ContentWrapper>
  )
}