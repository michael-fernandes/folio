import "./ProjectTile.scss";
import cx from "classnames";
import { Link } from "react-router-dom";
import { ButtonTab } from "../../containers/ButtonTab";

type Props = {
  className: string;
  name?: string;
  discipline?: string;
  description?: string;
  icon?: string;
  link?: string;
};

export default function ProjectTile({
  className,
  name = "Project Name",
  discipline = "Name",
  description,
  icon,
  link,
}: Props) {
  const classname = cx(className);

  return (
    <ButtonTab link={link || '/'} classname={classname} >
      <div className="tile-content">
        <h3 className="title project-title">{name}</h3>
        <h4 className="desc tile-discipline">{discipline}</h4>
        <p className="project-description">{description}</p>
        {link && <Link to={link || "/"}>View more</Link>}
      </div>
      <div className="project-icon">
        <img src={icon} alt={"Stick and dot representation of project"} />
      </div>
    </ButtonTab>
  );
}
