import { filtersConfig } from "../config/filterConfig"

export default function Filters({filters,setFilters}){

 function toggle(type,value){

 const current = filters[type] || []

 if(current.includes(value)){
  setFilters({...filters,[type]:current.filter(v=>v!==value)})
 }
 else{
  setFilters({...filters,[type]:[...current,value]})
 }

 }

 return (

 <div style={{marginBottom:20}}>

 {filtersConfig.map(filter => (

 <div key={filter.id}>

 <b>{filter.label}</b>

 {filter.options.map(option => (

 <button
 key={option}
 onClick={()=>toggle(filter.id,option)}
 >
 {option}
 </button>

 ))}

 </div>

 ))}

 </div>

 )

}