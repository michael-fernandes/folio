import ProjectTile from "../../components/Project/ProjectTile";
import "./Projects.scss";
import RadifyIcon from "../../projects/Radify/imgs/RadifyIcon.svg";
import BusIcon from "../../projects/Bus/BusIcon.svg";
import TongleIcon from "../../projects/Tongle/TongleIcon.svg";
import CovidIcon from "../../projects/covid/CovidIcon.svg";
import ChildMortalityIcon from "../../projects/childMortality/ChildMortalityIcon.svg";
import ContentWrapper from "../ContentWrapper";


export const PROJECTS = [
  {
    name: "Tongle: inclusive design for civil tech",
    shortName: "Tongle",
    discipline: "design research",
    area: "Civil Tech",
    description:
      "Co-creating design for a civil technology using perspective from across the political spectrum and drawing from as many demographics as possible to inform the design.",
    icon: TongleIcon,
    link: "tongle",
    weight: 4,
  },
  {
    name: "Uncertainy displays for decision making",
    shortName: "Uncertainy Displays",
    discipline: "design research + prototyping",
    area: "Academic Resaearch",
    description:
      "Making decesion around quantitive predictions easier for even persons unfamiliar with data decesion making.",
    icon: BusIcon, // Dot plot...?  or a linear dot
    link: "bus",
    weight: 4,
  },
  {
    name: "COVID: vizualization for communicating risk rapid growth risk",
    shortName: "Covid risk",
    discipline: "development + design re-thinking",
    area: "Global Health",
    description:
      "Rapidly deployed covid forecast visualization tool, made before the pandemic began.",
    icon: CovidIcon, // Show many different curves with different faded colors. Solid line top lighter bottom.
    link: "covid",
    weight: 2,
  },
  {
    name: "Radify",
    discipline: "data viz",
    area: "Economics",
    description: "Continous radial representation of data.",
    icon: RadifyIcon, //
    link: "radify",
    weight: 1,
  },
  {
    name: "Child Mortality: interactive storytelling for health equity",
    shortName: "Child Mortality",
    discipline: "development + design",
    area: "Global Health",
    description: "An interactive story about achieving health equity in under-5 child mortality. ",
    icon: ChildMortalityIcon, // Show many different curves with different faded colors. Solid line top lighter bottom.
    link: "child-mortality",
    weight: 1,
  },
  // {
  //   name: "Protein Builder",
  //   discipline: "development + design",
  //   area: "Health + Sustainability",
  //   description: "Showcasing of a website showing the ",
  //   icon: RadifyIcon, // Show many different curves with different faded colors. Solid line top lighter bottom.
  //   // link: "protein",
  // },
  // {
  //   name: "Change.org for product ideas",
  //   discipline: "cocreative ",
  //   area: "Design",
  //   description: "A design experiment",
  //   icon: RadifyIcon, // Show many different curves with different faded colors. Solid line top lighter bottom.
  //   // link: "protein",
  // },
];

export default function Projects() {
  return (
    <ContentWrapper>
      <section id="projects">
        <h1>Projects</h1>
        <div className="project-grid">
          {PROJECTS.map((p, index) => (
            <ProjectTile
              key={`project-${index}`}
              className={`project tile project-${index}`}
              {...p}
            />
          ))}
        </div>
      </section>
    </ContentWrapper >
  );
}
