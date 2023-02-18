import ContentWrapper from '../layout/ContentWrapper'
import './About.scss';
import headshot from './me.jpg';
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
    <ContentWrapper>
      <div className="about">
        <div className="overview">
          <div className="image-wrapper">
            <img className="about-image" src={headshot} />
          </div>
          <div className="about-content">
            <h1>Me</h1>
            <p>
              The palces I've been in my design career so far have been surprising. From finding myself on the virtual front lines for the fight against COVID-19, to a small business performing a green lighting retrofit. The one thing I have followed this whole time has been a desire to balance technical complexity with creating Human Centered products.
            </p>
            <p>
              Sometimes I think of myself as a designer masquerading.
            </p>
          </div>
        </div>
      </div>

    </ContentWrapper>
  )
}