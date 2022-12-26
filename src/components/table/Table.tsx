import { WorkshopRow } from '../../projects/Tongle/Tongle'

type Props = { rows: WorkshopRow[], name: string }

export default function Table({ rows, name }: Props) {
  return (
    <div>
      <h3>{name}</h3>
      <table>
        <tr>
          <th>Co-design Activitiy</th>
          <th>Rationale</th>
          <th>Result / Findings</th>
          {/* <th>After workshop acitivies</th> */}
        </tr>
        {rows.map(({ rationale, activity, outcome }) =>
          <tr>
            <td>{activity}</td>
            <td>{rationale}</td>
            <td>{outcome}</td>
          </tr>
        )}
      </table>
    </div>
  )
}