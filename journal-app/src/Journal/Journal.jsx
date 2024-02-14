import React, {useEffect}from 'react';
import db from '../db'

export default function Journal() {
    const [entries, setEntries] = useState([])
    useEffect(()=>{
        const getData =async()=>{
            const querySnapshot = await getDocs(collection(db, "journal-entries"));
            setEntries(querySnapshot.docs)
            
        }
        getData();
    }, [])
    return (
        <div>
            <h1>Journal</h1>
            {entries.map(entry =>{
                return
                <div key={entry.id}>
                    {entry.data().entry}
                </div>
            })}
        </div>
    );
}
