import { useEffect } from "react";
import { useState } from "react";
import UserCard from "./user-card";

const names = ["naif","lamya","masha"];

export default function UserList(props){
    const [ namesList , setNamesList ] = useState(names);

    useEffect(()=>{
        console.log("search" + props.searchName);
        
        if(props.searchName !== "" ){
        
            let filterdData = names.filter((name)=>name.includes(props.searchName));
            setNamesList(filterdData);
        } else{
            setNamesList(names);
        }
    },[props]);

    return(
        <>
        {namesList.map((name)=>{
          return <UserCard userName={name} />
        })}</>
    );
}