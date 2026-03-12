export default function ServiceCard({service}){

 return(

 <div style={{
 border:"1px solid #ccc",
 padding:20,
 width:220
 }}>

 <h3>{service.name}</h3>

 <p>Status: {service.status}</p>
 <p>Uptime: {service.uptime}</p>
 <p>Incidents: {service.incidents}</p>

 </div>

 )

}