import React, { useState } from 'react'
import { restroList } from "../data"
import Restraurant from './Restraurant'



const Body = () => {
    // state variables
    const [searchText, setSearchText] = useState('');
    const [restraurants, setRestraurants] = useState(restroList);

    // Search Functionality
    const handleSearch = () => {

        const searchData = restraurants.filter(restrorant => restrorant.strCategory.toLowerCase().includes(searchText.toLowerCase()))
       
        setRestraurants(searchData);
    }

    return (
        <React.Fragment>
            <div>
               
                <input value={searchText} onChange={(e) => { setSearchText(e.target.value)
                if(e.target.value==='')
            {
                setRestraurants(restroList)
            } }} type="text" />
                <button onClick={() => handleSearch()} >Search</button>
            </div>
            <div className="body">
                {
                    restraurants.map((restro) => {
                        return <Restraurant {...restro} key={restro.idCategory} />
                    })
                }

            </div>
        </React.Fragment>
    )
}

export default Body;
