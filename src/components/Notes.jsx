import {useState,useEffect} from "react"
import useDebounce from "../hooks/useDebounce"

export default function Notes(){

 const [text,setText]=useState("")
 const [state,setState]=useState("Saved")

 const debounced=useDebounce(text,2000)

 useEffect(()=>{

 if(!debounced) return

 setState("Saving...")

 setTimeout(()=>{
 setState("✓ Saved")
 },1000)

 },[debounced])

 return(

 <div>

 <textarea
 value={text}
 onChange={(e)=>{
 setText(e.target.value)
 setState("Unsaved")
 }}
 />

 <p>{state}</p>

 </div>

 )

}