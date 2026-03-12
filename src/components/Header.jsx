export default function Header({autoRefresh,setAutoRefresh,refresh}){

 return(

 <div style={{display:"flex",gap:20,padding:20}}>

 <h2>Cloud Service Monitor</h2>

 <label>
 Auto Refresh
 <input
 type="checkbox"
 checked={autoRefresh}
 onChange={()=>setAutoRefresh(!autoRefresh)}
 />
 </label>

 <button onClick={refresh}>
 Refresh
 </button>

 </div>

 )

}