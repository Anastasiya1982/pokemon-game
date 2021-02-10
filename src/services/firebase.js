import firebase from "firebase";
import "firebase/database";

const fireBaseConfig = {
    apiKey: "AIzaSyDFrgmFFm1a_tOwC4khBAX0AuYlmyqyv0o",
    authDomain: "pokemon-game-49725.firebaseapp.com",
    databaseURL: "https://pokemon-game-49725-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-49725",
    storageBucket: "pokemon-game-49725.appspot.com",
    messagingSenderId: "510205323382",
    appId: "1:510205323382:web:8e2299802d4b41f4145757"
};

!firebase.apps.length && firebase.initializeApp(fireBaseConfig);

class Firebase {
    constructor() {
        this.fire=firebase;
        this.database=firebase.database();
    }

    getPokemonsSoket=(cb)=>{
        this.database.ref('pokemons').on('value',(snapshot)=>{
            cb(snapshot.val());
        })
    }
    getPokemonsOnce=async ()=>{
        return  await this.database.ref('pokemons').once('value').then(snapshot=>snapshot.val());
      }

      postPokemon=(key,pokemon)=>{
        this.database.ref(`pokemons/${key}`).set(pokemon);
      }
      addPokemon=(data,cb)=>{
          const  newKey = this.database.ref().child('pokemons').push().key;
          this.database.ref('pokemons/'+newKey).set(data).then(()=>cb());
      }
}


export default Firebase;
