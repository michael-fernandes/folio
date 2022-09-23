import { Link } from "react-router-dom";

export interface Props {
  children: React.ReactElement | React.ReactElement[]
  link?: string
  classname?: string
}

export function ButtonTab({ children, link, classname }: Props) {

  return link ? <Link className={classname} to={link}>{children}</Link> : <>{children}</>
}
