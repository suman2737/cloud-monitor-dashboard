import { useState } from "react"
import { incidents } from "../data/mockData"
import IncidentTable from "../components/IncidentTable"
import Filters from "../components/Filters"
import Pagination from "../components/Pagination"
import SidePanel from "../components/SidePanel"

export default function IncidentsTab(){

 const [data,setData] = useState(incidents)
 const [selected,setSelected] = useState(null)
 const [filters,setFilters] = useState({})
 const [page,setPage] = useState(1)

 const pageSize = 10

 // Filter logic
 const filtered = data.filter(row => {

  if(filters.severity && filters.severity.length){
   if(!filters.severity.includes(row.severity)) return false
  }

  if(filters.status && filters.status.length){
   if(!filters.status.includes(row.status)) return false
  }

  return true

 })

 const paginated = filtered.slice(
  (page-1)*pageSize,
  page*pageSize
 )

 return (

 <div style={{marginTop:20}}>

 <Filters
  filters={filters}
  setFilters={setFilters}
 />

 <IncidentTable
  data={paginated}
  onSelect={setSelected}
  setData={setData}
 />

 <Pagination
  page={page}
  setPage={setPage}
  total={filtered.length}
 />

 <SidePanel
  incident={selected}
  onClose={()=>setSelected(null)}
 />

 </div>

 )

}