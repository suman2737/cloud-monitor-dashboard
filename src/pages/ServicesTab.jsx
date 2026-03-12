import {services} from "../data/mockData"
import ServiceCard from "../components/ServiceCard"

export default function ServicesTab(){

 return(

 <div style={{display:"flex",gap:20}}>

 {services.map(service=>(
   <ServiceCard key={service.id} service={service}/>
 ))}

 </div>

 )

}