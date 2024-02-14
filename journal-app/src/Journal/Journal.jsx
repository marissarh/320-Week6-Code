import React, {useEffect}from 'react';
import db from '../db'

export default function Journal() {
    useEffect(()=>{
        const getData =async()=>{
            const querySnapshot = await getDocs(collection(db, "journal-entries"));
            querySnapshot.forEach((doc)=>{
                console.log(doc.id, " => " , doc.data())
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
