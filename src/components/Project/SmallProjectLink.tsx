import { ButtonTab } from "../../containers/ButtonTab";

type Props = {
  name?: string
  description?: string
  link?: string
}

function SmallProjectLink({
  name,
  description,
  link,
}: Props) {
  return (
    <div className="small-project">
      <ButtonTab link={link || '/'} >
        <h3>{name}</h3>
        <p>{description}</p>
      </ButtonTab>
    </div >
  );
}

export default SmallProjectLink;