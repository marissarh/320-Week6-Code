import React, {useEffect, useState}from 'react';
import db from '../db'
import { onSnapshot } from 'firebase/firestore';
import AddJournal from './AddJournal';

export default function Journal() {
    const [entries, setEntries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] =useState(false);
    useEffect(()=>{
        const getData =async()=>{
            try{
            onSnapshot(collection(db, "journal-entries"), snapshot =>{
                console.log("Current data: ", snapshot.docs);
                setEntries(querySnapshot.docs)
            });
            setIsLoading(false)
           
            
            
        }
        catch {
            setHasError(true)
            setIsLoading(false)
        }
    }
        getData();
    return () => onSnapshot;
}
    ,[])
    return(
        <div>
            <h1>Journal</h1>
            {entries.map(entry =>{
                return(
                <div key={entry.id}>
                    {entry.data().entry}
                </div>)
            })}
        </div>
    );
}
