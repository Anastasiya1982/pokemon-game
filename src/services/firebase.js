import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDFrgmFFm1a_tOwC4khBAX0AuYlmyqyv0o",
    authDomain: "pokemon-game-49725.firebaseapp.com",
    databaseURL: "https://pokemon-game-49725-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-49725",
    storageBucket: "pokemon-game-49725.appspot.com",
    messagingSenderId: "510205323382",
    appId: "1:510205323382:web:8e2299802d4b41f4145757"
};
firebase.initializeApp(firebaseConfig);
export const fire=firebase;
export const database=firebase.database();

export default database;
