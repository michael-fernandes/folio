type Props = {
  href: string;
  children: string;
  tab?: boolean;
};

export default function ActionLink({ href, children, tab }: Props) {
  return (
    <>
      {href && (
        <a className="primary-link" href={href} target={tab ? "blank" : ""}>
          {children}
        </a>
      )}
    </>
  );
}
