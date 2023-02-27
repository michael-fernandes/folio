type Props = {
  href: string;
  children: string;
  tab?: boolean;
  alt?: string
};

export default function ActionLink({ href, children, tab, alt }: Props) {
  return (
    <>
      {href && (
        <a className="primary-link" aria-label={alt} href={href} target={tab ? "blank" : ""}>
          {children}
        </a>
      )}
    </>
  );
}
