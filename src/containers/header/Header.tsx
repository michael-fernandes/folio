import { Link, useLocation } from 'react-router-dom';
import ContentWrapper from '../layout/ContentWrapper';
import './Header.scss';

interface Props {
  isFooter?: boolean
}
export default function Header({ isFooter: isBottom }: Props) {
  const { pathname } = useLocation();

  const content = (
    <>
      <Link to='/' className="home-link header-link"><h1 className="header-heading">Michael Fernandes</h1></Link><div className="action-wrapper">
        <ul className="actions">
          <li className="action">
            {pathname === '/'
              ? <a className="header-link" href="#projects">Projects</a>
              : <Link className="header-link" to={{ pathname: "", hash: "#projects" }}>Projects</Link>}
          </li>
          <li className="action"><Link className="header-link" to="/about">About</Link></li>
        </ul>
      </div>
    </>
  );

  return (
    <ContentWrapper>
      {isBottom
        ? <footer>
          {content}
        </footer>
        : <header>
          {content}
        </header>}
    </ContentWrapper>
  )
}