import { ReactElement } from 'react'

type Props = {
  children: ReactElement | ReactElement[]
  classWrapper?: string
}

export default function ContentWrapper({ children, classWrapper }: Props) {
  return classWrapper ?
    <div className={classWrapper}>
      <div className="content-wrapper">{children}</div>
    </div>
    :
    <div className="content-wrapper">{children}</div>;
}