import ProjectTile from "../../components/Project/ProjectTile";
import "./Projects.scss";
import BusImg from "../../projects/Bus/imgs/beehive.png";
import CovidImg from "../../projects/covid/WhiteHouse.png";
import TongleImg from "../../projects/Tongle/imgs/tongleSquare.png";
import SmallProjectLink from "../../components/Project/SmallProjectLink";


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
    name: "COVID: communicating risk of exponential growth",
    shortName: "Covid risk",
    discipline: "development + design re-thinking",
    area: "Global Health",
    description:
      "Rapidly deployed covid forecast visualization tool, and a retroactive look at the alignment between public health and the public.",
    link: "covid",
    weight: 2,
    img: CovidImg,
    color: '#3E394B',

  }
];
const SMALL_PROJECTS = [
  {
    name: "Alternative Spring Break",
    discipline: "volunteering",
    area: "Inclusion in design + tech",
    description: "K-12 out resach to expose 80+ middle school students of the Makah tribe to design thinking.",
    // icon: RadifyIcon, //
    link: "neah-bay",
    weight: 1,
  },
  {
    name: "Child Mortality: interactive storytelling for health equity",
    shortName: "Child Mortality",
    discipline: "development + design",
    area: "Global Health",
    description: "An interactive story about achieving global health equity in under-5 child mortality.",
    // icon: ChildMortalityIcon, // Show many different curves with different faded colors. Solid line top lighter bottom.
    link: "child-mortality",
    weight: 1,
  },
  {
    name: "Radify",
    discipline: "data viz",
    area: "Economics",
    description: "Continous radial representation of seasonal data, focusing on the usecase of Inflation data.",
    // icon: RadifyIcon, //
    link: "radify",
    weight: 1,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="content-wrapper projects-title">
        <h1>Case Studies & Projects</h1>
        <p>
          A collection of case studies spanning topics such as inclusisive design to rethinking
          how COVID-19 modeling visuals could be used to communicate risk. Followed by a collection of
          smaller projects that I've worked on.
        </p>
      </div>
      {PROJECTS.map((projectConfig) => (
        <ProjectTile
          key={`prj-${projectConfig.link}`}
          className={`case-study prj-${projectConfig.link}`}
          {...projectConfig}
        />
      ))}
      <div className="content-center flex  my-20">
        <div className="flex content-center content-wrapper flex-col  my-20">
          {/*  to do make nice */}
          {SMALL_PROJECTS.map((projectConfig) => (
            <SmallProjectLink
              {...projectConfig}
              key={`prj-${projectConfig.link}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
