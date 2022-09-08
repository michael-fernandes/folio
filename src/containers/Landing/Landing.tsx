import HoverBubble from "../../components/hoverBubble/HoverBubble";
import "./Landing.scss";
type Props = {};

export default function Landing({}: Props) {
  return (
    <section className="landing">
      <div>
        <h1 className="title">Michael Fernandes</h1>
        <h2 className="desc">
          Exploring the affect of data upon design from all directions.
        </h2>
      </div>
      <HoverBubble />
    </section>
  );
}
