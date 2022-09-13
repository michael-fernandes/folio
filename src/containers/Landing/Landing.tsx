import HoverBubble from "../../components/hoverBubble/HoverBubble";
import ContentWrapper from "../ContentWrapper";
import "./Landing.scss";
type Props = {};

export default function Landing({ }: Props) {
  return (
    <ContentWrapper>
      <section className="landing">
        <div className="landing-desc">
          <h2 className="subtitle">Cocreation, data heavy and result.</h2>
          <h1 className="title">
            Exploring the affect of data upon design from all directions.
          </h1>
          <h2 className="subtitle">Designer • Developer • Human-Computer Interaction</h2>
        </div>
        <HoverBubble />
      </section>
    </ContentWrapper>
  );
}
