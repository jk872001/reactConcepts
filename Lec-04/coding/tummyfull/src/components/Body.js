import React, { useEffect, useState } from 'react'
// import { restroList } from "../data"
import Restraurant from './Restraurant'
import Shimmer from './Shimmer';
import { filterData } from '../utils/helper';

const Body = () => {
    // state variables
    const [searchText, setSearchText] = useState('');
    const [allrestraurants, setAllRestraurants] = useState([]);
    const [filterrestraurants, setFilterRestraurants] = useState([]);



    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }
    // Search Functionality

   
    const handleSearch = () => {
        //  console.log(filterrestraurants);
        const data = filterData(allrestraurants, searchText)
        setFilterRestraurants(data);
    }

    // Fetching Api
    useEffect(() => {
        getRestaurantData();
    }, []);

    const getRestaurantData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();

        setAllRestraurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilterRestraurants(json?.data?.cards[2]?.data?.data?.cards)
        // console.log(json.data.cards[2].data.data.cards);
    }

    return (allrestraurants?.length === 0) ? <Shimmer /> : (
        <React.Fragment>
            <div>

                <input onKeyPress={handleKeyPress} value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)

                    if (e.target.value === '') {
                        setFilterRestraurants(allrestraurants)
                    }
                }} type="text" />
                <button onClick={() => handleSearch()} >Search</button>
            </div>
            {
                (filterrestraurants?.length === 0) ? <h1>No Products Found</h1> :
                    <div className="body">
                        {
                            filterrestraurants?.map((restro) => {
                                return <Restraurant {...restro.data} key={restro.data.id} />
                            })
                        }

                    </div>
            }

        </React.Fragment>
    )
}

export default Body;
