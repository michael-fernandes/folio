import { Link } from 'react-router-dom';
import ContentWrapper from '../ContentWrapper';
import './Header.scss';

interface Props {
  isBottom?: boolean
}
export default function Header({ isBottom }: Props) {
  return (
    <ContentWrapper classWrapper={isBottom ? "header-bottom" : ''}>
      <header>
        <Link to='/' className="header-link"><h1 className="header-heading">Michael Fernandes</h1></Link>

        <div className="action-wrapper">
          <ul className="actions">
            <li className="action"><Link className="headerLink" to="/about">Projects</Link></li>
            <li className="action"><Link className="headerLink" to="/about">About</Link></li>
          </ul>
        </div>
      </header>
    </ContentWrapper>
  )
}