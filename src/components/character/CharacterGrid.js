import React from 'react'
import "./CharacterGrid.css";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner"

const CharacterGrid = ({isLoading,items}) => {
    // check if it is still loading
    // if it is still loading then display a spinner
    // else loop through the items and display them as cards
    return isLoading ? (<Spinner/>) : (<section className="cards">
        {/* loop though the items and fetch each item*/}
        {/* map creates a react list:  so keyn has to be unique. something like id will id
        
        in this api char_id is unique to each item so lets use that*/}
        {items.map(item => (
            // <h1 key={item.char_id}>{item.name}</h1>
            // can be written in seperate folder and pulled here like this
            <CharacterItem key={item.char_id} item = {item}></CharacterItem>
        ))}
    </section>)
}

export default CharacterGrid;
