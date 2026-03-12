import { tableColumns } from "../config/tableConfig"

/* Severity badge colors */
const severityColors = {
  Critical: "#ff4d4f",
  High: "#fa8c16",
  Medium: "#faad14",
  Low: "#52c41a"
}

export default function IncidentTable({ data, onSelect, setData }) {

  function acknowledge(id) {

    setData(prev =>
      prev.map(i =>
        i.id === id
          ? { ...i, status: "Acknowledged" }
          : i
      )
    )

    console.log("Incident acknowledged")

  }

  function resolve(id) {

    setData(prev =>
      prev.map(i =>
        i.id === id
          ? { ...i, status: "Resolved" }
          : i
      )
    )

    console.log("Incident resolved")

  }

  return (

    <table className="incident-table">

      {/* Table Header */}
      <thead>
        <tr>
          {tableColumns.map(col => (
            <th key={col.id}>{col.label}</th>
          ))}
        </tr>
      </thead>

      {/* Table Body */}
      <tbody>

        {data.map(row => (

          <tr key={row.id}>

            {tableColumns.map(col => {

              let cellContent

              switch (col.type) {

                /* Normal text columns */
                case "text":

                  if (col.id === "severity") {
                    cellContent = (
                      <span
                        style={{
                          background: severityColors[row[col.id]],
                          color: "white",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          fontSize: "12px"
                        }}
                      >
                        {row[col.id]}
                      </span>
                    )
                  } else {
                    cellContent = row[col.id]
                  }

                  break


                /* Title clickable link */
                case "link":

                  cellContent = (
                    <button onClick={() => onSelect(row)}>
                      {row[col.id]}
                    </button>
                  )

                  break


                /* Created time column */
                case "time":

                  cellContent =
                    Math.floor((Date.now() - row[col.id]) / 60000) + " min ago"

                  break


                /* Action buttons */
                case "actions":

                  cellContent = (

                    <>
                      <button
                        disabled={row.status !== "Open"}
                        onClick={() => acknowledge(row.id)}
                      >
                        Acknowledge
                      </button>

                      <button
                        disabled={row.status === "Resolved"}
                        onClick={() => resolve(row.id)}
                      >
                        Resolve
                      </button>
                    </>

                  )

                  break


                default:
                  cellContent = ""

              }

              return (
                <td key={col.id}>
                  {cellContent}
                </td>
              )

            })}

          </tr>

        ))}

      </tbody>

    </table>

  )

}