import './Projects.scss';

type Props = {};
const projects = Array(6).fill('project');
export default function Projects({ }: Props) {
  return (
    <div className="container">
      Projects
      <div className="project-grid">
        {projects.map((p, index) =>
          <div key={`${p}-${index}`} className={`project project-${index + 1}`} ></div>,
        )}
      </div>
    </div>
  );
}