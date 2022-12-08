import "./ProjectTile.scss";
import cx from "classnames";
import { ButtonTab } from "../../containers/ButtonTab";

type Props = {
  className: string;
  name?: string;
  discipline?: string;
  description?: string;
  icon?: string;
  link?: string;
  img?: string;
  color?: string
};

export default function ProjectTile({
  className,
  name = "Project Name",
  discipline = "Name",
  description,
  link,
  img,
  color,
}: Props) {
  const classname = cx(className, "content-wrapper");

  return (
    <div className="case-study-wrapper" style={{ background: color }}>
      <ButtonTab link={link || '/'} classname={classname} >
        <div className="tile-content">
          <div className="tile-writing">
            <h2 className="title project-title">{name}</h2>
            <h3 className="desc tile-discipline">{discipline}</h3>
            <p className="project-description">{description}</p>
          </div>
          <div className="img">
            <img src={img} alt=" imgs" />
          </div>
          {/* <button>View More</button> */}
        </div>
      </ButtonTab>
    </div>
  );
}
