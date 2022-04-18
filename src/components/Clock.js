import React,{useEffect,useState} from "react";

export default function Clock(){
    var time = new Date();
    const [updateTime, setUpdatedTime] = useState({});
    //update the clock time
    function Update(){
        time = new Date()
        setUpdatedTime({
         hour: time.getHours(),
         min: time.getMinutes(),
         sec : time.getSeconds()
        })
      }
     useEffect(()=>{ 
      const timer = setTimeout(() => {
         Update()
       }, 1000);
       return()=>{
        clearTimeout(timer);
       }
    });
    return(
        <div className="display_currentTime"> Current Time: <b>{updateTime.hour}: {updateTime.min}: {updateTime.sec}</b>  </div>
    );
}