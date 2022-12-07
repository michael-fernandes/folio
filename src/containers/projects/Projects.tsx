import ProjectTile from "../../components/Project/ProjectTile";
import "./Projects.scss";
import BusImg from "../../projects/Bus/imgs/beehive.png";
import CovidImg from "../../projects/covid/WhiteHouse.png";
import TongleImg from "../../projects/Tongle/imgs/tongleSquare.png";


export const PROJECTS = [
  {
    name: "Tongle: inclusive design for civic tech",
    shortName: "Tongle",
    discipline: "design research",
    area: "Civil Tech",
    description:
      "Co-creation for a civic technology using perspective from across the political spectrum and drawing from as many demographics as possible to inform the design.",
    link: "tongle",
    weight: 4,
    img: TongleImg,
    color: '#ECEBEB',
  },
  {
    name: "Uncertainty displays for mobile decision making",
    shortName: "Uncertainy Displays",
    discipline: "design research + prototyping",
    area: "Academic Resaearch",
    description:
      "Making decesion around quantitive predictions easier for even persons unfamiliar with data decesion making.",
    link: "bus",
    weight: 4,
    img: BusImg,
    color: 'white',
  },
  {
    name: "COVID: vizualization for communicating risk of rapid growth",
    shortName: "Covid risk",
    discipline: "development + design re-thinking",
    area: "Global Health",
    description:
      "Rapidly deployed covid forecast visualization tool, and a retroactive look at the alignment between public health and the public.",
    link: "covid",
    weight: 2,
    img: CovidImg,
    color: '#3E394B',

  },
  // {
  //   name: "Radify",
  //   discipline: "data viz",
  //   area: "Economics",
  //   description: "Continous radial representation of data.",
  //   icon: RadifyIcon, //
  //   link: "radify",
  //   weight: 1,
  // },
  // {
  //   name: "Child Mortality: interactive storytelling for health equity",
  //   shortName: "Child Mortality",
  //   discipline: "development + design",
  //   area: "Global Health",
  //   description: "An interactive story about achieving global health equity in under-5 child mortality.",
  //   icon: ChildMortalityIcon, // Show many different curves with different faded colors. Solid line top lighter bottom.
  //   link: "child-mortality",
  //   weight: 1,
  // },
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
    <section id="projects">
      <div className="content-wrapper flex space-between-content projects-title">
        <h1>Projects</h1>
        <p>
          A collection of projects which represent some of my favorite work.
        </p>
      </div>
      {PROJECTS.map((projectConfig) => (
        <ProjectTile
          key={`prj-${projectConfig.link}`}
          className={`case-study prj-${projectConfig.link}`}
          {...projectConfig}
        />
      ))}
    </section>
  );
}
