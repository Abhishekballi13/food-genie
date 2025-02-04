import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

   //this is a custom hook
  //its job is to return restraunt information,try to think what is the contract of hook
  //what it is getting and what it will return
const useRestrauntMenu = (resId) => { 

  const [resInfo,setResInfo] = useState(null);
 
  useEffect(()=>{
    fetchData();
  },[])
   
  const fetchData = async () => {
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
    setResInfo(json.data);
  }  

  return resInfo;
  
}

export default useRestrauntMenu;