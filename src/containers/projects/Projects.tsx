import ProjectTile from "../../components/Project/ProjectTile";
import "./Projects.scss";
import RadifyIcon from "../../projects/Radify/RadifyIcon.svg";
import BusIcon from "../../projects/Bus/BusIcon.svg";

type Props = {};

const projects = [
  {
    name: "Tongle:",
    discipline: "design research",
    area: "Civil Tech",
    description:
      "Designing for a civil technology using perspective from across the political spectrum and drawing from as many demographics as possible to inform the design.",
    icon: RadifyIcon,
    link: "tongle",
  },
  {
    name: "Uncertain Bus:",
    discipline: "design research + prototyping",
    area: "Academic Resaearch",
    description:
      "Making decesion making around quantitive predictions easier for even persons unfamiliar with data decesion making.",
    icon: BusIcon, // Dot plot...?  or a linear dot
    link: "bus",
  },
  {
    name: "COVID Model Viz",
    discipline: "development + future looking design thinking",
    area: "Public Health",
    description:
      "A rapidly deployed covid forecast visualizaiton tool in the first weeks of march 2020.",
    icon: RadifyIcon, // Show many different curves with different faded colors. Solid line top lighter bottom.
    // link: "forecast",
  },
  {
    name: "Child Mortality",
    discipline: "development + design",
    area: "Public Health",
    description: "Showcasing of a website showing the ",
    icon: RadifyIcon, // Show many different curves with different faded colors. Solid line top lighter bottom.
    // link: "child-mortality",
  },
  {
    name: "Radify",
    discipline: "data viz",
    area: "Economics",
    description: "A continous radial representation of data.",
    icon: RadifyIcon, //
    link: "radify",
  },
  {
    name: "Protein Builder",
    discipline: "development + design",
    area: "Health + Sustainability",
    description: "Showcasing of a website showing the ",
    icon: RadifyIcon, // Show many different curves with different faded colors. Solid line top lighter bottom.
    // link: "protein",
  },
];

export default function Projects({ }: Props) {
  return (
    <section className="container">
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((p, index) => (
          <ProjectTile
            key={`project-${index}`}
            className={`project project-${index}`}
            {...p}
          />
        ))}
      </div>
    </section>
  );
}
