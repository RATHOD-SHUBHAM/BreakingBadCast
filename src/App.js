import Header from "./components/ui/Header";
import CharacterGrid from "./components/character/CharacterGrid";
import SearchCharacter from "./components/searchcharacter/SearchCharacter"
import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';


// =====================================================

/* 

https://www.breakingbadapi.com/api/
the above api will return object of apis

these object apis is further returned as a array


*/

// =========================================================

function App() {
  // This state is for characters
  const [items, setItems] = useState([]);
  //  this will say if data is still being fetched or no
  const [loading, setLoading] = useState(true);
  // keep track of changing name in search bar
  const [query, setQuery] = useState('')

  // We make request with useEffects because we want to render before the app starts.
  // axios returns a promise
  // to send a request and respoce we use async and await
  useEffect(() => {
    const fetchItem = async () => {
      /*
      This was without the query string where i would perform search
      const result = await axios(`https://breakingbadapi.com/api/characters`);
      console.log("The result is: ",result.data);
      */
     // this is with the search query
     // since the name will be changing --> keep a state for it
      const result = await axios(`https://breakingbadapi.com/api/characters?name=${query}`);
      console.log("The result is: ",result.data);
      // once we get the data we got to set it
      setItems(result.data);
      // once i set the data we will change the setLoading to loaded
      setLoading(false);
    }
    // when we create a async function we got to call it
    fetchItem();
    // when ever name changes in search bar = query our event is triggered.
  }, [query]);


  return (
    <div className="App">
      <Header/>
      {/* for Search character information is coming form searchapp to our app */}
      {/* the changed name will be received by  sendQueryToApp function and will set the state to the received name*/}
      <SearchCharacter sendQueryToApp = {(namechange) => setQuery(namechange)}/>
      {/*  for character grid information is going from app to charactergrid */}
      <CharacterGrid isLoading = {loading} items={items}/>
    </div>
  );
}

export default App;
