import HoverBubble from "../../components/hoverBubble/HoverBubble";
import ContentWrapper from "../layout/ContentWrapper";
import "./Landing.scss";
type Props = {};

export default function Landing({ }: Props) {
  return (
    <ContentWrapper>
      <section className="landing">
        <div className="landing-desc">
          {/* <h2 className="subtitle">Cocreation, data heavy and results.</h2> */}
          {/* <h1 className="title">
            Exploring the affect of data upon design from all directions.
          </h1> */}
          <div className="hero-text">
            <h1 className="hero-text-p1">
              {/* Envisioning, a more balanced future where the most disadvantaged benefit. */}
              {/*  what is the value */}
              Aligning design
            </h1>
            <h1 className="hero-text-p2">
              with what matters.
            </h1>
          </div>
          <h2 className="subtitle">Designer • Developer • Human-Computer Interaction</h2>
        </div>
        <HoverBubble />
      </section>
    </ContentWrapper>
  );
}
