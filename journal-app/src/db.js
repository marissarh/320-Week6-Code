import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: process.env.AIzaSyDSqGl7H9vTrcFQiLhGMo33hiaP-G4RQ-0,
  authDomain: process.env.journal-app-5ebba.firebaseapp.com,
  projectId: process.env.journal-app-5ebba
});

const db = getFirestore(app);

export default db;
