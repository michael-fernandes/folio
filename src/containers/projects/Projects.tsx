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
      "Co-creation for a civic technology using perspectives from across the political spectrum and drawing from as many demographics as possible to inform the design.",
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
      "Making decesion around quantitive predictions easier, even persons unfamiliar with data-driven decision making.",
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
      "Rapidly deployed covid forecast visualization tool, and a retroactive look at the alignment between public health and the public facing tools.",
    link: "covid",
    weight: 2,
    img: CovidImg,
    color: '#1a2546',

  }
];
export const SMALL_PROJECTS = [
  {
    name: "Alternative Spring Break",
    discipline: "volunteering",
    area: "Inclusion in design + tech",
    description: "K-12 outreach to expose 80+ middle school students of the Makah tribe to design thinking.",
    link: "design-thinking-workshops",
    weight: 1,
  },
  {
    name: "Child Mortality: interactive storytelling for health equity",
    shortName: "Child Mortality",
    discipline: "development + design",
    area: "Global Health",
    description: "A data story about achieving global health equity in under-5 child mortality.",
    link: "child-mortality",
    weight: 1,
  },
  {
    name: "Radify",
    discipline: "data viz",
    area: "Economics",
    description: "Continous radial representations of seasonal data, focusing on the usecase of inflation data.",
    link: "radify",
    weight: 1,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="content-wrapper projects-title flex">
        <h1 className="m-auto">Projects</h1>
        {/* <p>
          A collection of case studies spanning topics such as inclusisive design to rethinking
          how COVID-19 modeling visuals could be used to communicate risk. Followed by a collection of
          smaller projects that I've worked on.
        </p> */}
      </div>
      {PROJECTS.map((projectConfig) => (
        <ProjectTile
          key={`prj-${projectConfig.link}`}
          className={`case-study prj-${projectConfig.link}`}
          {...projectConfig}
        />
      ))}
      {/* <div className="content-wrapper projects-title flex">
        <h1 className="m-auto">Smaller Projects</h1>
      </div> */}
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
