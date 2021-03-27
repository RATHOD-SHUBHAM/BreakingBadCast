import React from 'react'
import './CharacterGrid.css';

function CharacterItem({item}) {
    // console.log(item);
    // return (
    //     <div>
    //         {item.occupation}
    //     </div>
    // )
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img} alt =' '/>
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong> Actor Name:</strong> {item.portrayed}
                        </li>
                        <li>
                            <strong> DOB: </strong> {item.birthday}
                        </li>
                        <li>
                            <strong>Occupation: </strong> {item.occupation}
                        </li>
                        <li>
                            <strong>status in the series: </strong> {item.status}
                        </li>
                        <li>
                            <strong>Appearance: </strong> {item.appearance}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem;
