import Modal from 'react-modal';
import { useState } from 'react';


export default function CompMod() {

    const [barsToLoad, setBarToLoad] = useState([150,140]);


    const add = (event) => {
        event.preventDefault();
        const actualBarToLoad = parseInt(event.target[0].value);
        let barsToLoadCopy = [...barsToLoad];
        barsToLoadCopy.push(actualBarToLoad);
        setBarToLoad(barsToLoadCopy);

    }

    return <>
        <div className='WrapperLoad'>
            <h3>Next bar</h3>
            <hr></hr>
            {barsToLoad.map((bar, id)=>{
                return <p key={id}>- {bar} kg</p>
            })}
        </div>
        
        <form onSubmit={add}>
            <input type="number" step="2.5" min={20}/>
            <input type="submit" value="Add"/>
        </form>
        
    </>
}
