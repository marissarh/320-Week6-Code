import { React, useState } from "react";
    import { adddoc, collection } from "firebase/firestore"; 



function AddJournal () {

    const[entry, setEntry]= useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(entry)
    }


// Add a new document in collection "cities"
const docRef= await setDoc(doc(db, "journal-entries"), {
  entry: entry,
  createdAt: new Date( )
});
setEntry('')
}
  return (
    <>
        <h2>
            Add Journal Entry
        </h2>
        <form action ="" onsubmit={handleSubmit}>
            <label htmlFor="entry-input"></label>
            <textarea id="entry-input" onChange={e => setEntry(e.target.value) value={entry}} />
            <button type="submit">Submit</button>
        </form>
        </>
  )
}

export default AddJournal
