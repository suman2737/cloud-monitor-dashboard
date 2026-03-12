import Notes from "./Notes"

export default function SidePanel({incident,onClose}){

 if(!incident) return null

 return (

 <div style={{
 position:"fixed",
 right:0,
 top:0,
 width:400,
 height:"100%",
 background:"#fff",
 borderLeft:"1px solid #ccc",
 padding:20
 }}>

 <button onClick={onClose}>Close</button>

 <h2>{incident.title}</h2>

 <p>Severity: {incident.severity}</p>
 <p>Status: {incident.status}</p>
 <p>Service: {incident.serviceName}</p>

 <h3>Notes</h3>

 <Notes/>

 </div>

 )

}