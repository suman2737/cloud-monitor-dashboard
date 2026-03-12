export default function useRole(){

 const role = localStorage.getItem("userRole") || "viewer"

 return{
  role,
  isAdmin: role==="admin",
  isOperator: role==="operator",
  isViewer: role==="viewer"
 }

}