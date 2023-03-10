import { Link, useLocation } from 'react-router-dom';
import { PROJECTS, SMALL_PROJECTS } from '../../containers/projects/Projects';
import './Footer.scss';

type Props = {}



export default function Footer({ }: Props) {
  const { pathname } = useLocation();

  return (
    <>
      {/* <ul className="project-links flex center-content">
        {PROJECTS.map((d) => (
          <li className={`link`}><Link to={d.link || ''}>{d.link}</Link></li>
        ))}
      </ul> */}
      <div className="project-link-wrapper">
        <div className="project-links flex center-content">
          {PROJECTS.map((d) => (
            <div className={pathname === '/' + d.link ? "active-link" : ''} key={d.link}>
              <Link className="nav-link link" to={d.link || ''}>
                {d.shortName || d.name}
              </Link>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
          ))}
          {SMALL_PROJECTS.map((d) => (
            <div className={pathname === '/' + d.link ? "active-link" : ''} key={d.link}>
              <Link className="nav-link link" to={d.link || ''}>
                {d.shortName || d.name}
              </Link>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
          ))}
          <div className="link"><Link className="nav-link" to="/">Home</Link></div>
        </div>
      </div>
    </ >
  )
}