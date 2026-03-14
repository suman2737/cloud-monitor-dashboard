import { tableColumns } from "../config/tableConfig"

export default function IncidentTable({ data, onSelect, setData }) {

 function acknowledge(id) {
  setData(prev =>
   prev.map(i =>
    i.id === id
     ? { ...i, status: "Acknowledged" }
     : i
   )
  )
 }

 function resolve(id) {
  setData(prev =>
   prev.map(i =>
    i.id === id
     ? { ...i, status: "Resolved" }
     : i
   )
  )
 }

 if (!data || data.length === 0) {
  return (
   <div className="table-container">
    <p className="empty-state">No incidents found</p>
   </div>
  )
 }

 return (

 <div className="table-container">

 <table>

 <thead>
 <tr>
 {tableColumns.map(col => (
 <th key={col.id}>{col.label}</th>
 ))}
 </tr>
 </thead>

 <tbody>

 {data.map(row => (

 <tr key={row.id}>

 {tableColumns.map(col => {

 switch (col.type) {

 case "text":
 return <td key={col.id}>{row[col.id]}</td>

 case "link":
 return (
 <td key={col.id}>
 <button
 className="link-btn"
 onClick={() => onSelect(row)}
 >
 {row[col.id]}
 </button>
 </td>
 )

 case "severity":
 const sev = row[col.id]?.toLowerCase()?.trim()
 return (
 <td key={col.id}>
 <span className={`severity-${sev}`}>
 {row[col.id]}
 </span>
 </td>
 )

 case "status":
 const stat = row[col.id]?.toLowerCase()?.trim()
 return (
 <td key={col.id}>
 <span className={`status-${stat}`}>
 {row[col.id]}
 </span>
 </td>
 )

 case "time":

 let minutes = "0"

 if (row[col.id]) {
  minutes = Math.floor((Date.now() - row[col.id]) / 60000)
 }

 return (
 <td key={col.id}>
 {minutes} min ago
 </td>
 )

 case "actions":
 return (

 <td key={col.id}>

 {row.status === "Open" && (
 <button
 className="ack-btn"
 onClick={() => acknowledge(row.id)}
 >
 Acknowledge
 </button>
 )}

 {row.status !== "Resolved" && (
 <button
 className="resolve-btn"
 onClick={() => resolve(row.id)}
 >
 Resolve
 </button>
 )}

 </td>

 )

 default:
 return <td key={col.id}></td>

 }

 })}

 </tr>

 ))}

 </tbody>

 </table>

 </div>

 )

}