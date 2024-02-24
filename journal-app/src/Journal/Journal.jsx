import React,{ useEffect, useState } from 'react';
import db from '../db'
import { collection, getDocs } from "firebase/firestore";


export default function Journal() {
    const [entries, setEntries] = useState([])
    useEffect(()=>{

const getData = async()=>{
     const querySnapshot = await getDocs(collection(db, "journal-entries"));
    console.log(querySnapshot.docs)
     setEntries(querySnapshot.docs)
     querySnapshot.forEach((doc) => {
   //doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

}
getData();

    }, [])

   


    return (
        <div>
            <h1>Journal</h1>
        </div>
    );
}
