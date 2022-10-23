import ContentWrapper from './ContentWrapper'

type Props = {
  children: React.ReactNode[] | React.ReactNode
  links?: (React.ReactNode | string)[]
}

export default function WriteupWrapper({ children, links = [] }: Props) {
  return (
    <ContentWrapper classWrapper="writeup-wrapper">
      <div className="writeup-content">
        {children}
      </div>
      <div className="writeup-links">
        {links.map(_ => <a>{_}</a>)}
      </div>
    </ContentWrapper>
  )
}