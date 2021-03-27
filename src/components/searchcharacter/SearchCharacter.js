import React, {useState} from 'react'
import "./SearchCharacter.css"

const SearchCharacter = ({sendQueryToApp}) => {
    // initially the search bar  is empty
    const [searchitem, setSearchItem] = useState('')


    /* this function is called when a name is typed in search bar
    so when the name is typed our state has to change
    it should set itself to a new name
    and also when name is changed we goto send that changed name to pur app.js 
    so that it can query with that particular chnaged name*/
    const onChange = (namechange) => {
        // this will set the state item with new name
        setSearchItem(namechange)
        // will send the new name when ever a event occurs
        sendQueryToApp(namechange)
    }
    return (
        <div>
            <section className="search">
                <form>
                    <input 
                        type = "text"
                        className = "form-control"
                        // the text you see inside a input field
                        placeholder="Search Your Fav Character"
                        autoFocus
                        // search bar is a input field.
                        //  it will hold some value
                        //  adding value to the searchbar is a event which changes
                        //  so we can use stacte to keep track of the change
                        // and onChange event to identify the change.
                        value = {searchitem} // initially value is a empty string and will eventually load on
                        
                        // check below for actual line ==== >
                        // onChange = {(e) => setSearchItem(e.target.value)} // when we type something onchange is going to be triggered
                        // and new value will be set to search item

                        onChange = {(e) => onChange(e.target.value)}

                        // now that we got a value to search . our api should fetch only that value.
                        // so we will have to query our api 

                        // we send value from one component to  other component with props
                        // we send the value from here to app.js


                        /* ====> 
                        onChange = {(e) => setSearchItem(e.target.value)}
                        above line can be written as this
                        onChange = {(e) => onChange(e.target.value)}
                        */

                    />
                </form>
            </section>
            
        </div>
    )
}

export default SearchCharacter;
