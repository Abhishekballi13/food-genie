import { useEffect, useState } from "react";


const useOnlineStatus = () => {
    //check if online

    const [onlineStatus,setOnlineStatus] = useState(true);
     
    //we want to put event listener on our page once
    //so we useEffect with empty array
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })

        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })    
    },[])
    //boolean value
    return onlineStatus;
}

export default useOnlineStatus;