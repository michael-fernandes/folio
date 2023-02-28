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
            <h1>Hi my name is Michael</h1>
            <p>Although, many of my friends call me Fern. You are welcome to call me either. My preferred pronouns are he/him. I take great pride in being a 2nd generation immigrant born to a father who emigrated from Tanzania and a mother from India.</p>
            <p>
              My design career has taken me to some pretty surprising places so far. From finding myself on the virtual front lines of the fight against COVID-19, to a small business performing a green lighting retrofit. The one thing I have followed this whole time has been a desire to balance technical complexity with creating Human Centered products.
            </p>
            <p>
              In the roles I take on, I tend to wear two faces, half software developer and half engineer. To do this I have deployed focused skills around Data Visualization and design for decision making all the while seeking out situations to deploy inclusive design techniques like participatory design.
            </p>
            <p>
              Currently, I am exploring the social impact of automation via a role as a Senior UX Engineer at <a href="https://www.simplr.ai/">Simplr</a>. Outside of work you can either find me in the outdoors(hopefully skiing) or cooking the latest dish I'm currently trying to perfect.
            </p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}