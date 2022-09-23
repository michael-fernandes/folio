import { Link } from 'react-router-dom';
import ContentWrapper from '../ContentWrapper';
import './Header.scss';

interface Props {
  isBottom?: boolean
}
export default function Header({ isBottom }: Props) {
  return (
    <ContentWrapper classWrapper={isBottom ? "header-bottom" : 'header'}>
      <header>
        <Link to='/' className="home-link"><h1 className="header-heading">Michael Fernandes</h1></Link>
        <div className="action-wrapper">
          <ul className="actions">
            <li className="action"><a className="header-link text-link" href="#projects">Projects</a></li>
            <li className="action"><Link className="header-link text-link" to="/about">About</Link></li>
          </ul>
        </div>
      </header>
    </ContentWrapper>
  )
}