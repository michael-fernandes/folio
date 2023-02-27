import { ReactElement } from 'react'
import cx from 'classnames'

type Props = {
  children: ReactElement | ReactElement[]
  classWrapper?: string
}

export default function ContentWrapper({ children, classWrapper = '' }: Props) {
  return <section className={cx("content-wrapper", { [classWrapper]: classWrapper })}>{children}</section>
}