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
        <button>View More</button>
        {/* {link && <Link className="project-tile-link" to={link || "/"}>View more</Link>} */}
      </div>
      <div className="project-icon">
        <img className="hover-animation" src={icon} alt={"Stick and dot representation of project"} />
      </div>
    </ButtonTab>
  );
}
