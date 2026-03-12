export default function useRole(){

 const role = localStorage.getItem("userRole") || "admin"

 return{role}

}