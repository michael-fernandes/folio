import { Link, useLocation } from 'react-router-dom';
import ContentWrapper from '../../containers/ContentWrapper';
import { PROJECTS } from '../../containers/projects/Projects';
import './ProjectLinks.scss';

type Props = {}



export default function ProjectLinks({ }: Props) {
  const { pathname } = useLocation();
  return (
    <ContentWrapper>
      {/* <ul className="project-links flex center-content">
        {PROJECTS.map((d) => (
          <li className={`link`}><Link to={d.link || ''}>{d.link}</Link></li>
        ))}
      </ul> */}
      <div className="project-links flex center-content">
        {PROJECTS.map((d) => (
          pathname !== d.link &&
          <div className="link">
            <Link className="nav-link" to={d.link || ''}>
              {d.shortName || d.name}
            </Link>
            <span>&#8212;</span>
          </div>
        ))}
        <div className="link"><Link className="nav-link" to="/">Home</Link></div>
      </div>
    </ContentWrapper >
  )
}