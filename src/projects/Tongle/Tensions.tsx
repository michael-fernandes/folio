import Tension from './imgs/tension.svg';

type Props = {}

export default function Tensions({ }: Props) {
  return (
    <div className="cover2-img">
      <div className="value-tensions">
        <div>Accuracy</div>
        <img src={Tension} />
        <div>Privacy</div>
      </div>
      <div className="value-tensions">
        <div>Privacy</div>
        <img src={Tension} />
        <div>Convenience</div>
      </div>
      <div className="value-tensions">
        <div>Accountability</div>
        <img src={Tension} />
        <div>Convenience</div>
      </div>
      {/* <img src={Tension} className="cover-2-img" /> */}
    </div>
  )
}